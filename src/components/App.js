import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import PersonList from './PersonList'
import PersonSearch from "./PersonSearch";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'All',
      people: [],
    }
  }

  setSearchTerm = (name) => {
    name = name || null
    const query = `
     MATCH (p:Person)-->(m:Movie) WHERE {name} is null OR toLower(p.name) contains toLower($name)
     RETURN p { .name, .born, movieCount: count(distinct m), firstYear: min(m.released), lastYear: max(m.released), 
	            years: max(m.released)-min(m.released), moviesPerYear: toFloat(count(distinct m))/(max(m.released)-min(m.released)+1), 
	            coStaffCount: sum(size((m)<--())-1),
                movies: collect(m {.title, .released,.tagline, staff: [(m)<--(st) | st.name]}) } as person limit 15;
    `
//    console.log(this.props, name)
    const session = this.props.driver.session();
    session.run(query, {name}).then((result) => {
       this.setState({name:name, people:result.records.map((r)=>{ var p=r.get('person'); console.log(p); return p;})});
       session.close();
    })
  };


  render() {
    const {name,people} = this.state;
    return (
      <div>
        <PersonSearch setSearchTerm={this.setSearchTerm} name={name}/>
        <PersonList people={people}/>
      </div>
    )
  }
}

export default App;

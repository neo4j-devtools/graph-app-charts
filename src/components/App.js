import React, { Component, useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

import PersonList from './PersonList'
import PersonSearch from "./PersonSearch";
import {useReadCypher} from 'use-neo4j';

export default function App() {

  const [name, setName] = useState('All');
  const [people, setPeople] = useState([]);

  const setSearchTerm = (name) => {
    name = name || null
    const query = `
     MATCH (p:Person)-->(m:Movie) WHERE {name} is null OR toLower(p.name) contains toLower($name)
     RETURN p { .name, .born, movieCount: count(distinct m), firstYear: min(m.released), lastYear: max(m.released), 
	            years: max(m.released)-min(m.released), moviesPerYear: toFloat(count(distinct m))/(max(m.released)-min(m.released)+1), 
	            coStaffCount: sum(size((m)<--())-1),
                movies: collect(m {.title, .released,.tagline, staff: [(m)<--(st) | st.name]}) } as person limit 15;
    `
    const {loading, error, records} = useReadCypher(query);
    setName(name);
    if (records) {
      setPeople(records.map((r)=>{ var p=r.get('person'); console.log(p); return p;}));
    }
  };
  return (
    <div>
      <PersonSearch setSearchTerm={setSearchTerm} title={name}/>
      <PersonList people={people}/>
    </div>
    )
}

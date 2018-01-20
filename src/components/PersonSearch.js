import React, {Component} from 'react';

import {Input, Button} from 'semantic-ui-react';

class PersonSearch extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: props.title
    };
  }

  setTitle = () => {
    this.props.setSearchTerm(this.state.value);
  };

  handleChange = (event) => {
    if (event) {
      this.setState({
        value: event.target.value
      })
    }
  };


  render() {
    const {value} = this.state;
    return(
      <Input
        onChange={this.handleChange}
        value={value}
        fluid
        placeholder="Placeholder">
        <input />
        <Button onClick={this.setTitle}>Search</Button>
      </Input>
    )
  }
}

export default PersonSearch;
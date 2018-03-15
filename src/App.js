import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      txt: 'this is state text',
      cat: 0
    }
  }

  update = (e) => {
    this.setState(
      {txt: e.target.value}
    )
  }

  render(){
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update} />
        <Widget update={this.update} />
        <Widget update={this.update} />
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update} />

App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
};

App.defaultProps = {
  txt : "This is default string",
}

export default App

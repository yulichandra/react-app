import React from 'react';
import PropTypes from 'prop-types'

class TextField extends React.Component{
    constructor(){
        super();
        this.state = {
            type: "text",
            text: "",
            error: "",
            placeholder: "Test placeholder",
        }
    }

    textChanged = (e) => {
        this.setState({
            text: e.target.value,
            error: e.target.value,
        });
    }

    componentWillMount(){
        // this.state.text = this.state.text == "" ? this.state.placeholder : this.state.text;
    }

    render(){
        return (
            <div>
                <input 
                    type={this.state.type} 
                    value={this.state.text}
                    onChange={this.textChanged}
                    />
                <br/>
                <span>{this.state.error}</span>
            </div>
        )
    }
}

export default TextField;
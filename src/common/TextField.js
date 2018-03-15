import React from 'react';
import PropTypes from 'prop-types'

class TextField extends React.Component{
    constructor(props){
        super(props);
        const {type,text} = props;
        this.state = {
            type: type,
            text: text,
            errorText: "",
            placeholder: "Test placeholder",
        }
    }

    textChanged = (e) => {
        this.setState({
            text: e.target.value,
        });
    }

    render(){
        return (
            <div>
                <input 
                    type={this.state.type} 
                    value={this.state.text}
                    onChange={this.textChanged}
                />
                <span>
                    {this.state.errorText}
                </span>
            </div>
        )
    }
}

TextField.defaultProps = {
    text: "Hello",
    type: "text",
}

TextField.propTypes = {
    type: PropTypes.oneOf([
        "text", 
        ]),
    text: PropTypes.string,
    errorText: PropTypes.string,
    placeholder: PropTypes.string,
}

export default TextField;
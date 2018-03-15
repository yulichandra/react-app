import React from 'react';
import PropTypes from 'prop-types'

class TextField extends React.Component{
    constructor(props){
        super(props);
        const {type, value, label} = props;
        this.state = {
            label: label,
            type: type,
            value: value,
            errorText: "",
            placeholder: "",
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
                <span>{this.state.label}</span>
                <input 
                    type={this.state.type} 
                    value={this.state.value}
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
    label: "Label",
    type: "text",
}

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.oneOf([
        "text", 
        ]).isRequired,
    value: PropTypes.string,
    errorText: PropTypes.string,
    placeholder: PropTypes.string,
}

export default TextField;
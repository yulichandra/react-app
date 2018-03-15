import React from 'react';
import TextField from '../common/TextField'

class FullnameField extends TextField {
    constructor(props){
        super(props);
        this.state = {
            label: "Fullname",
        }
    }

    focused = () => {
        const a = this.prototype.state.value;
        console.log(a);
    }

    render(){
        return (
            <TextField 
                label={this.state.label}
            />
            )
    }
}

export default FullnameField;
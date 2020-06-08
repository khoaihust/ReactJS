import React from 'react';
import ReactDOM from 'react-dom';


const CheckBoxAndInput = (state) => {
    return (
        <div className='ui grid'>
            <div className='eight wide column eightCol comon'>
                <input  type={props.typee} />
                <label className='editText'><strong> {props.name}</strong></label>
                <p>{props.pname}</p>
            </div>
            <div className='eight wide column comon'>
                <input className='editInput' type='text' style={{border: "none"}} />
                <label className='editLabel'>
                    US$
                </label>                
            </div>
        </div>
    )
}

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value7: 0,
            value8: 0
        }
    }

    

    handleChange = (event) => {
        event.preventDefault();
        let value1 = parseInt(event.target.value1);
        let value2 = parseInt(event.target.value2);
        let value3 = parseInt(event.target.value3);
        let value4 = parseInt(event.target.value4);
        let value5 = parseInt(event.target.value5);
        let value6 = parseInt(event.target.value6);

        this.setState({
            value7 = value1 + value2 + value3 + value4 + value5,
            value8 = value7 - value6 
        })

        render() {
            return(

            )
        }
    }
}
export default Form;
import React from 'react'
import { connect } from 'react-redux';

const Card = (props) => {
    return (
        <div>
            <p><strong>{props.name}</strong></p>
            <input className='in inCard' 
                type={props.type} 
                value={props.value} 
                onChange={props.handleChange}
                readOnly={props.read}
                ref={props.cref}
            />
        </div>
    )
}

class Popup extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0,
            value5: 0,
            value6: 0,
            nextId: 0
        }
    }

    handleChangeId = () => {
        this.setState( prevState => ({
            nextId: prevState.nextId + 1
        }))
    }
    
    handleChangeVal1 = (e) => {
        const value1 = Number(e.target.value);
        this.setState( prevState => ({
            value1, 
            value5: value1 + prevState.value2 + + prevState.value3,
            value6: value1 + prevState.value2 + prevState.value3 - prevState.value4
        }));
    }

    handleChangeVal2 = (e) => {
        const value2 = Number(e.target.value);
        this.setState( prevState => ({
            value2, 
            value5: value2 + prevState.value1 + + prevState.value3,
            value6: value2 + prevState.value1 + prevState.value3 - prevState.value4
        }));
    }

    handleChangeVal3 = (e) => {
        const value3 = Number(e.target.value);
        this.setState( prevState => ({
            value3, 
            value5: value3 + prevState.value2 + + prevState.value1,
            value6: value3 + prevState.value2 + prevState.value1 - prevState.value4
        }));
    }

    handleChangeVal4 = (e) => {
        const value4 = Number(e.target.value);
        this.setState( prevState => ({ 
            value4,    
            value6: prevState.value5 - value4
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const name = this.getName.value
        const address = this.getAddress.value
        const phone = this.getPhone.value
        const total = this.getTotal.value
        const id = this.handleChangeId
        const data = {
            id,
            name,
            address,
            phone,
            total,
            editting: false
        }
        this.props.dispatch ({
            type: 'ADD_USER',
            data
        })
        console.log(data)
        this.getName.value = ''
        this.getAddress.value = ''
        this.getPhone.value = ''
        this.getTotal.value = 0

        this.props.closePopup
        
    }

     
    //  class Test extends React.Component {
    //     onClick(event) {
    //        func1();
    //        func2();
    //     }
    //     render() {
    //        return (
    //           <a href="#" onClick={this.onClick}>Test Link</a>
    //        );
    //     }
    //  }

    render() {
        return (
            <div className="popup">
                <div className='popup_inner'>
                    <div className='ui container OverallContainer'>                       
                        <div className='ui container body'>
                            <div className='ui fluid card'>
                                <div className='header'>
                                    <p><strong>Invoice #{this.props.id}</strong>  {/*Cho nay dang bi sai Id */}
                                        <i>
                                            <button className='btnclose' onClick={this.props.closePopup}>
                                                <i className='times icon'></i>
                                            </button>
                                        </i>
                                    </p>
                                </div>
                                <div className='content'>
                                    <div className='ui grid'>
                                        <div className='three column row'>
                                            <div className='column'>
                                                <Card name='Name' cref={(input) => this.getName = input} />
                                            </div>
                                            <div className='column'>
                                                <Card name='Address' cref={(input) => this.getAddress = input} />
                                            </div>
                                            <div className='column'>
                                                <Card name='Phone' cref={(input) => this.getPhone = input} />
                                            </div>
                                        </div>
                                        <div className='three column row'>
                                            <div className='column'>
                                                <Card name='FOB Price' type='number' value={this.state.value1 ? this.state.value1 : ''} handleChange={this.handleChangeVal1}/>
                                            </div>
                                            <div className='column'>
                                                <Card name='Inspection' type='number' value={this.state.value2 ? this.state.value2 : ''} handleChange={this.handleChangeVal2}/>
                                            </div>
                                            <div className='column'>
                                                <Card name='Delivery' type='number' value={this.state.value3 ? this.state.value3 : ''} handleChange={this.handleChangeVal3}/>
                                            </div>
                                        </div>
                                        <div className='three column row'>
                                            <div className='column'>
                                                <Card name='Protection' type='number' value={this.state.value4 ? this.state.value4 : ''} handleChange={this.handleChangeVal4} />
                                            </div>
                                            <div className='column'>
                                                <Card name='Total' type='number' value={this.state.value5 ? this.state.value5 : ''} read='1' cref={(input) => this.getTotal = input} />
                                            </div>
                                            <div className='column'>
                                                <Card name='Reserved to Seller' type='number' value={this.state.value6 ? this.state.value6 : ''} read='1' />
                                            </div>
                                        </div>
                                        <div className='ui one column centered grid'>
                                            <button className='btnSave' type='submit' onClick={this.handleSubmit} >
                                                Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default connect()(Popup)
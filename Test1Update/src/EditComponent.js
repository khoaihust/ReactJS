import React, {Component} from 'react'
import {connect} from 'react-redux'

const Card = (props) => {
    return (
        <div>
            <p><strong>{props.name}</strong></p>
            <input className='in inCard' 
                type={props.type} 
                value={props.value} 
                onChange={props.handleChange}
                readOnly={props.read}
                ref={props.ref}
            />
        </div>
    )
}

class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault()
        const newName = this.getName.value         
        const newAddress = this.getAddress.value 
        const newPhone = this.getPhone.value
        const newTotal = this.getTotal.value
        const data = {
            newName,
            newAddress,
            newPhone,
            newTotal
        }
        this.props.dispatch({
            type: 'UPDATE',
            id: this.props.add.id,
            data: data 
        })
    }

    render() {
        return (
            <div className="popup">
                <div className='popup_inner'>
                    <div className='ui container OverallContainer'>                       
                        <div className='ui container body'>
                            <div className='ui fluid card'>
                                <div className='header'>
                                    <p><strong>Invoice #{this.state.id}</strong>
                                        <i>
                                            <button className='btnclose' onClick={this.props.closePopUp}>
                                                <i className='times icon'></i>
                                            </button>
                                        </i>
                                    </p>
                                </div>
                                <div className='content'>
                                    <div className='ui grid'>
                                        <div className='three column row'>
                                            <div className='column'>
                                                <Card name='Name' ref={(input) => this.getName = input} />
                                            </div>
                                            <div className='column'>
                                                <Card name='Address' ref={(input) => this.getAddress = input} />
                                            </div>
                                            <div className='column'>
                                                <Card name='Phone' ref={(input) => this.getPhone = input} />
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
                                                <Card name='Total' type='number' value={this.state.value5 ? this.state.value5 : ''} read='1' ref={(input) => this.getTotal = input} />
                                            </div>
                                            <div className='column'>
                                                <Card name='Reserved to Seller' type='number' value={this.state.value6 ? this.state.value6 : ''} read='1' />
                                            </div>
                                        </div>
                                        <div className='ui one column centered grid'>
                                            <button className='btnSave' onSubmit={this.handleEdit}>
                                                Update</button>
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

export default connect()( EditComponent)
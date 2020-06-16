import React from 'react'
import {connect} from 'react-redux'
import Popup from '../components/Popup';

const Colum = (props) => {
    
    return (
        <div className='ui grid'>
            <div className='six wide column sixCol'>
                <label><strong>{props.detail}</strong></label>   
            </div>           
            <div className='ten wide column tenCol'>
                <input className='in' tyle='text' style={{border: "none"}} 
                    ref={props.cref}
                />
            </div>
        </div>
    )
}

const Card = (props) => {
    return (
        <div>
            <p><strong>{props.name}</strong></p>
            <input className='in inCard' type = 'text' placeholder={props.text} />
        </div>
    )
}

const CheckBox = (props) => {
    return (
        <div className={props.class}>
            <input type='checkBox' />
            <label> {props.valuee}</label>
        </div>
    )
}

const TextBox = (props) => {
    return (
        <div>
            <div>
                <p><strong>{props.nameBox}</strong></p>
            </div>
            <textarea rows='11' cols='70' placeholder={props.text} />
        </div>
        
            
        
    )
}


const Footer = (props) => {

    return (
        <div>
            <p><strong>{props.name}</strong></p>
            <input className='inputFooter' type='text' />
            <select className='selectFooter'>
                <option>{props.currency1}</option>
                <option>{props.currency2}</option>
                <option>{props.currency3}</option>
            </select>
        </div>
    )
}

const CheckBoxAndInput = (props) => {
    return (
        <div className='ui grid'>
            <div className='eight wide column eightCol comon'>
                <input type={props.type} />
                <label className='editText'><strong> {props.name}</strong></label>
                <p>{props.pname}</p>
            </div>
            <div className='eight wide column comon'>
                <input className='editInput' style={{border: "none"}} 
                    type={props.typee}
                    onChange={props.handleChange}
                    // className = {props.class}  khong biet no co thay doi className hay khong, hay la no them className nay
                    readOnly = {props.read}
                    value={props.value}
                    ref={props.childref}
                />
                <label className='editLabel'>
                    US$
                </label>
            </div>
        </div>
    )
}

class EditInvoice extends React.Component {

    constructor() {
        super();
        this.state = {
            value1: 0,
            value2: 0,
            value3: 0,
            value4: 0,
            value5: 0,
            value6: 0,
            value7: 0,
            value8: 0,
            showPopup: false
        };
    }

    handleChangeVal1 = (e) => {
        const value1 = Number(e.target.value);
        this.setState( prevState => ({
            value1, 
            value7: value1 + prevState.value2 + + prevState.value3 + prevState.value4 + prevState.value5,
            value8: value1 + prevState.value2 + prevState.value3 + prevState.value4 + prevState.value5 - prevState.value6          
        }));
    }

    handleChangeVal2 = (e) => {
        const value2 = Number(e.target.value);
        this.setState( prevState => ({
            value2, 
            value7: value2 + prevState.value1 + + prevState.value3 + prevState.value4 + prevState.value5,
            value8: value2 + prevState.value1 + prevState.value3 + prevState.value4 + prevState.value5 - prevState.value6          
        }));
    }

    handleChangeVal3 = (e) => {
        const value3 = Number(e.target.value);
        this.setState( prevState => ({
            value3, 
            value7: value3 + prevState.value2 + + prevState.value1 + prevState.value4 + prevState.value5,
            value8: value3 + prevState.value2 + prevState.value1 + prevState.value4 + prevState.value5 - prevState.value6 
        }));
    }

    handleChangeVal4 = (e) => {
        const value4 = Number(e.target.value);
        this.setState( prevState => ({
            value4, 
            value7: value4 + prevState.value2 + + prevState.value3 + prevState.value1 + prevState.value5,
            value8: value4 + prevState.value2 + prevState.value3 + prevState.value1 + prevState.value5 - prevState.value6          
        }));
    }
    handleChangeVal5 = (e) => {
        const value5 = Number(e.target.value);
        this.setState( prevState => ({
            value5, 
            value7: value5 + prevState.value2 + + prevState.value3 + prevState.value4 + prevState.value1,
            value8: value5 + prevState.value2 + prevState.value3 + prevState.value4 + prevState.value1 - prevState.value6          
        }));
    }
    handleChangeVal6 = (e) => {
        const value6 = Number(e.target.value);
        this.setState( prevState => ({
            value6,         
            value8: prevState.value7 - value6
        }));
    }

    handleEdit = (e) => {
        e.preventDefault()
        const newName = this.getName.value
        const newAddress = this.getAddress.value
        const newPhone = this.getPhone.value
        const newValue1 = this.getValue1.value
        const newValue2 = this.getValue2.value
        const newValue3 = this.getValue3.value
        const newValue4 = this.getValue4.value
        const newValue5 = this.getValue5.value
        const newValue6 = this.getValue6.value
        const newSeller = this.getSeller.value
        const newTotal = this.getTotal.value

        const data = {
            newName,
            newAddress,
            newPhone,
            newValue1,
            newValue2,
            newValue3,
            newValue4,
            newValue5,
            newValue6,
            newSeller,
            newTotal,
            editting: true
        }

        this.props.dispatch({
            type: 'UPDATE',
            id: this.props.invoice.id,
            data
        })
    }
    
    render() {
        return (
            <div className='popup'>
                <div className='popup_inner'>
                <div className='ui container OverallContainer'>
                <div className='Header'>
                    <p><strong>Invoice #{this.props.invoice.id}</strong>
                        <i>
                            <button className='btn' onClick={this.props.closePopup}>
                                <i className='times icon'></i>
                            </button>
                        </i>
                    </p>
                </div>

                <div className='ui container body'>
                <p><strong>1994 Nissan 180SX</strong></p>
                <p><strong>Vin No.:</strong> CFJ3860970</p>
                <div className="ui grid gridtable">         
                    <div className="eight wide column col1"><Colum detail="Consignee Name" cref={(input) => this.getName = input}/></div>
                    <div className="eight wide column col2"><Colum detail="Notify Party Name" /></div>
                    <div className="eight wide column col2"><Colum detail="Consignee Address" cref={(input) => this.getAddress = input}/></div>
                    <div className="eight wide column col1"><Colum detail="Notify Party Address" /></div>
                    <div className="eight wide column col1"><Colum detail="Consignee Phone" cref={(input) => this.getPhone = input}/></div>
                    <div className="eight wide column col2"><Colum detail="Notify Party Phone" /></div>
                </div> 
                <div className = 'ui fluid card'>
                    <div className='content contentHeaderCard'>
                        <div className = 'header headercard'>SEND DOCUMENT TO BELOW ADDRESS</div>
                    </div>   
                    <div className='content'>
                        <div className = 'ui grid'>
                            <div className = 'three column row'>
                                <div className='column'><Card name="Name" /></div>
                                <div className='column'><Card name="Address" /></div>
                                <div className='column'><Card name="Phone" /></div>
                            </div>
                        </div>
                    </div>         
                </div>
                <div className = 'ui grid'>
                    <div className='three column row'>
                        <div className='column'><Card name='Country' text='Enter Country' /></div>
                        <div className='column'><Card name='Port' text='Enter port & CFS (if any)'/></div>
                        <div className='column'><Card name='City Delivery (If any)' text='Enter city'/></div>
                    </div>
                </div>
                <div className='ui grid'>
                    <div className = 'three column row'>
                        <div className="column"><CheckBox valuee='Show Shipper' /></div>
                        <div className="column"><CheckBox valuee='Show Price Breakdown' /></div>
                        <div className="column"><CheckBox valuee='Pay by 50% first (Installment payment' /></div>
                    </div>
                </div>
                <div className='ui grid'>
                    <div className='two column row'>
                        <div className = 'column'>
                            {/* <Form /> */}
                            <div className='eight row column '>
                                <div className='row'>
                                    <CheckBoxAndInput typee='text' type='checkBox' name='FOB Price' 
                                        value={this.state.value1 ? this.state.value1 : ''} 
                                        handleChange={this.handleChangeVal1}
                                        childref={(input) => this.getValue1 = input}
                                    />
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='number' type='checkBox' name='Inspection' 
                                        value={this.state.value2? this.state.value2 : ''} 
                                        handleChange={this.handleChangeVal2}
                                        childref={(input) => this.getValue2 = input}
                                    />
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='number' type='checkBox' name='Insurance' 
                                        value={this.state.value3? this.state.value3 : ''} 
                                        handleChange={this.handleChangeVal3}
                                        childref={(input) => this.getValue3 = input}
                                    />
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='number' type='checkBox' name='Shipping Cost' 
                                    value={this.state.value4? this.state.value4 : ''} 
                                    handleChange={this.handleChangeVal4}
                                    childref={(input) => this.getValue4 = input}
                                    />
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='number' type='checkBox' name='City Delivery Cost' 
                                        value={this.state.value5? this.state.value5 : ''} 
                                        handleChange={this.handleChangeVal5}
                                        childref={(input) => this.getValue5 = input}
                                    />
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='number' type='checkBox' name='Buyer Protection' 
                                        value={this.state.value6? this.state.value6 : ''}
                                        handleChange={this.handleChangeVal6}
                                        childref={(input) => this.getValue6 = input}
                                    />
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='text' type='hidden' name='Buyer Invoice Total Amount' 
                                        value={this.state.value7?this.state.value7 : ''} 
                                        read='1' 
                                        childref={(input) => this.getTotal = input}
                                    />
                                </div>
                                <div className='row row8'>
                                    <CheckBoxAndInput typee='text' type='hidden' name='Reserved to Seller' 
                                        pname='(exclusice buyer protection)' 
                                        value={this.state.value8?this.state.value8 : ''} 
                                        read='1'
                                        childref={(input) => this.getSeller = input}
                                    />                                    
                                </div>
                            </div>
                        </div>
                        <div className='column'>
                            <div className='two row column'>
                                <div className='row'><TextBox nameBox='Additional Cost' text='Description | Cost' /></div>
                                <div className='row'><TextBox nameBox='Additional Description' text='Description' /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='ui grid'>
                        <div className='two column row'>
                            <div className='column'>
                                <div>
                                    <button className="ui blue button btnPreview">
                                        <i className="eye icon"></i>Preview
                                    </button>
                                    <button className="ui orange button btnSave" onClick={this.handleEdit}>
                                    <i className="sync alternate icon"></i>Update{/*{this.props.buttonName}*/}
                                    </button>

                                </div>
                            </div>
                            <div className='column'>
                                <button className="fluid ui button btnNext">
                                <i className="arrow right icon"></i> Next
                                </button>
                            </div>
                        </div>
                    </div>                   
                </div>                
            </div>

                <div className='footer'>
                <div className='ui grid'>
                    <div className='three column row'>
                        <div className='column colFooter borderFooter'>
                            <Footer name='Discount' currency1='USD' currency2='VND' currency3='Yen' />
                            <CheckBox class='CheckBoxx' valuee='Do not Show Vin Number' />
                        </div>
                        <div className='column colFooter borderFooter'>
                            <Footer name='Issue In Other Currencies' currency1='USD' currency2='VND' currency3='Yen' />
                            <CheckBox class='CheckBoxx' valuee='Apply same currency for break down cost' />
                        </div>
                        <div className='column colFooter'>
                            <Footer name='Discount' currency1='USD' currency2='VND' currency3='Yen' />
                            <CheckBox class='CheckBoxx' valuee='Show CFJ Kenya Bank Account' />
                            <CheckBox class='CheckBoxx' valuee='Issue invoice in KES and show KES Account' />
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

export default connect()(EditInvoice)
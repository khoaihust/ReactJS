import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
// import Form from './Form';



const Colum = (props) => {
    
    return (
        <div className='ui grid'>
            <div className='six wide column sixCol'>
                <label><strong>{props.detail}</strong></label>   
            </div>           
            <div className='ten wide column tenCol'>
                <input className='in' tyle='text' style={{border: "none"}}></input>
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


const CheckBoxAndInput = (props) => {
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

// class Form extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value1: '',
//             value2: '',
//             value3: '',
//             value4: '',
//             value5: '',
//             value6: '',
//             value7: 0,
//             value8: 0,
//         }

//         // this.handelChange = this.handelChange.bind(this);
//     }

//     CheckBoxAndInput = (props) => {
//         return (
//             <div className='ui grid'>
//                 <div className='eight wide column eightCol comon'>
//                     <input  type={props.typee} />
//                     <label className='editText'><strong> {props.name}</strong></label>
//                     <p>{props.pname}</p>
//                 </div>
//                 <div className='eight wide column comon'>
//                     <input className='editInput' type='text' style={{border: "none"}} />
//                     <label className='editLabel'>
//                         US$
//                     </label>
                    
//                 </div>
//             </div>
//         )
//     }

//     handelChange = (event) => {
//         event.preventDefault();
//         this.setState({
//             value1: event.target.value1,
//             value2: event.target.value2,
//             value3: event.target.value3,
//             value4: event.target.value4,
//             value5: event.target.value5,
//             value6: event.target.value6,
//             value7: parseInt(value1) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5),
//             value8: value7 - parseInt(value6)
//         })
//     }

//     render() {
//         return (
//             <div className='eight row column '>
//                                 <div className='row'>
//                                     <CheckBoxAndInput typee='checkBox' name='FOB Price' value1={this.state.value1} onChange={this.handelChange}/>
//                                 </div>
//                                 <div className='row'>
//                                     <CheckBoxAndInput typee='checkBox' name='Inspection' value2={this.state.value2} onChange={this.handelChange}/>
//                                 </div>
//                                 <div className='row'>
//                                     <CheckBoxAndInput typee='checkBox' name='Insurance' value3={this.state.value3} onChange={this.handelChange}/>
//                                 </div>
//                                 <div className='row'>
//                                     <CheckBoxAndInput typee='checkBox' name='Shipping Cost' value4={this.state.value4} onChange={this.handelChange}/>
//                                 </div>
//                                 <div className='row'>
//                                     <CheckBoxAndInput typee='checkBox' name='City Delivery Cost' value5={this.state.value5} onChange={this.handelChange}/>
//                                 </div>
//                                 <div className='row'>
//                                     <CheckBoxAndInput typee='checkBox' name='Buyer Protection' value6={this.state.value6} onChange={this.handelChange}/>
//                                 </div>
//                                 <div className='row'>
//                                     <CheckBoxAndInput typee='hidden' name='Buyer Invoice Total Amount' value7={this.state.value7} onChange={this.handelChange}/>
//                                 </div>
//                                 <div className='row row8'>
//                                     <CheckBoxAndInput typee='hidden' name='Reserved to Seller' pname='(exclusice buyer protection)' value7={this.state.value8} onChange={this.handelChange}/>                                    
//                                 </div>
//                             </div>
//         )
//     }  
// }

class App extends React.Component {
    render() {
        return (
            <div className='ui container OverallContainer'>
                <div className='Header'>
                    <p><strong>Invoice #123456</strong>
                        <i>
                            <button className='btn'>
                                <i className='times icon'></i>
                            </button>
                        </i>
                    </p>
                </div>
                
                <div className='ui container body'>
                {/* <p className='title'><strong>Invoice #123456</strong>
                <i>
                    <button className='btn'>
                        <i className="times icon"></i>
                    </button>
                    
                    
                </i>
                </p> */}
                <p><strong>1994 Nissan 180SX</strong></p>
                <p><strong>Vin No.:</strong> CFJ3860970</p>
                <div className="ui grid gridtable">         
                    <div className="eight wide column col1"><Colum detail="Consignee Name"/></div>
                    <div className="eight wide column col2"><Colum detail="Consignee Address" /></div>
                    <div className="eight wide column col1"><Colum detail="Consignee Phone" /></div>
                    <div className="eight wide column col2"><Colum detail="Notify Party Name" /></div>
                    <div className="eight wide column col1"><Colum detail="Notify Party Address" /></div>
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
                                    <CheckBoxAndInput typee='checkBox' name='FOB Price'/>
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='checkBox' name='Inspection'/>
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='checkBox' name='Insurance'/>
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='checkBox' name='Shipping Cost'/>
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='checkBox' name='City Delivery Cost'/>
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='checkBox' name='Buyer Protection'/>
                                </div>
                                <div className='row'>
                                    <CheckBoxAndInput typee='hidden' name='Buyer Invoice Total Amount'/>
                                </div>
                                <div className='row row8'>
                                    <CheckBoxAndInput typee='hidden' name='Reserved to Seller' pname='(exclusice buyer protection)'/>                                    
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
                                    <button className="ui orange button btnSave">
                                        <i className="save icon"></i>Save
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
                       
        )
    }
}

export default App;
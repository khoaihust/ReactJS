import React from 'react'
import ReactDOM from 'react-dom'
import Popup from './Popup'
import './App.css'
import Header from './Header'
import AddInvoice from './AddInvoice';
import {connect} from 'react-redux'
import EditInvoice from '../containers/EditInvoice';

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        showPopup: false,
        count: 0
      };
    }

    togglePopup() { // an save thi dong Popup (chuyen trang thai showPopup)
      this.setState({
        showPopup: !this.state.showPopup
      });
    }

    countAddInvoiceClick () {
        this.setState({count: this.state.count + 1}) // press Add thi count + 1 va chuyen trang thai showPopup
        this.togglePopup()
    }

    countCloseButton (){
        this.setState({count: this.state.count - 1}) // press Close button thi count - 1 va phai chuyen trang thai showPopup
        this.togglePopup()
    }

    render() {
      return (
        <div className='invoice'>
            <h1>Invoice List</h1>
            <button className='ui purple button' onClick={this.countAddInvoiceClick.bind(this)}>
                Add Invoice
            </button>
            {this.state.showPopup ? 
                <Popup
                    invoiceId={this.state.count}
                    ID={this.state.count}
                    buttonName='Save'
                    closePopup={this.countCloseButton.bind(this)}
                    closePopupAndSave={this.togglePopup.bind(this)}
                />
                : null
            }
            <table className='ui striped table'>
                <Header />                    
                    {this.props.invoices.map( invoice => (
                        <tbody key={invoice.id}>
                            {invoice.editting ? 
                              <EditInvoice invoice={invoice} key={invoice.id}
                                close={this.togglePopup.bind(this)}
                                update={this.togglePopup.bind(this)}
                                closePopup={this.countCloseButton.bind(this)}
                              /> :
                              <AddInvoice key={invoice.id} invoice={invoice} />}
                        </tbody>
                    ))}                    
            </table>

        </div>
      );
    }
  };
  

  const mapStateToProps = (state) => {
    return {
        invoices: state
    }
}

export default connect(mapStateToProps)(App)
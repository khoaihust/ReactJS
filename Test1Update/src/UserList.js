import React, {Component} from 'react'
import {connect} from 'react-redux'
import Add from './Add'
import EditComponent from './EditComponent'
import PopUp from './PopUp'
import Header from './Header'

class UserList extends Component {
    constructor(props){
        super(props)
        this.state = {
            showPopup: false,
            ID: 0
        }
    }

    togglePopup() {
        this.setState( prevState => ({
            showPopup: !this.state.showPopup,
            ID: this.state.ID+1
        }))
    }

    render() {
        return (
            <div className='app '>
                <span>User List</span>
                <button onClick={this.togglePopup.bind(this)}>                    
                Add</button>
                {this.state.showPopup ?
                    <PopUp id={this.state.ID}
                    closePopup={this.togglePopup.bind(this)} />
                    : null
                }
                
                <table className='ui striped table'>
                    <Header />
                    
                        {this.props.adds.map( add => (
                            <tbody key={add.id}>
                                {add.editting ? <EditComponent add={add} key={add.id}/> :
                                    <Add key={add.id} add={add} />}
                            </tbody>
                        ))}
                    
                </table>
                    
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adds: state
    }
}

export default connect(mapStateToProps)(UserList)

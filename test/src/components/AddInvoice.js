import React from 'react'
import {connect} from 'react-redux'

const TwoButton = (props) => {
    return(
        <div className="ui buttons">
            <button className="ui red basic button" onClick={props.onClickEdit}>Edit</button>
            <button className="ui green basic button" onClick={props.onClickDelete}>Delete</button>
        </div>
    )
}

class AddInvoice extends React.Component {
    render() {
        return (
            
                
                    <tr>
                        <td>{this.props.invoice.id}</td>
                        <td>{this.props.invoice.name}</td>
                        <td>{this.props.invoice.address}</td>
                        <td>{this.props.invoice.phone}</td>
                        <td>{this.props.invoice.total}</td>
                        <td>
                            <TwoButton 
                                onClickEdit={() => this.props.dispatch({
                                    type: 'EDIT_INVOICE',
                                    id: this.props.invoice.id
                                })}
                                onClickDelete={() => this.props.dispatch({
                                    type: 'DELETE_INVOICE',
                                    id: this.props.invoice.id
                                })}
                            />
                        </td>
                    </tr>
                
            
        )
    }
}

export default connect()(AddInvoice)

// Error: 
// 1: Không tự động thêm id
// 2: Ấn save không tắt được popup
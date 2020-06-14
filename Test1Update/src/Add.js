import React from 'react'
import {connect} from 'react-redux'

const TwoButton = (props) => {
    return(
        <div>
            <button onClick={props.onClickEdit}>Edit</button>
            <button onClick={props.onClickDelete}>Delete</button>
        </div>
    )
}

class Add extends React.Component {
    render() {
        return (
            
                
                    <tr>
                        <td>{this.props.add.id}</td>
                        <td>{this.props.add.name}</td>
                        <td>{this.props.add.address}</td>
                        <td>{this.props.add.phone}</td>
                        <td>{this.props.add.total}</td>
                        <td>
                            <TwoButton 
                                onClickEdit={() => this.props.dispatch({
                                    type: 'EDIT_USER',
                                    id: this.props.add.id
                                })}
                                onClickDelete={() => this.props.dispatch({
                                    type: 'DELETE_USER',
                                    id: this.props.add.id
                                })}
                            />
                        </td>
                    </tr>
                
            
        )
    }
}

export default connect()(Add)

// Error: 
// 1: Không tự động thêm id
// 2: Ấn save không tắt được popup
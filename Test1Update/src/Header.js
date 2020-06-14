import React from 'react'

class Header extends React.Component {
    render() {
        return (            
            <thead>
                <tr>
                    <th>Invoice</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Total</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>               
        )
    }
}

export default Header
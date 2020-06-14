import React from 'react'
// import PopUp from './PopUp'
import './css/PopUp.css'
import './css/App.css'
import UserList from './UserList';

class App extends React.Component {
    render() {
        return (
            <div>
                <UserList />
                <div className=''>

                </div>
            </div>
        )
    }
}

export default App
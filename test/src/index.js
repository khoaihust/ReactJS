import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import Popup from './components/Popup'

import {createStore} from 'redux'
import invoiceReducer from './reducers/invoiceReducer'
import {Provider} from 'react-redux'

const store = createStore(invoiceReducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)

// ReactDOM.render (
//     <App />,
//     document.getElementById('root')
// )

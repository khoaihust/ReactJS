const invoiceReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_INVOICE': 
            return state.concat([action.data])
        case 'DELETE_INVOICE':
            return state.filter( invoice => invoice.id !== action.id)
        case 'EDIT_INVOICE':
            return state.map( invoice =>
                invoice.id === action.id ? {...invoice, editting: !invoice.editting} : invoice
            )
        case 'UPDATE':
            return state.map( invoice => {
                if (invoice.id === action.id) {
                    return {
                        ...invoice,
                        name: action.data.newName,
                        address: action.data.newAddress,
                        phone: action.data.newPhone,
                        total: action.data.newTotal,
                        editting: !invoice.editting                        
                    }
                }
                else return invoice;
            })
        default:
            return state;
    }
}

export default invoiceReducer
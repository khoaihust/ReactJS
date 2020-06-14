const formReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_USER': 
            return state.concat([action.data])
        case 'DELETE_USER':
            return state.filter( add => add.id !== action.id)
        case 'EDIT_USER':
            return state.map( add =>
                add.id === action.id ? {...add, editting: !add.editting} : add
            )
        case 'UPDATE':
            return state.map( add => {
                if (add.id === action.id) {
                    return {
                        ...add,
                        name: action.data.newName,
                        address: action.data.newAddress,
                        phone: action.data.newPhone,
                        total: action.data.newTotal,
                        editting: !add.editting                        
                    }
                }
                else return add;
            })
        default:
            return state;
    }
}

export default formReducer
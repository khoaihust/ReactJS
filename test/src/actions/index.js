let nextInvoice = 0
export const addInvoice = data => ({
    type: 'ADD_INVOICE',
    invoiceID: nextInvoice ++,
    data
})

export const editInvoice = id => ({
    type: 'EDIT_INVOICE', 
    id
}) 

export const deleteInvoice = id => ({
    type: 'DELETE_INVOICE',
    id
})
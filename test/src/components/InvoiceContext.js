import React from 'react'

const InvoiceContext = React.createContext(id = 0)

export const InvoiceProvider = InvoiceContext.Provider
export const InvoiceComsumer = InvoiceContext.Comsumer 

export default InvoiceContext
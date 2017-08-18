// @flow

export type Payment = {
  payment_id: string,
  invoice_id: string,
}

export type Invoice = {
  invoice_id: string,
  payments?: {
    [string]: Payment,
  },
}

export type InvoicingState = {
  invoices: {
    [string]: Invoice,
  },
}

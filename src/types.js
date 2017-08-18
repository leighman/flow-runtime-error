// @flow

export type IdMap<T> = {
  [id: string]: T,
}

export type Payment = {
  payment_id: string,
  invoice_id: string,
}

export type Invoice = {
  invoice_id: string,
  payments?: IdMap<Payment>,
}

export type InvoicingState = {
  invoices: IdMap<Invoice>,
}

// @flow

import type {Invoice, Payment} from './types'

export const INVOICES: Array<Invoice> = [
  {
    invoice_id: 'invoice-1',
  },
  {
    invoice_id: 'invoice-2',
  },
  {
    invoice_id: 'invoice-3',
  },
]

export const PAYMENT_1: Payment = {
  payment_id: 'payment-1',
  invoice_id: 'invoice-1',
}

export const PAYMENT_2: Payment = {
  payment_id: 'payment-2',
  invoice_id: 'invoice-2',
}

// @flow

import type {IdMap, Invoice, InvoicingState, Payment} from './types'

import Vue from 'vue'
import Vuex from 'vuex'

const toIdMap = <T>(idName: string, xs: Array<T>): IdMap<T> => {
  const obj = {}
  for (let i = 0; i < xs.length; i++) {
    const id = (xs: Array<any>)[i][idName]
    obj[id] = xs[i]
  }
  return obj
}

const state: InvoicingState = {
  invoices: {},
}

const setInvoices = (state: InvoicingState, is: Array<Invoice>) => {
  state.invoices = toIdMap('invoice_id', is)
}

const addPayment = (state: InvoicingState, p: Payment) => {
  const invoice = state.invoices[p.invoice_id]

  if (invoice.payments) {
    Vue.set(invoice.payments, p.payment_id, p)
  } else {
    invoice.payments = {
      [p.payment_id]: p,
    }
  }
}

const mutations = {
  'ADD_PAYMENT': addPayment,
  'SET_INVOICES': setInvoices,
}

const invoicing = {
  state,
  mutations,
}

export default () => {
  return new Vuex.Store({
    modules: {
      invoicing,
    },
  })
}

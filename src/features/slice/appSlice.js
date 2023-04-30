import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    token: Cookies.get('token'),
    productData: null,
  },
  reducers: {
    clearState: (state) => {
      return {
        ...state,
      }
    },

    login: (state, { payload }) => {
      console.log('payload', payload)
      Cookies.set('token', payload.token, { path: '/' })
      state.token = payload.token
    },
    logout: (state) => {
      Cookies.remove('token')
      state.token = null
    },
    saveProduct: (state, { payload }) => {
      state.productData = payload
    },
    editProdcut: (state, { payload }) => {
      state.productData = payload
    },
  },
})

export const { clearState, login, logout } = appSlice.actions
export const appSelector = (state) => state.app

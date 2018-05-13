import * as actionTypes from './actionTypes'
import axios from '../../axios-orders'

export const purchaceBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData
  }
}

export const purchaceBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error
  }
}

export const purchaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START
  }
}

export const purchaseBurger = (orderData) => {
  return dispatch => {
    dispatch(purchaseBurgerStart())
    axios.post('/orders.json', orderData)
      .then(response => {
        console.log(response.data);
        dispatch(purchaceBurgerSuccess(response.data.name))
      })
      .catch(error => {
        dispatch(purchaceBurgerFail(error))
      });
  }
}

export const purchaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT
  }
}

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START
  }
}

export const fetchOrdersSuccess = (payload) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: payload
  }
}

export const fetchOrdersFail = (payload) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: payload
  }
}

export const fetchOrders = () => {
  return dispatch => {
    dispatch(fetchOrdersStart())
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          });
        }
        dispatch(fetchOrdersSuccess(fetchedOrders))
      })
      .catch(err => {
        dispatch(fetchOrdersFail(err))
      });
  }
}
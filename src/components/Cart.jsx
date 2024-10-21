import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import CartItems from './CartItems'
import { displayModal } from '../store/itemcountSlice'


const Cart = ({data}) => {
  const totalItems = useSelector((state) => state.itemcountSliceReducer.totalItems)
  const totalAmount = useSelector((state) => state.itemcountSliceReducer.totalAmount)
  const dispatch = useDispatch()
  return (
    <div className='cart-container'>
      <h2>Your Cart ({totalItems})</h2>
      {totalItems ?
      data.map((item) => 
      (<CartItems name = {item.name} 
      id = {item.id}
      price = {item.price}
      key = {item.id}/>)):
      <div className='placeholder-container'>
        <img src = '../../assets/images/illustration-empty-cart.svg' alt = 'empty cart' />
        <div className='cart-placeholder-text'>Your added items will appear here</div>
      </div>
      }
      {totalItems>0 && 
      <div className='order-total-row'>
        <div>Order Total</div>
        <h3>${totalAmount}</h3>
      </div>
      }
      {totalItems>0 &&
      <div>
        <div className='carbon-neutral'>
          <img src = '../../assets/images/icon-carbon-neutral.svg'/>
          <div>This is a <span className='bold'>carbon-neutral</span> delivery</div>
        </div>
        <button className='confirm-order' onClick={(e) => dispatch(displayModal())}>Confirm Order</button>
      </div>
      }
    </div>
  )
}

export default Cart
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clearItem } from '../store/itemcountSlice'

const CartItems = ({name,price,id}) => {
    const count = useSelector((state) => state.itemcountSliceReducer.items[id])
    const dispatch = useDispatch()
  return (
    <>
    { count>0 && (<div>
    <div className='cart-item'>
        <div className='cart-item-left'>
            <h3>{name}</h3>
            <div className='price-row'> 
                <div className='modal-price-row-count'>{count}x</div>
                <div className='modal-price-row-price'>@ ${price.toFixed(2)}</div>
                <div className = 'cart-item-details-price'>${(price*count).toFixed(2)}</div>
            </div> 
        </div>
        <button onClick={(e) => dispatch(clearItem(id))}>X</button>
    </div>
    <br/>
    <hr/>
    </div>)}
    </>
  )
}

export default CartItems
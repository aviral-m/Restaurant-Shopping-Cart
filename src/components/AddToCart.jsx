import React from 'react'
import { useDispatch } from 'react-redux'
import {addItem} from '../store/itemcountSlice'


const AddToCart = ({id}) => { 
    const dispatch = useDispatch()
    function addToCart(){
        dispatch(addItem(id));
    }
  return (
    <button onClick={(e) => (addToCart())} className = 'add-to-cart-btn'>   
            <img src = '../../assets/images/icon-add-to-cart.svg' alt = 'add to cart' /><div>Add to Cart</div>
    </button>
  )
}

export default AddToCart
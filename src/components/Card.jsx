import React from 'react'
import AddToCart from './AddToCart'
import { useSelector } from 'react-redux'
import AddRemove from './AddRemove'

const Card = ({image,category,name,price,id}) => {
    const count = useSelector((state) => state.itemcountSliceReducer.items[id]) 
  return (
    <div>
        <img className ={count?'food-img orange':'food-img'} src = {image} alt = {name}/>
        {count ?
        <AddRemove id = {id} price = {price}/> :
        <AddToCart id = {id} price = {price}/>
        }
        <div className='card-info-row'>
            <div className='category'>{category}</div>
            <h5 className = 'name'>{name}</h5>
            <h5 className = 'price'>{price.toFixed(2)}</h5>
        </div>
    </div>
  )
}

export default Card
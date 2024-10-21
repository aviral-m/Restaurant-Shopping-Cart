import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addItem,rmvItem, } from '../store/itemcountSlice'


const AddRemove = ({id}) => {
    const count = useSelector((state) => state.itemcountSliceReducer.items[id])
    const dispatch = useDispatch()
    function handleAdd(){
        dispatch(addItem(id));
    }
    function handleRmv(){
        dispatch(rmvItem(id));
    }
  return (
    <div className='add-rmv-container'>
        <button  className = 'add-rmv-btn' onClick = {(e) => handleRmv()}>-</button>
        <div>{count}</div>
        <button  className = 'add-rmv-btn' onClick = {(e) => handleAdd()}>+</button>
    </div>
  )
}

export default AddRemove
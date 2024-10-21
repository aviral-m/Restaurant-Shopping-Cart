import React from 'react'
import { useSelector } from 'react-redux'

const ModalItems = ({image,name,price,id}) => {
    const count = useSelector((state) => state.itemcountSliceReducer.items[id])
  return (
    <div>
        {count>0 && (<>
            <div className = 'modal-item'>
                <div>
                    <img src = {image} className='modal-img'/>
                </div>
                <div className='modal-item-details'>
                    <div className='modal-item-left'>
                        <h3>{name}</h3>
                        <div className='modal-price-row'>
                            <div className='modal-price-row-count'>{count}x</div>
                            <div className='modal-price-row-price'>@ ${price.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className='modal-item-details-price'>${(price*count).toFixed(2)}</div>
                </div>
            </div>
            <hr/>
            </>
        )}
    </div>
  )
}

export default ModalItems
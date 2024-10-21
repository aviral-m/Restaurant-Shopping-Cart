import React, { useEffect } from 'react'
import ModalItems from './ModalItems'
import { useDispatch,useSelector } from 'react-redux'
import { clearAllItems } from '../store/itemcountSlice'
import { createPortal } from 'react-dom';

const Modal = ({data}) => {
    const totalAmount = useSelector((state) => state.itemcountSliceReducer.totalAmount)
    const showModal = useSelector((state) => state.itemcountSliceReducer.showModal)
    const dispatch = useDispatch()

    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
          document.body.style.overflowY = "scroll";
        };
      }, []);
    
  return ( 
    <div>
        {showModal && createPortal(
        <>
        <div className = 'modal-wrapper'></div>
            <div className = 'modal-container'>
                <img src = '../../assets/images/icon-order-confirmed.svg' className = 'check-img'></img>
                <h1>Order Confirmed</h1>
                <div className='food-enjoy'>We hope you enjoy your food!</div>
                <div className='modal-items-container'>
                    {data.map((item) =>(
                        <ModalItems image = {item.image.desktop}
                        id = {item.id}
                        price = {item.price}
                        key = {item.id}
                        name = {item.name}/>
                    ) )}
                </div>
                <div className='modal-total-row'>
                    <div>Order Total</div>
                    <h3>${totalAmount}</h3>
                </div>
                <button onClick = {(e) => dispatch(clearAllItems())}>Start New Order</button>
            </div>
        </>, document.body)}
    </div>
  )
}

export default Modal
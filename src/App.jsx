import './App.css'
import cardsData from '../data.json'
import Card from './components/Card'
import Cart from './components/Cart'
import Modal from './components/Modal'
import { useSelector } from 'react-redux'


export const data = cardsData.map((item,i) =>(
  {...item, id : i + 1}
))

function App() {
  const showModal = useSelector((state) => state.itemcountSliceReducer.showModal)
  return (
    <div className='main-wrapper'>
      <div className='main-container'>
        <div className='left-container'>
          <h1>Desserts</h1>
          <div className='cards-container' >
            {data.map((item) => 
              (<Card image = {item.image.desktop}
                  category = {item.category}
                  name = {item.name}
                  price = {item.price} 
                  key = {item.id} 
                  id = {item.id}           
              />))}
          </div>
        </div>
        <div className='right-container'>
          <Cart data = {data}/>
        </div>
      </div>
      {showModal && <Modal data = {data}/>}
    </div>
  )
}

export default App

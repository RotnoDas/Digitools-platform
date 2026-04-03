import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Contents from './components/contents/Contents'
import NavBar from './components/navbar/NavBar'
import Stats from './components/stats/Stats'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (product) => {
      setCartItems((prevItems) => {
          const isExisting = prevItems.find((item) => {
              return item.id === product.id;
          })
          if(isExisting) {
              return prevItems.map((item) => {
                  if(item.id === product.id) {
                      return {...item, quantity: item.quantity + 1};
                  }
                  else {
                      return item;
                  }
              })
          }
          else {
              return [...prevItems, {...product, quantity: 1}];
          }
      })
  }
  const handleRemoveFromCart = (id) => {
      setCartItems((prevItems) => {
          return prevItems.filter((item) => {
              return item.id !== id;
          })
      })
  }

  return (
    <>
      <header className='sticky top-0 z-50'>
        <div>
          <NavBar cartItems={cartItems}></NavBar>
        </div>
      </header>
      <main>
        <div>
          <Banner></Banner>
          <Stats></Stats>
          <Contents cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart}></Contents>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

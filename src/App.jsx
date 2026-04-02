import './App.css'
import Banner from './components/banner/Banner'
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <>
      <header>
        <div>
          <NavBar></NavBar>
        </div>
      </header>
      <main>
        <div>
          <Banner></Banner>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

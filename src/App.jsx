import './App.css'
import Banner from './components/banner/Banner'
import Contents from './components/contents/Contents'
import NavBar from './components/navbar/NavBar'
import Stats from './components/stats/Stats'

function App() {
  return (
    <>
      <header className='sticky top-0 z-50'>
        <div>
          <NavBar></NavBar>
        </div>
      </header>
      <main>
        <div>
          <Banner></Banner>
          <Stats></Stats>
          <Contents></Contents>
        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App

import { BrowserRouter } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import './App.css'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </div>
  )
}

export default App

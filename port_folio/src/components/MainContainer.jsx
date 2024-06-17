import Home from '../pages/Home'
import { Routes, Route } from 'react-router-dom'

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}
export default MainContainer

import HeroSection from './HeroSection'
import NavBar from '../components/NavBar'
import { Router, Route } from 'react-router-dom'
Router
const Home = () => {
  return (
    <div className="home">
      <div>
        <NavBar />
      </div>

      <HeroSection />
    </div>
  )
}
export default Home

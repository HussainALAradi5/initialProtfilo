import HeroSection from './HeroSection'
import NavBar from '../components/NavBar'
import Skills from './Skills'
import { Router, Route } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div>
        <NavBar />
      </div>

      <HeroSection />
      <Skills />
    </div>
  )
}
export default Home

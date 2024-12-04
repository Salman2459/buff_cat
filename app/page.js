import HeroSection from './components/HeroSection/HeroSection'
import Navbar from './components/HomeNavbar/Navbar'
import HomeTable from './components/HomeTable/HomeTable'
import Footer from './components/MainFooter/footer'
import Working from './components/Working/Working'

const Home = () => {

   return <div className='bg-[#000000] w-full min-h-screen  Dosis'>
      <Navbar />
      <HeroSection />
      <Working />
      <HomeTable />
      <Footer/>
   </div>
}

export default Home

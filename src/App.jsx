import About from "./components/About/About"
import AllInOne from "./components/AllInOne/AllInOne"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero Section/Hero"
import Navbar from "./components/Navbar/Navbar"
import Pricing from "./components/Pricing/Pricing"
import Support from "./components/Support/Support"

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Support></Support>
      <AllInOne></AllInOne>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  )
}

export default App

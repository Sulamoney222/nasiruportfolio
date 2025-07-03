import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skill from './components/Skill'
import Work from './components/work'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
   <Header/>

   <main>
   <Hero/>
   <About/>
   <Skill/>
   <Work/>
   {/* <Review/> */}
   <Contact/>
   <Footer/>
   </main>  
  

    </div>
  )
}

export default App

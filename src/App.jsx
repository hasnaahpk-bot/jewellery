import React from 'react'
import Hero from './components/Hero'
import Shopping from './components/Shopping'
import Newarrivals from './components/Newarrivals'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Shopping/>
      <Newarrivals/>
    </div>
  )
}

export default App

import React from 'react'

import { AboutUs, CTAApps, CTADessert, Footer, Hero, LatestPost, Navbar, RecipeSlider } from './components'

const App = () => (
  <div>
    <Navbar />
  
    <AboutUs />
    <CTAApps />
    <RecipeSlider />
    <CTADessert />
    <LatestPost />
    <Footer />
  </div>
)

export default App
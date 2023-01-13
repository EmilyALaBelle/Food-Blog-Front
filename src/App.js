import React from 'react'

import { AboutUs, CTAApps, CTADessert, Footer, Hero, LatestPost, Navbar, RecipeSlider } from './'

const App = () => (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <CTAApps />
      <RecipeSlider />
      <CTADessert />
      <LatestPost />
      <Footer />
    </div>
)

export default App
import React from 'react'

import { Footer, Blog, Header, Possibility, Features, WhatGPT3 } from "./container";
import { CTA, Brand, Navbar } from "./component";
import "./App.css"

const App = () => {
  return (
    <div classname="App">
      <div classname="gradient.bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
          
      </div>
  )
}

export default App
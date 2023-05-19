import React from 'react'
import Product from './Product'
import OlwCarousel from './OlwCarousel'
import Category from './Category'
import HoverBox from './HoverBox'
// import Footer from '../common/Footer'
// import Header from '../common/Header'

const Home = () => {
  return (
    <>
    {/* <Header/> */}
    <Category/>
    <OlwCarousel/>
     <Product/> 
     <HoverBox/>
     {/* <Footer/> */}
    </>
  )
}

export default Home

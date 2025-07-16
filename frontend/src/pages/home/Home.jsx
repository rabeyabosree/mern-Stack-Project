import React from 'react'
import Hero from '../../components/Hero'
import Features from '../../components/Features'
import NewArrivals from './../../components/NewArrivals';
import Banner from './../../components/Banner';
import PopulerProducts from './../../components/PopulerProducts';
import Blog from './../../components/Blog';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div>
    <Hero/>
    <Features/>
    <NewArrivals />
    <Banner />
    <PopulerProducts />
    <Blog />
    <Footer />
    </div>
  )
}

export default Home
import React from 'react';
import HomeCarousel from '../components/HomeCarousel';
import ZomatoNavbar from '../components/Navbar';
import CardComp from '../components/CardComp';
import MenuComp from '../components/MenuComp';
import Footer from '../components/Footer';

const Home=()=>{
  return(
    <>
    <ZomatoNavbar />
    <HomeCarousel/>
    <CardComp/>
    <MenuComp/>
    <Footer/>
    </>
  )
}

export default Home
import React from 'react'
import { Carousel } from 'react-bootstrap'
import './HomeCarousel.css';

const HomeCarousel =() =>{
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 "src='https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Pizza Clide'/>
        <Carousel.Caption>
          <h3>Delicious Pizza</h3>
          <p>Oredr your fav pizza Now</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=3099&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Burger'/>
        <Carousel.Caption>
          <h3>Delicious Food </h3>
          <p>Love the Taste of every Bite</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src='https://static.vecteezy.com/system/resources/thumbnails/030/903/265/small_2x/spaghetti-with-berries-and-tomato-sauce-on-a-plate-ai-generated-photo.jpg' alt='Burger'/>
        <Carousel.Caption>
          <h3>Welcome to our Resturant </h3>
          <p>Love the Taste of every Bite</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default HomeCarousel;
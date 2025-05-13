import React from "react";
import {Button, Card,Container, Form, FormControl } from "react-bootstrap";
import './MenuComp.css'

const menus = [
  {
    name: "Classic range Chicken",
    price: "$22",
    img: "https://www.shutterstock.com/image-photo/fried-chicken-wings-food-photography-600nw-2452067665.jpg",
    offers:'$17'
  },
  {
    name: "Free range chicken wings",
    price: "$25",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/11/Air-fryer-soy-and-cranberry-chicken-wings-ec2cecb.jpg?quality=90&webp=true&resize=600,545 ",
    offers:'$15'
  },
  {
    name: "Drumstick",
    price: "$15",
    img: " https://www.thenakedbutcher.com.au/cdn/shop/files/1384980708055_1.jpg?v=1686812438",
    offers:'$12'
  },
  {
    name: "Chicken Express",
    price: "$29",
    img: "https://www.chickenexpress.com.au/wp-content/uploads/2018/06/CE-ChickenPiecesChipsGravy-Lettuce.png",
    offers:'$20'
  },
  {
    name: "Grill Chicken with Chips",
    price: "$18",
    img: "https://t3.ftcdn.net/jpg/00/89/99/32/360_F_89993299_3RNA1hnxDEppPufRa2DmKrb0VyYYIuQC.jpg",
    offers:'$15'
  },
  {
    name: "Chicken nuggets with chips",
    price: "$15",
    img: "https://restaurants.getdigital.net.au/wp-content/uploads/2020/04/chicken-nuggets-chips.jpg",
    offers:'$12'
  },
  {
    name: "Chicken and mushroom Burger",
    price: "$25",
    img: "https://pbs.twimg.com/media/FcD9dFiXwAQF27g.jpg",
    offers:'$18'
  },
  {
    name: "Family Packs",
    price: "$35",
    img: "https://cdn.concreteplayground.com/content/uploads/2022/02/Guljak-Topokki-Chicken-spread-supplied.jpg",
    offers:'$28'
  },
  {
    name: "Meal on a Box",
    price: "$45",
    img: "https://eljannah.com.au/wp-content/uploads/2024/07/boxes-_0000_Fried-box-.webp",
    offers:'$32'
  },
  {
    name: "Honey mustard chicken wrap",
    price: "$12",
    img: "https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Wrap.jpg",
    offers:'$9'
  },
  {
    name: "chicken and tzatziki wrap",
    price: "$15",
    img: "https://images.immediate.co.uk/production/volatile/sites/30/2023/10/Chicken-and-tzatziki-wraps-fb41f04.jpg?quality=90&resize=556,505",
    offers:'$12'
  },
  {
    name: "Drinks",
    price: "$5",
    img: "https://www.anytimevending.com.au/cdn/shop/products/24packmixeddrinkbox.jpg?v=1614431286",
    offers:'$4.5'
  },
];

const MenuComp = () => {
  
  return (
    
    <Container className="menu-container my-5">
     
      <h2 className="menu-title text-center mb-4">Our Menu</h2>
      <Form className="d-flex search-bar mx-auto mb-4">
            <FormControl
              type="search"
              placeholder="Search for restaurant or cuisine"
              className="me-2"
            />
            <Button variant="light">Search</Button>
          </Form>
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {menus.map((menu, i) => (
          <Card key={i} className="menu-card">
            <Card.Img variant="top" src={menu.img} style={{ height: "200px", objectFit: "cover" }} />
            <Card.Body>
              <Card.Title>{menu.name}</Card.Title>
              <Card.Text>
                <del className="text-muted me-2">{menu.price}</del>
                <span className="text-success fw-bold">{menu.offers}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default MenuComp;

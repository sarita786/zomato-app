import React from "react";
import { Card, Container } from "react-bootstrap";
import './CardComp.css';

const CardComp = () => {
  const cards = [
    {
      title: "Feed your employees",
      text: "Create a business account",
      img: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD"
    },
    {
      title: "Corporate Catering ",
      text: "Add your resturant",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=2940"
    },
    {
      title: "Deliver to your team",
      text: "Sign up to deliver",
      img: "https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaXZlcnl8ZW58MHx8MHx8fDA%3D"

    }
  ];

  return (
    <Container className="d-flex flex-wrap justify-content-center gap-4 m-4">
      {cards.map((card, i) => (
        <Card key={i} className="no-border-card" style={{ width: '25rem' }}>
          <Card.Img
            variant="top"
            src={card.img}
          />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Link href="#">{card.text}</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default CardComp;

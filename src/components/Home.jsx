import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <h1>Benvenuti nella Palestra Arnold Fitness</h1>
          <p>
            La Palestra Arnold Fitness si impegna a fornire un ambiente accogliente e motivante per aiutarti a
            raggiungere i tuoi obiettivi di fitness.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <h2>Cosa offriamo</h2>
          <ul className="list-unstyled">
            <li>Varie classi di fitness, tra cui yoga, zumba e spinning.</li>
            <li>Attrezzature moderne e all'avanguardia.</li>
            <li>Allenatori qualificati pronti ad aiutarti.</li>
            <li>Un ambiente accogliente e amichevole.</li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <Image
            src="https://img.freepik.com/vettori-gratuito/bodybuilder-e-logo-del-fitness-club_1284-45671.jpg?t=st=1714397372~exp=1714400972~hmac=cfe5536b88c64a0a4eeed081b8cffd769f0f692e90373836419b9ae82bf12522&w=740"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

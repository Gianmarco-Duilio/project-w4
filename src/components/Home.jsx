import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6} className="text-center">
          <h1 className="text-white">Benvenuti nella Palestra Arnold Fitness</h1>

          <p>
            La Palestra Arnold Fitness si impegna a fornire un ambiente accogliente e motivante per aiutarti a
            raggiungere i tuoi obiettivi di fitness.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <Image id="body" src="\work.svg" fluid />
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
          <h2>MindSet</h2>
          <p>
            Le palestre sono luoghi dedicati all'attività fisica e al fitness, dove le persone possono allenarsi,
            migliorare la propria forma fisica e raggiungere i propri obiettivi di salute. Solitamente, una palestra
            offre una vasta gamma di attrezzature e macchinari per l'allenamento cardiovascolare e muscolare, come tapis
            roulant, cyclette, macchine per pesi liberi e attrezzature per il sollevamento pesi. Oltre alle
            attrezzature, molte palestre offrono anche classi e corsi, come aerobica, spinning, yoga, pilates e arti
            marziali, che permettono ai membri di variare la propria routine di allenamento e sperimentare diverse forme
            di esercizio fisico. Alcune palestre offrono anche servizi aggiuntivi come corsi di nutrizione, personal
            training e programmi di perdita di peso. Le palestre possono essere sia grandi centri fitness con molte sedi
            sparse in diverse città, sia piccole strutture locali con un ambiente più intimo e familiare. L'atmosfera
            all'interno di una palestra può variare notevolmente in base alla sua dimensione, al suo target di clientela
            e al suo focus, che può essere sul bodybuilding, sul fitness generale, sullo sport specifico o su altre
            discipline. Molte persone frequentano le palestre non solo per l'allenamento fisico, ma anche per
            socializzare, incontrare nuove persone con interessi simili e trovare motivazione e supporto dai loro
            coetanei. Inoltre, le palestre possono essere luoghi in cui è possibile ricevere consulenza e supporto da
            parte di istruttori qualificati per migliorare le proprie prestazioni e raggiungere gli obiettivi di salute
            e fitness.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

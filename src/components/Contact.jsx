import { Button, Col, Container, Row } from "react-bootstrap";

import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <Container className="mt-5 py-5">
      <Row>
        <Col className="mx-5">
          <Form>
            <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Nome</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="my-4" controlId="exampleForm.ControlInput1">
              <Form.Label>Cognome</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="my-4" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Textarea</Form.Label>
              <Form.Control type="textarea" rows={3} />
            </Form.Group>
            <Button>Submit</Button>
          </Form>
        </Col>

        <Col className="mx-5">
          <section className="my-4">
            <h2 className="my-4">Contatti</h2>
            <p className="my-4">Per ulteriori informazioni, non esitare a contattarci.</p>
            <address className="my-4">
              <p className="my-4">Indirizzo: Via della Palestra, 1 </p>
              <p className="my-4"> Telefono: 0123446789 </p>
              <p className="my-4"> Email: info@palestrarnold.com</p>
            </address>
            <img src="https://cdn.studenti.stbm.it/images/2023/03/28/tesina-sui-muscoli_600x400.jpeg" alt="" />
          </section>
        </Col>
      </Row>
    </Container>
  );
}
export default Contact;

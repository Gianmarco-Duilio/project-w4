import { Button, Container } from "react-bootstrap";

import Form from "react-bootstrap/Form";

function Contact() {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Cognome</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button>Submit</Button>
      </Form>
      <br />

      <section id="contact">
        <h2>Contatti</h2>
        <p>Per ulteriori informazioni, non esitare a contattarci.</p>
        <address>
          Indirizzo: Via della Palestra, 1 <br />
          Telefono: 0123456789 <br />
          Email: info@palestrarnold.com
        </address>
      </section>
    </Container>
  );
}
export default Contact;

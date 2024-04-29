import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Blog = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost/progetti_WP/project-wp/wordpress/wp-json/wp/v2/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {posts &&
            posts.map((post) => (
              <Col xs={4} key={post.id}>
                <Card>
                  <Card.Body>
                    <Card.Title dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Card.Title>
                    <Card.Text dangerouslySetInnerHTML={{ __html: post.content.rendered }}></Card.Text>
                    <Button variant="primary">view</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}{" "}
        </Row>
      </Container>
    </div>
  );
};
export default Blog;

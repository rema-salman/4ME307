import { Link } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

function Homepage() {
  return (
    <Row>
      <Col>
        <Card>
          <Card.Img
            top
            width="100%"
            src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
            alt="Card image cap"
          />
          <Card.Body className="align-items-center d-flex justify-content-around">
            <Card.Title tag="h5">Field One</Card.Title>
            {/* <Card.Text>Latest readings {getLastReading()}</Card.Text> */}
            <Button variant="success" as={Link} to="field-one">
              View more...
            </Button>
          </Card.Body>
        </Card>
      </Col>

      <Col>
        <Card>
          <Card.Img
            top
            width="100%"
            src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGJhY2t5YXJkJTIwZ2FyZGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
            alt="Card image cap"
          />
          <Card.Body className="align-items-center d-flex justify-content-around">
            <Card.Title tag="h5">Field Two</Card.Title>
            {/* <Card.Text>Latest readings {() => getLastReading}</Card.Text> */}
            <Button variant="success" as={Link} to="field-two">
              View more...
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Homepage;

import { Card } from "react-bootstrap";

function IrrigationCard({ irrigationStatus }) {
  return (
    <Card>
      <Card.Img
        top
        width="100%"
        src="https://images.unsplash.com/photo-1596487162379-fbab6c590a42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fHdhdGVyJTIwbW90b3IlMjBiYWNreWFyZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        alt="Card image cap"
      />
      <Card.Body className="align-items-center d-flex justify-content-around">
        <Card.Title tag="h5">Water Pump Status </Card.Title>
        <Card.Title tag="h5">{irrigationStatus}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default IrrigationCard;

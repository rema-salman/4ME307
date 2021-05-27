import { useState } from "react";
import { Card, Button } from "react-bootstrap";

import ChartModal from "./ChartModal";

function MoistureCard({ moistureLevels, fieldReadingDate }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Card>
      <Card.Img
        top
        width="100%"
        src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW50fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
        alt="Card image cap"
      />
      <Card.Body>
        <div className="align-items-center d-flex justify-content-around">
          <Card.Title tag="h5">Moisture Level</Card.Title>
          <Card.Title tag="h5">
            {moistureLevels[moistureLevels.length - 1]}%
          </Card.Title>
        </div>
        <Button variant="success" onClick={() => setModalShow(true)}>
          View levels chart
        </Button>
      </Card.Body>
      <ChartModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        moistureLevels={moistureLevels}
        fieldReadingDate={fieldReadingDate}
      />
    </Card>
  );
}

export default MoistureCard;

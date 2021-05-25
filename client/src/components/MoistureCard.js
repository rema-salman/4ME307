import React from "react";
import { Card, Button } from "react-bootstrap";

function MoistureCard({ moistureLevels, fieldReadingDate }) {
 
  const viewModal =()=>{

    
  }
 
 
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
        <Button variant="success" onClick={()=>viewModal()}>View more...</Button>
      </Card.Body>
    </Card>
  );
}

export default MoistureCard;

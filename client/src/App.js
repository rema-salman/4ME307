import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Col, Row } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import FieldOne from "./pages/FieldOne";
import FieldTwo from "./pages/FieldTwo";
function App() {
  return (
    <Router>
      <Container>
        <Row className="my-5">
          <Col>
            <h1 className="text-center">Smart backyard: IOT project</h1>
          </Col>
        </Row>

        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/field-one" component={FieldOne} />
          <Route path="/field-two" component={FieldTwo} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;

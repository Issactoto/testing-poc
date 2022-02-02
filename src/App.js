import logo from "./logo.svg";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col, Modal, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isModal, setModal] = useState(false);
  const [isCorrectModal, setCorrectModal] = useState(false);
  const [testingTool, setTestingTool] = useState(
    "Which testing tool do you like most"
  );

  function submit(){
    if(firstName!=="" && lastName!=="" && testingTool!=="Which testing tool do you like most") setCorrectModal(true);
    else setCorrectModal(false)
    setModal(true);
  }
  return (
    <div className="App">
      <h1>Testing POC</h1>
      <br />
      <br />
      <p>This site uses Circle CI, Jest and Cypress</p>
      <br />
      <input
        type="text"
        autoFocus
        value={firstName}
        name="firstName"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        className="form-control"
      />
      <br />
      <input
        type="text"
        autoFocus
        value={lastName}
        name="lastName"
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        className="form-control"
      />
      <br />
      <Dropdown id="testingDropDown" name="testingDropDown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {testingTool}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              setTestingTool("A");
            }}
          >
            A
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setTestingTool("B");
            }}
          >
            B
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              setTestingTool("C");
            }}
          >
            C
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <br />
      {/* dropdown in reaact bootstrap */}
      <Row className="mx-0">
        <Button as={Col} variant="primary" onClick={()=>submit()} className="submitButton">
          Submit
          {/* Modal in reaact bootstrap */}
        </Button>
      </Row>
      <Modal size="lg" show={isModal} aria-labelledby="contained-modal-title-vcenter" centered >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">{isCorrectModal?"Submitted":"Error"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {
              isCorrectModal?
              "You have submitted your form. Thank you!"
              :
              "You have not selected all the required details. Please check~"
            }
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>setModal(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;

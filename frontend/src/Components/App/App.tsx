import './App.css';
import {Container, Jumbotron} from "react-bootstrap";
import IncidentIndex from "../Incidents/IncidentIndex";

function App() {
  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Redbelt - Tech Test</h1>
      </Jumbotron>
      <IncidentIndex />
    </Container>
  );
}

export default App;

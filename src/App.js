import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Note from './components/Note';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {NoteProvider} from "./context/NoteContext";

function App() {
  
  return (
    <NoteProvider>
      <Container className='container'>
        <Row>
          <h3 className='title'>Notebook</h3>
         <div style={{display:"flex",gap:"2.5rem"}}>
         <Col xs={6} md={4} className='notes'>
            <Sidebar/>
          </Col>
          <Col xs={12} md={8}>
            <Note/>
          </Col>
         </div>
        </Row>
     </Container>
     </NoteProvider>
  );
}

export default App;

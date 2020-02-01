
// import React from 'react';
// import Container from '@material-ui/core/Container';

// // import {Container} from 'react-bootstrap/Container/Container';
// // import { Container, Row, Col } from 'reactstrap';
// function AboutMe() {

//         return (
//             <Container maxWidth="sm">
//             <h1 className="title">
//             </Container>
                
              
//         );
    
// }

// export default AboutMe;
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function AboutMe() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
    </React.Fragment>
  );
}
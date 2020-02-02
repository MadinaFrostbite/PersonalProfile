import React from "react" 
import Instagram from "../instagram.png"
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
function Footer(){
 return (
      <footer className="footerAre">
      <div className="footerInner">
      <Container className= "footer" maxWidth="md" justify="center" alignItems="center">
      <div><h1 className="footerLogo">Madinabonu</h1></div>
      
      <div className="socialIconAria">
      <ul className="socialIcon">
      <li><img src={Instagram} alt="png" width = {"20px"}/></li>
      <li><img src={Instagram} alt="png" width = {"20px"}/></li>
      <li><img src={Instagram} alt="png" width = {"20px"}/></li>
      <li><img src={Instagram} alt="png" width = {"20px"}/></li>
      <li><img src={Instagram} alt="png" width = {"20px"}/></li>
      <li><img src={Instagram} alt="png" width = {"20px"}/></li>
      </ul>
      </div>
     
      </Container>
      </div>
      </footer>
  );
}

export default Footer;
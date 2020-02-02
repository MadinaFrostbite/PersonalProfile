import React from "react" 
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
function Contact(){
 return (
      <Container className= "about" maxWidth="md" justify="center" alignItems="center">
       <div class="main_title">
         <h2>Contact Me</h2>
      </div>
        <Grid container maxWidth="md" justify="center" alignItems="center" >
        <Grid item md={6}>
        <div class="skill_text">
            <h4>Web development Skills</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text.</p>
        </div>
        </Grid>
       <Grid item md={6} maxWidth="md" justify="center" alignItems="center">
        <div class="skill_text">
            <h4>Web development Skills</h4>
        </div >
        <div className="formAre">
        <form action="">
        
        
        </form>
        </div>
        </Grid>
       </Grid> 
    </Container>
  );
}

export default Contact;

import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProgressBar from 'react-animated-progress-bar';


function Skill() {
  return (
    <Container maxWidth="md" direction="row-reverse" justify="center" alignItems="center">
      <div class="main_title">
         <h2>My Skill</h2>
      </div>
           <Grid container direction="row-reverse" justify="center" alignItems="center" spacing={2} >
            <Grid item xs={6}>
            <div class="skill_text">
            <h4>Web development Skills</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text.</p>
            <div className="skillItem">
            <div className="singleSkill">
            <ProgressBar
             width="400px"
             height="10px"
            rect
            fontColor="gray"
            percentage="70"
            rectPadding="1px"
            rectBorderRadius="20px"
            trackPathColor="transparent"
            bgColor="#333333"
            trackBorderColor="grey"/>
            </div>
            </div>
            </div>
           </Grid>
           <Grid item xs={6} >
           <div class="skill_text">
           <h4>Web development Skills</h4>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text.</p>
           </div>
           </Grid>
           </Grid> 
    </Container>
  );
}

export default Skill

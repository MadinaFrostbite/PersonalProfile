import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProgressBar from 'react-animated-progress-bar';


function Skill() {
  return (
    <Container className="skill" maxWidth="md"  justify="center" alignItems="center">
      <div class="main_title">
         <h2>My Skill</h2>
      </div>
           <Grid container direction="row-reverse" justify="center" alignItems="center" spacing={2} >
            <Grid item xs={6} md={5}>
            <div class="skill_text">
            <h4>Web development Skills</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text.</p>
            <div className="skillItem">
            <div className="singleSkill">
            <h4>WordPress</h4>
            <ProgressBar
             width="400px"
             height="20px"
            rect
            fontColor="gray"
            percentage="70"
            rectPadding="1px"
            rectBorderRadius="5px"
            trackPathColor="transparent"
            backgroundcolor = "#fec608"
            trackBorderColor="grey"/>
            </div>
            <div className="singleSkill">
            <h4>WordPress</h4>
            <ProgressBar
             width="400px"
             height="20px"
            rect
            fontColor="gray"
            percentage="70"
            rectPadding="2px"
            rectBorderRadius="5px"
            trackPathColor="transparent"
            backgroundColor = "#fec608"
            trackBorderColor="grey"/>
            </div>
            <div className="singleSkill">
            <h4>WordPress</h4>
            <ProgressBar
             width="400px"
             height="20px"
            rect
            fontColor="gray"
            percentage="70"
            rectPadding="2px"
            rectBorderRadius="5px"
            trackPathColor="transparent"
            backgroundColor = "#fec608"
            trackBorderColor="grey"/>
            </div>
            </div>
            </div>
           </Grid>
           <Grid item xs={6} md={5} >
           <div class="skill_text">
           <h4>Web development Skills</h4>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Loren Ipsum has been the industry's standard dummy text.</p>
           </div>
           <div className="skillItem">
            <div className="singleSkill">
            <h4>WordPress</h4>
            <ProgressBar
             width="400px"
             height="20px"
            rect
            fontColor="gray"
            percentage="70"
            rectPadding="2px"
            rectBorderRadius="5px"
            trackPathColor="transparent"
            backgroundColor = "#fec608"
            trackBorderColor="grey"/>
            </div>
            <div className="singleSkill">
            <h4>WordPress</h4>
            <ProgressBar
             width="400px"
             height="20px"
            rect
            fontColor="gray"
            percentage="70"
            rectPadding="2px"
            rectBorderRadius="5px"
            trackPathColor="transparent"
            backgroundColor = "#fec608"
            trackBorderColor="grey"/>
            </div>
            <div className="singleSkill">
            <h4>WordPress</h4>
            <ProgressBar
             width="400px"
             height="20px"
            rect
            fontColor="gray"
            percentage="70"
            rectPadding="2px"
            rectBorderRadius="5px"
            trackPathColor="transparent"
            backgroundColor = "#fec608"
            trackBorderColor="grey"/>
            </div>
            </div>
          </Grid>
           </Grid> 
    </Container>
  );
}

export default Skill

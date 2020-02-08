import React from "react";
import "./myEdu.css"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    
  },
  pos: {
    marginBottom: 12,
  },
});
const EducationCard = (props) =>{
    const classes = useStyles();
  
   return (
     <div>
       <Card className={classes.card} className="cardSkill">
         <CardContent >
           <Typography className={classes.title} gutterBottom>
             <span className="dateOfEducation">{props.date}</span>
           </Typography>
           <h4> {props.title} </h4>
           <Typography variant="body2" component="p">
             <p>{props.def}</p>
           </Typography>
         </CardContent>
       </Card>
     </div>
   );
}

function Education() {
  return (
    <Container
      className="education"
      maxWidth="md"
      justify="center"
      alignItems="center"
    >
      <div class="main_title">
        <h2>Education</h2>
      </div>
      <Grid
        container
        maxWidth="md"
        justify="center"
        alignItems="center"
        justify="space-between"
        spacing={3}
      >
        <Grid item md={6}>
          <EducationCard
            title="Inha University"
            date="02.01.2020"
            def="Lorem ipsum dolor sit amets, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <EducationCard
            title="Inha University"
            date="02.01.2020"
            def="Lorem ipsum dolor sit amets, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <EducationCard
            title="Inha University"
            date="02.01.2020"
            def="Lorem ipsum dolor sit amets, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
        </Grid>
        <Grid item md={6} justify="space-between">
          <EducationCard
            title="Inha University"
            date="02.01.2020"
            def=" Lorem ipsum dolor sit amets, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <EducationCard
            title="Inha University"
            date="02.01.2020"
            def="Lorem ipsum dolor sit amets, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
          <EducationCard
            title="Inha University"
            date="02.01.2020"
            def=" Lorem ipsum dolor sit amets, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Education;

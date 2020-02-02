import React from "react";
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
    fontSize: 13,
  },
  pos: {
    marginBottom: 12,
  },
});

function Education() {
    const classes = useStyles();
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
      <Grid container maxWidth="md" justify="center" alignItems="center" justify="space-between">
        <Grid item md={6}>
        <Card className={classes.card} className="cardSkill">
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <spann> Word of the Day </spann>
        </Typography>
        <h3> Title </h3>
        <Typography variant="body2" component="p">
        <p>hello hello hello hello hellov hello hello hello hellov hello hello hello hello hello hello hellov hellov hellov hello hello </p>
        </Typography>
      </CardContent>
      </Card> 
      <Card className={classes.card} className="cardSkill">
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <spann> Word of the Day </spann>
        </Typography>
        <h3> Title </h3>
        <Typography variant="body2" component="p">
        <p>hello hello hello hello hellov hello hello hello hellov hello hello hello hello hello hello hellov hellov hellov hello hello hello h</p>
        </Typography>
      </CardContent>
      </Card>
      <Card className={classes.card} className="cardSkill">
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <spann> Word of the Day </spann>
        </Typography>
        <h3> Title </h3>
        <Typography variant="body2" component="p">
        <p>hello hello hello hello hellov hello hello hello hellov hello hello hello hello hello hello hellov hellov hellov hello </p>
        </Typography>
      </CardContent>
      </Card>
        </Grid>
        <Grid item md={6} justify="space-between" >
        <Card className={classes.card} className="cardSkill">
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <spann> Word of the Day </spann>
        </Typography>
        <h3> Title </h3>
        <Typography variant="body2" component="p">
        <p>hello hello hello hello hellov hello hello hello hellov hello hello hello hello hello hello hellov hellov hellov  hello hello</p>
        </Typography>
      </CardContent>
      </Card>
      <Card className={classes.card} className="cardSkill">
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <spann> Word of the Day </spann>
        </Typography>
        <h3> Title </h3>
        <Typography variant="body2" component="p">
        <p>hello hello hello hello hellov hello hello hello hellov hello hello hello hello hello hello hellov hellov  hellovv hello hello hello</p>
        </Typography>
      </CardContent>
      </Card>
      <Card className={classes.card} className="cardSkill">
        <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <spann> Word of the Day </spann>
        </Typography>
        <h3> Title </h3>
        <Typography variant="body2" component="p">
        <p>hello hello hello hello hellov hello hello hello hellov hello hello hello hello hello hello hellov hellov  hellovv hello hello hello</p>
        </Typography>
      </CardContent>
      </Card>
        </Grid>
        </Grid>
    </Container>
  );
}

export default Education;


import React from 'react';
import personalImg from '../../personal.jpg'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'start',
    color: theme.palette.text.secondary,
  },
}));
export default function AboutMe() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className= "about" maxWidth="md" direction="row-reverse" justify="center" alignItems="center">
        <Grid container >
        <Grid item md={5}>
        <img src= {personalImg} className = 'personalImg'/>
        <a href="#" className='download'><span>Download resume</span></a>
        </Grid>
       <Grid item md={7}>
        <h3>Hi I'm <span>MadinaBonu</span></h3>
        <h4>Web Designer and Web Developer</h4>
        <p>My name is Madina Mukhammadyusupova. I am 23 years old. Lorem ipsum dolor sit amet, consectetur ascing elits, sed do eiusmod tempor incidunt ut labore et dolore mafgna aliqua. Ut enim ad mini vniam quis nerci, tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autes irure dolor in reprehenderit in etrs voluptate velit esse cillum dolore eu fugiat nulla pariatur. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
      </Grid>
    </Grid> 
    </Container>
    </React.Fragment>
  );
}



/*<Grid item lg={7} sm={6} className= "personDetails">
           <div className="row"> 
            <h3 className ="personName">Hi I'm <span>MadinaBonu</span></h3>
               <h4>Web Designer and Web Developer</h4>
               <p>My name is Madina Mukhammadyusupova. I am 23 years old. Lorem ipsum dolor sit amet, consectetur ascing elits, sed do eiusmod tempor incidunt ut labore et dolore mafgna aliqua. Ut enim ad mini vniam quis nerci, tation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis autes irure dolor in reprehenderit in etrs voluptate velit esse cillum dolore eu fugiat nulla pariatur. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
               <div className="person_information sm-col-3">
               <ul>
               <li><a href="#">Age</a></li>
               <li><a href="#">Nationality</a></li>
               <li><a href="#">Address</a></li>
               <li><a href="#">Phone</a></li>
               <li><a href="#">Skype</a></li>
               <li><a href="#">Email</a></li>
               <li><a href="#">Website</a></li>
               </ul>
               <li><a href="#">23</a></li>
               <li><a href="#">uzbek</a></li>
               <li><a href="#">Rakat</a></li>
               <li><a href="#">Phone</a></li>
               <li><a href="#">Skype</a></li>
               <li><a href="#">blanbla@mail.com</a></li>
               <li><a href="#">madin.uz</a></li>
               <ul>
               </ul>
                <ul className= "social_icon">
                    <li><a href="#"><img src={instagram} alt=""/></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
                    <li><a href="#"><img src={instagram} alt="" /></a></li>
               </ul>
            </div>
            </div> 
        </Grid> */

// function AboutMe() {
//   return (
//     <div>
//       <h1 className="title">lorem</h1>
//       <div className="dics">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestiae
//         veniam temporibus officia accusantium, inventore obcaecati provident
//         sunt non alias, perferendis nemo eos dolor incidunt iste aut blanditiis
//         asperiores qui.
//       </div>
//     </div>
//   );
// }

// export default AboutMe;

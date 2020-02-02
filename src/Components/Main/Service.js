import React from "react";
import wordpress from '../../wordpress.png'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Service() {
  return (
  <Container className= "service" maxWidth="md" justify="center" alignItems="center">
    <div class="main_title"><h2>Services</h2></div>      
    <Grid container className= "service" maxWidth="sm"  alignItems="center" justify ="space-between" >
       <Grid item md={6} >
       <div className="service_elements">
       <div className="singleService"><img className = "iconService" src= {wordpress} alt="png"/>
       <a href="#"><h4>Wordpress Development</h4></a>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </div>
       <div className="singleService"><img className = "iconService" src= {wordpress} alt="png"/>
       <a href="#"><h4>Wordpress Development</h4></a>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </div>
       <div className="singleService"><img className = "iconService" src= {wordpress} alt="png"/>
       <a href="#"><h4>Wordpress Development</h4></a>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </div>
       </div>
       </Grid>
       <Grid item md={6}>
        <div className="service_elements">
       <div className="singleService"><img className = "iconService" src= {wordpress} alt="png"/>
       <a href="#"><h4>Wordpress Development</h4></a>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </div>
       <div className="singleService"><img className = "iconService" src= {wordpress} alt="png"/>
       <a href="#"><h4>Wordpress Development</h4></a>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </div>
       <div className="singleService"><img className = "iconService" src= {wordpress} alt="png"/>
       <a href="#"><h4>Wordpress Development</h4></a>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod, tempor ets incididunt ut labore et dolore magna aliqua. Ut enim adtiesm minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </div>
       </div>
       </Grid>
    </Grid> 
    </Container>
  );
}

export default Service;

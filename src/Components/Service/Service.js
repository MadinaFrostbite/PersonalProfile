import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import "./myService.css"
const ServiceCard = props => {
  return (
    <div className="service_elements">
      <div className="singleService">
       <a href="#">
          <h4>{props.subtitle}</h4>
        </a>
        <p>{props.def}</p>
      </div>
    </div>
  );
};

function Service() {
  return (
    <Container
      className="service"
      maxWidth="md"
      justify="center"
      alignItems="center"
    >
      <div class="main_title">
        <h2>Services</h2>
      </div>
      <Grid
        container
        className="service"
        mixWidth="sm"
        alignItems="center"
        justify="space-between"
        spacing={3}
      >
        <Grid item sm={6}>
          <div className="service-item">
          <i className="fa fa-wordpress" aria-hidden="true"></i>
          </div>
          <ServiceCard
            subtitle="Wordpress Development"
            def="Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod,
          tempor ets incididunt ut labore et dolore magna aliqua. Ut enim
          adtiesm minim veniam, quis nostrud exercitation ullamco laboris."
          />
          <div className="service-item">
            <i className="fa fa-mobile" aria-hidden="true"></i>
          </div>
          <ServiceCard
            subtitle="Mobile Apps Development"
            def="Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod,
          tempor ets incididunt ut labore et dolore magna aliqua. Ut enim
          adtiesm minim veniam, quis nostrud exercitation ullamco laboris."
          />
          <div className="service-item" >
            <i className="fa fa-camera" aria-hidden="true"></i>
          </div>
          <ServiceCard
            subtitle="Professional Photography"
            def="Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod,
          tempor ets incididunt ut labore et dolore magna aliqua. Ut enim
          adtiesm minim veniam, quis nostrud exercitation ullamco laboris."
          />
        </Grid>
        <Grid item sm={6}>
          <div className="service-item">
            <i className="fa fa-paint-brush" aria-hidden="true"></i>
          </div>
          <ServiceCard
            subtitle="Creative Design"
            def="Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod,
          tempor ets incididunt ut labore et dolore magna aliqua. Ut enim
          adtiesm minim veniam, quis nostrud exercitation ullamco laboris."
          />
          <div className="service-item">
            <i className="fa fa-maxcdn" aria-hidden="true"></i>
          </div>
          <ServiceCard
            subtitle="Social Media Marketing"
            def="Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod,
          tempor ets incididunt ut labore et dolore magna aliqua. Ut enim
          adtiesm minim veniam, quis nostrud exercitation ullamco laboris."
          />
          <div className="service-item">
            <i className="fa fa-laptop" aria-hidden="true"></i>
          </div>
          <ServiceCard
            subtitle="Website Development"
            def="Lorem ipsum dolor sit amet, consectetur adipiscing elits, sed do mod,
          tempor ets incididunt ut labore et dolore magna aliqua. Ut enim
          adtiesm minim veniam, quis nostrud exercitation ullamco laboris."
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Service;

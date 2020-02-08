import React from "react";
import Container from '@material-ui/core/Container';
import './myPortfolio.css'
import Grid from "@material-ui/core/Grid";
import cafe from '../../App.css'
function Portfolio() {
  return (
    <Container
      className="portfolio"
      maxWidth="md"
      justify="center"
      alignItems="center"
    >
      <div class="main_title">
        <h2>Portfolio</h2>
      </div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <div class="portfolio_item">
              <div class="portfolio_img">
                <img className="portfolio_img" src={cafe} alt="" />
              </div>
              <div class="portfolio_title">
                <a href="#">
                  <h4>Cafe website</h4>
                </a>
                <h5>web development</h5>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div class="portfolio_item">
              <div class="portfolio_img">
                <img className="portfolio_img" src={cafe} alt="" />
              </div>
              <div class="portfolio_title">
                <a href="#">
                  <h4>Cafe website</h4>
                </a>
                <h5>web development</h5>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div class="portfolio_item">
              <div class="portfolio_img">
                <img className="portfolio_img" src={cafe} alt="" />
              </div>
              <div class="portfolio_title">
                <a href="#">
                  <h4>Cafe website</h4>
                </a>
                <h5>web development</h5>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <div class="portfolio_item">
              <div class="portfolio_img">
                <img className="portfolio_img" src={cafe} alt="" />
              </div>
              <div class="portfolio_title">
                <a href="#">
                  <h4>Cafe website</h4>
                </a>
                <h5>web development</h5>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div class="portfolio_item">
              <div class="portfolio_img">
                <img className="portfolio_img" src={cafe} alt="" />
              </div>
              <div class="portfolio_title">
                <a href="#">
                  <h4>Cafe website</h4>
                </a>
                <h5>web development</h5>
              </div>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div class="portfolio_item">
              <div class="portfolio_img">
                <img className="portfolio_img" src={cafe} alt="" />
              </div>
              <div class="portfolio_title">
                <a href="#">
                  <h4>Cafe website</h4>
                </a>
                <h5>web development</h5>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Portfolio; 
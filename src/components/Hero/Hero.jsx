import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import phone from "../../img/phone.png";

import "./hero.css";

const Hero = () => {
  return (
    <>
      <Box
        className="hero"
        style={{
          backgroundImage: "url(/img/bg-img.jpg)",
          height: "80vh",
          position: "relative",
        }}
      >
        <Box className="hero__overlay">
          <Container sx={{ mt: 5 }}>
            <Grid container columnSpacing={3}>
              <Grid item xs={12} md={8} alignSelf="center">
                <Box>
                  <Typography
                    variant="h3"
                    color="primary"
                    gutterBottom
                    sx={{
                      textAlign: { xs: "center", md: "left" },
                      fontWeight: "bold",
                    }}
                  >
                    SMART EARNERS INVESTMENT
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      color: "#fff",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    ONE COMPANY UNLIMITED SOLUTIONS
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{
                      color: "#fff",
                      textAlign: { xs: "center", md: "left" },
                    }}
                  >
                    We trade on Forex,Cryptocurrencies,Stocks ,Bonds,Futures and
                    Commodities with the best financial experts. BTC Trades
                    Nation is highly recognized and reputable around the foreign
                    exchange market and other financial institutions.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: { xs: "center", md: "flex-start" },
                  }}
                >
                  <Link to="/register">
                    <Button>Register</Button>
                  </Link>
                  <Link to="/login" style={{ marginLeft: "1rem" }}>
                    <Button variant="outlined">Sign in</Button>
                  </Link>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={4}
                sx={{ display: { xs: "none", md: "block" } }}
              >
                <img src={phone} alt="" />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Hero;

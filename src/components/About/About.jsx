import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";
import { about } from "./lists";

const About = () => {
  return (
    <React.Fragment>
      <Box sx={{ mt: 6 }}>
        <Box>
          <Box>
            <Typography
              variant="h6"
              component="h2"
              textAlign="center"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              Our Advantages
            </Typography>
            <Typography variant="body1" component="p" textAlign="center">
              smart earner investment is your no 1 cryptocurrency investment
              portfolio management system
            </Typography>
          </Box>
          <Container sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {about.map((about) => (
                <Grid item xs={12} md={4}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 2, md: 3 },
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box sx={{ width: { xs: "10%", md: "20%" } }}>
                      <img src={about.img} alt={about.title} />
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      <Typography
                        variant="body1"
                        gutterBottom
                        sx={{ fontWeight: "bold", textTransform: "uppercase" }}
                      >
                        {about.title}
                      </Typography>
                      <Typography variant="subtitle1">{about.about}</Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default About;

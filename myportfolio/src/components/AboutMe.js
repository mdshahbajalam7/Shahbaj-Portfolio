import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import photo from "../chand photo.jpg";

const About = () => {
  return (
    <Container id="about" sx={{ marginTop: "40px", marginBottom: "40px" }}>
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          display: "inline-flex",
          alignItems: "center",
          "&": { transition: "0.4s", transform: "translateX(0px)" },
          "&:hover": { transform: "translateX(25px)" },
          marginBottom: "20px",
          fontWeight: "bold",
        }}
      >
        A Bit About Me
      </Typography>

      <Grid container spacing={4}>
        {/* About Text */}
        <Grid item xs={12} sm={8}>
          <Box sx={{ marginTop: "20px" }}>
            <Typography variant="body1" color="text.secondary" paragraph>
              I am a highly motivated Software Engineer with a passion for
              developing efficient and scalable applications. With a background
              in the MERN stack and extensive experience in backend, frontend,
              and mobile application development, I thrive in collaborative
              environments and enjoy tackling complex problems.
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph>
              <strong>Key Highlights:</strong>
            </Typography>
            <ul>
              <li>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Over 1.5 years of experience specializing in backend, frontend,
                  and mobile application development.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Proficient in a diverse range of technologies including
                  Node.js, Express.js, React.js, MongoDB, and AWS.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Strong problem-solving abilities and analytical skills,
                  enabling me to address challenges effectively.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Experienced in developing RESTful APIs, ensuring reliable data
                  exchange and application scalability.
                </Typography>
              </li>
              <li>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Currently seeking opportunities to leverage my technical
                  skills in a dynamic tech organization to contribute to
                  innovative projects and grow my expertise.
                </Typography>
              </li>
            </ul>
          </Box>
        </Grid>
        {/* Profile Image Card */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              height: 250,
              width: 250,
              overflow: "hidden",
            }}
          >
            {/* <img
              src={photo}
              alt="Profile Photo"
              style={{
                height: "100%",
                width: "100%",
                // objectFit: "cover",
                transform: "scale(1.3)",
              }}
            /> */}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;

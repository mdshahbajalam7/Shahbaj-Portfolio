import React from "react";
import { Container, Typography, Box, IconButton, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactMe = () => {
  return (
    <Container id="contact" sx={{ marginTop: "40px", marginBottom: "40px" }}>
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        mb={4}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          "&": { transition: "0.4s", transform: "translateX(0px)" },
          "&:hover": { transform: "translateX(25px)" },
        }}
      >
        Get in Touch Contact me
      </Typography>

      <Box sx={{ marginTop: "20px" }}>
        <Stack direction="row" spacing={3} justifyContent="center">
          {/* Email */}
          <IconButton
            component="a"
            href="mailto:mdshahbajalam38@gmail.com"
            sx={{ color: "white" }}
          >
            <EmailIcon fontSize="large" />
          </IconButton>

          {/* Mobile */}
          <IconButton
            component="a"
            href="tel:+917004547417"
            sx={{ color: "white" }}
          >
            <PhoneIcon fontSize="large" />
          </IconButton>

          {/* GitHub */}
          <IconButton
            component="a"
            href="https://github.com/mdshahbajalam7"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <GitHubIcon fontSize="large" />
          </IconButton>

          {/* LinkedIn */}
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/md-shahbaj-alam-7343a320a/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Box>

      <Typography variant="body1" color="text.secondary" mt={4}>
        Feel free to reach out to me via email or connect with me on GitHub and
        LinkedIn!
      </Typography>
    </Container>
  );
};

export default ContactMe;

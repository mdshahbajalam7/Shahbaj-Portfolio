import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Stack,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";

const experiences = [
  {
    company: "Advance Digital Solutions",
    title: "Full Stack Developer",
    duration: "March 2022 - October 2024",
    responsibilities: [
   
      "Integrated the ABDM API framework to enhance healthcare services, improving interoperability and data access for patient management and healthcare providers.",
      "Implemented a customer support system using Socket.io, enabling real-time communication between users and support agents, increasing response times and customer satisfaction.",
      "Developed notification services utilizing AWS SNS for efficient and scalable user communication, ensuring timely alerts for critical updates and system messages.",
      "Designed and maintained RESTful APIs for secure and efficient data handling in various applications, following best practices for REST architecture to optimize performance.",
      "Implemented caching mechanisms using Redis to enhance application performance and reduce database load, resulting in significant improvements in response times for frequently accessed data.",
      "Utilized JWT (JSON Web Tokens) for secure authentication and authorization of API access, implementing token expiration and refresh strategies to enhance security.",
      "Integrated Matrix protocol for decentralized communication, enabling scalable and secure messaging features that support multiple channels and user interactions.",
      "Employed Sentry for real-time error tracking and monitoring, improving bug detection and resolution times, leading to a more stable application environment.",
      "Conducted performance tuning and optimization of server-side applications, implementing load balancing and database indexing to further improve system efficiency and reduce latency.",
      
    ]
  },
];

const ExperienceCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
}));

const Experience = () => {
  return (
    <Container id="experience" sx={{ marginTop: "40px", marginBottom: "40px" }}>
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
        Experience
      </Typography>

      {experiences.map((exp, index) => (
        <ExperienceCard key={index} variant="outlined">
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="h6" component="div">
                {exp.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.duration}
              </Typography>
            </Stack>
            <Typography variant="subtitle1" color="text.primary" mt={1}>
              {exp.title}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box>
              {exp.responsibilities.map((item, idx) => (
                <Typography key={idx} variant="body2" color="text.secondary" paragraph>
                  - {item}
                </Typography>
              ))}
            </Box>
          </CardContent>
        </ExperienceCard>
      ))}
    </Container>
  );
};

export default Experience;

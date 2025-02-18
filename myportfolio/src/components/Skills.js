import React from "react";
import { Card, CardContent, Typography, Grid, Container } from "@mui/material";
import { DiNodejs, DiNpm } from "react-icons/di";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import Github from "./Github";
import {
  SiChakraui,
  SiCsswizardry,
  SiHtml5,
  SiMongodb,
  SiPostman,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

import { FaGitAlt, FaNodeJs, FaReact, FaSlack } from "react-icons/fa";
// Sample skill data with icons instead of images
const data = [
  {
    name: "Skills",
    data: [
      { name: "HTML", icon: <SiHtml5 size={60} /> },
      { name: "CSS", icon: <SiCsswizardry size={60} /> },
      { name: "Javascript", icon: <FaNodeJs size={60} /> },
      { name: "React", icon: <FaReact size={60} /> },
      { name: "Redux", icon: <SiRedux size={60} /> },
      { name: "Next.js", icon: <RiNextjsLine size={60} /> },
      { name: "React Native", icon: <FaReact size={60} /> },
      { name: "Node.js", icon: <DiNodejs size={60} /> },
      { name: "Express.js", icon: <FaNodeJs size={60} /> },
      { name: "MongoDB", icon: <SiMongodb size={60} /> },
      { name: "Socket.io", icon: <SiSocketdotio size={60} /> },
      // { name: "AWS-Cloud", icon: <FaAws size={60} /> },
      // { name: "Material UI", icon: <FaAws size={60} /> },
      { name: "Tailwind CSS", icon: <RiTailwindCssFill size={60} /> },
      { name: "Chakra UI", icon: <SiChakraui size={60} /> },
    ],
  },
  {
    name: "Tools",
    data: [
      { name: "Visual Studio Code", icon: <BiLogoVisualStudio size={60} /> },
      { name: "Git", icon: <FaGitAlt size={60} /> },
      { name: "NPM", icon: <DiNpm size={60} /> },
      { name: "Postman", icon: <SiPostman size={60} /> },
      { name: "Slack", icon: <FaSlack size={60} /> },
    ],
  },
];

const Skills = () => {
  return (
    <Container id="skills">
      {data.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          <Typography
            component="h2"
            variant="h4"
            color="text.primary"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              "&": { transition: "0.4s", transform: "translateX(0px)" },
              "&:hover": { transform: "translateX(25px)" },
              marginTop: "40px",
            }}
          >
            {category.name}
          </Typography>
          <Grid
            container
            spacing={2}
            style={{ marginTop: "20px", marginBottom: "40px" }}
          >
            {category.data.map((skill, skillIndex) => (
              <Grid item xs={6} sm={4} md={3} key={skillIndex}>
                <Card variant="outlined" style={{ textAlign: "center" }}>
                  <CardContent>
                    {skill.icon}
                    <Typography variant="h6" component="div">
                      {skill.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      ))}

      <Github />
    </Container>
  );
};

export default Skills;

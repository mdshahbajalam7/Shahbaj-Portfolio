import * as React from "react";
import { alpha } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion"

export default function Home() {
  const handleDownload = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1c4QCJgN_5IsLXmkyAE10cmQawYFaowmP/view?usp=sharing'; 
    window.open(resumeUrl, '_blank');
  };
  return (
    <Box
      id="home"
      sx={(theme) => ({
        width: "100%",
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(180deg, #CEE5FD, #FFF)"
            : `linear-gradient(#02294F, ${alpha("#090E10", 0.0)})`,
        backgroundSize: "100% 20%",
        backgroundRepeat: "no-repeat",
      })}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: "100%", sm: "70%" } }}>
          <Typography
            variant="h3"
            textAlign="center"
            color="text.primary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
            Hey, My Name is &nbsp;
           
          </Typography>
          <Typography
              component="span"
              variant="h1"
              textAlign="center"
            color="primary.light"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
            >
              Md Shahbaj Alam
            </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: "center", width: { sm: "100%", md: "80%" } }}
          >
           I love building beautiful interfaces, web apps, and everything in between!
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 2, width: { xs: "100%", sm: "auto" } }}
          >
         
            <Button variant="outlined" color="primary"  onClick={handleDownload}>
             Resume
            </Button>
          </Stack>
         
        </Stack>
        
      </Container>
    </Box>
  );
}

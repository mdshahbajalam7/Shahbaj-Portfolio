import { Container, Typography, Box, Grid } from "@mui/material";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  return (
    <Container>
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
          marginTop: "30px",
          gap: "30px",
        }}
      >
        GitHub Contributions
        <Box sx={{ marginTop: 0.4 }}>
          <img
            src="https://komarev.com/ghpvc/?username=mdshahbajalam7&label=Profile%20views&color=0e75b6&style=flat"
            alt="mdshahbajalam7"
          />
        </Box>
      </Typography>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        marginBottom="40px"
      >
        {/* github-profile-trophy */}
        <Grid item xs={12} md={12}>
          <Box
            component="img"
            width="100%"
            src="https://github-profile-trophy.vercel.app/?username=mdshahbajalam7&theme=flat"
            alt="github-profile-trophy"
            sx={{
              maxWidth: "100%",
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": { boxShadow: 6 },
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        marginBottom="40px"
      >
        {/* GitHub Streak Stats */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            width="100%"
            src="https://streak-stats.demolab.com/?user=mdshahbajalam7&theme=react&hide_border=false"
            alt="GitHub Streak Stats"
            sx={{
              maxWidth: "400px",
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": { boxShadow: 6 },
            }}
          />
        </Grid>

        {/* GitHub Stats Card */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            width="100%"
            src="https://github-readme-stats.vercel.app/api?username=mdshahbajalam7&theme=react&hide_border=false&include_all_commits=true&count_private=false"
            alt="GitHub Stats Card"
            sx={{
              maxWidth: "400px",
              // height: "300px",
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": { boxShadow: 6 },
              // border: "1px solid red",
            }}
          />
        </Grid>

        {/* Top Languages */}
        <Grid item xs={12} md={4}>
          <Box
            component="img"
            width="100%"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mdshahbajalam7&theme=react&hide_border=false&include_all_commits=true&count_private=false&layout=compact"
            alt="Top Languages"
            sx={{
              maxWidth: "400px",
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": { boxShadow: 6 },
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        marginBottom="40px"
      >
        {/* github-readme-activity-graph */}
        <Grid item xs={12} md={12}>
          <Box
            component="img"
            width="100%"
            src="https://github-readme-activity-graph.vercel.app/graph?username=mdshahbajalam7&theme=dracula"
            alt="github-readme-activity-graph"
            sx={{
              maxWidth: "100%",
              boxShadow: 3,
              transition: "0.3s",
              "&:hover": { boxShadow: 6 },
            }}
          />
        </Grid>
      </Grid>
      {/* GitHub Calendar
      <Box
        mt={4}
        sx={{
          backgroundColor: "#F7F7F7",
          borderRadius: "10px",
          p: 2,
          boxShadow: 3,
        }}
      >
        <GitHubCalendar 
        
          username="goutham41"
        />
      </Box> */}
    </Container>
  );
}

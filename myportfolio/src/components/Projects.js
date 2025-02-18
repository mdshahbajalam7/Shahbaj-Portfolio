import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
  Container,
  Grid,
  Divider,
  Chip,
  Button,
} from "@mui/material";
import Slider from "react-slick";
import { styled } from "@mui/system";
import { SiMongodb, SiRedux } from "react-icons/si";
import { FaReact, FaNode } from "react-icons/fa";

const property = [
  {
    title: "Sarkari Job Samachar",
    description:
      "Online platform dedicated to providing the latest updates and information on government job opportunities in India. The website serves as a reliable resource for job seekers, delivering timely notifications, application details, and eligibility criteria across various sectors.",
    img: [
      "https://i.ibb.co/mJb5nng/Screenshot-2024-10-28-174113-Copy.png",
      "https://i.ibb.co/nDZd1M9/Screenshot-2024-10-28-174340.png",
      "https://i.ibb.co/3hc2Mwf/Screenshot-2024-10-28-174309.png",
      "https://i.ibb.co/PrNwVV8/Screenshot-2024-10-28-174240.png",
      "https://i.ibb.co/TvtxFDV/Screenshot-2024-10-28-174212.png",
    ],
    preview_link: "https://sarkarijobsamachar.com/",
    github_link: null,
    tech_stacks: [
      <FaReact size={20} />,
      <FaNode size={20} />,
      <SiMongodb size={20} />,
      <SiRedux size={20} />,
    ],
  },
  {
    title: "Kimaye: India’s Finest Fruits",
    description:
      "At Kimaye, we grow India’s finest fruits, celebrating nature’s gift with care and precision. Each fruit is carefully nurtured, cleaned, and packed to ensure unmatched safety and freshness. With Kimaye, every bite is a delightful and worry-free experience!",
    img: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbVF4VCxjUecknpjJbMN5-vwAMK-FVE7-GWtQBmzZpUR3QdZP9HmUhFyuinVXRRGmSnA&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHqg49Be7NA1T5QybEWvZ5RYehA5rGQkMU-MTBdsfVxpIgJA4fTd2H9ReWh93Nl0x4F3Y&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg3KfKUqhOkGkGdrM8aDojji_S_5qJo8fezbg6oBPtK5vTQuTa2fZVacbIMiZ4etFJl2k&usqp=CAU",
      // "https://i.ibb.co/PrNwVV8/Screenshot-2024-10-28-174240.png",
      // "https://i.ibb.co/TvtxFDV/Screenshot-2024-10-28-174212.png",
    ],
    preview_link: "https://mykimaye.netlify.app/",
    github_link: "https://github.com/mdshahbajalam7/Kimaye_clone",
    tech_stacks: [
      <FaReact size={20} />,
      <FaNode size={20} />,
      <SiMongodb size={20} />,
      <SiRedux size={20} />,
    ],
  },
  // {
  //   title: "Cryptocurrency Price Tracker",
  //   description:
  //     "Real-time, with automated email alerts via Nodemailer when price thresholds are met. Configured flexible environment settings for adaptability across deployments. Additionally, provided API endpoints to retrieve historical Bitcoin price data, ensuring easy access to past trends.",
  //   img: ["https://i.ibb.co/0BvFtYS/Screenshot-2024-10-28-183535.png"],
  //   tech_stacks: [<FaNode size={20} />],
  //   preview_link: null,
  //   github_link: "https://github.com/goutham41/Monitor-Bitcoin",
  // },
];

const ImageSlider = styled(Slider)(({ theme }) => ({
  ".slick-prev, .slick-next": {
    zIndex: 1,
  },
  ".slick-prev:before, .slick-next:before": {
    color: "black",
  },
  ".slick-dots li button:before": {
    color: "black",
  },
}));

const PropertyCard = ({
  title,
  description,
  img,
  tech_stacks,
  preview_link,
  github_link,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        variant="outlined"
        style={{ borderRadius: "10px", overflow: "hidden" }}
      >
        {img.length > 1 ? (
          <ImageSlider {...settings}>
            {img.map((image, index) => (
              <CardMedia
                key={index}
                component="img"
                height="200"
                image={image}
                alt={`${title} image ${index + 1}`}
                style={{ borderRadius: "10px 10px 0 0" }}
              />
            ))}
          </ImageSlider>
        ) : (
          <CardMedia
            component="img"
            height="200"
            image={img[0]}
            alt={title}
            style={{ borderRadius: "10px 10px 0 0" }}
          />
        )}
        <CardContent>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="inherit" color="text.main">
            Tech Stack
          </Typography>
          <Box sx={{ display: "flex", gap: "8px", mt: 2, flexWrap: "wrap" }}>
            {tech_stacks?.map((tech_stack, index) => (
              <Chip key={index} label={tech_stack} sx={{ padding: "4px" }} />
            ))}
          </Box>
          <Divider sx={{ my: 2 }} />
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {github_link && (
              <Button
                variant="contained"
                color="secondary"
                size="small"
                href={github_link}
                target="_blank"
              >
                Github
              </Button>
            )}
            {preview_link && (
              <Button
                variant="contained"
                color="primary"
                size="small"
                href={preview_link}
                target="_blank"
              >
                Preview
              </Button>
            )}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

const Projects = () => {
  return (
    <Container id="Projects" sx={{ marginTop: "40px", marginBottom: "40px" }}>
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        mb={4}
        sx={{
          display: "inline-flex",
          alignItems: "center",
          "&": { transition: "0.4s", transform: "translateX(0px)" },
          "&:hover": { transform: "translateX(10px)" },
          fontWeight: "bold",
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={2}>
        {property.map((prop, index) => (
          <PropertyCard key={index} {...prop} />
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;

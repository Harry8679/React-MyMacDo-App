import React from "react";
import { Card, CardActionArea, Box, Typography } from "@mui/material";
import { TouchApp } from "@mui/icons-material";
import { useStyles } from "../styles";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const Home = () => {
  const styles = useStyles();
  const navigate = useNavigate(); // hook de navigation

  return (
    <Card>
      <CardActionArea onClick={() => navigate("/choose")}>
        <Box className={clsx(styles.root, styles.red)}>
          <Box className={clsx(styles.main, styles.center)}>
            <Typography component="h6" variant="h6">
              Fast & Easy
            </Typography>
            <Typography component="h1" variant="h1">
              Order <br /> & pay <br /> here
            </Typography>
            <TouchApp fontSize="large" />
          </Box>
          <Box className={[styles.center, styles.green]}>
            <Logo large />
            <Typography component="h5" variant="h5">
              Touch to start
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default Home;

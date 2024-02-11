import React from "react";
import { Card, CardActionArea, Box, Typography } from "@mui/material";
import { TouchApp } from "@mui/icons-material";
import { useStyles } from "../styles";
import Logo from "../components/Logo";

const Home = () => {
  const styles = useStyles();
  return (
    <Card>
      <CardActionArea>
        <Box className={[styles.root, styles.red]}>
          <Box className={[styles.main, styles.center]}>
            <Typography component="h6" variant="h6">
              Fast & Easy
            </Typography>
            <Typography component="h1" variant="h1">
              Order <br /> & pay <br /> here
            </Typography>
            <TouchApp fontSize="large"></TouchApp>
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

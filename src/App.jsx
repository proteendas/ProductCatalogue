import React from "react";
import useStyles from "./styles";

import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";

import { ShoppingCart } from "@material-ui/icons";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <ShoppingCart className={classes.icon} />
          <Typography variant="h6">Product Material Page</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Product Demo
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              laboriosam saepe accusamus asperiores atque, ea rem adipisci fugit
              est ipsa.
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="secondary">
                    View Products
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary">
                    Back Home
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                      Random Item {card}
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Magni, quasi.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="secondary">
                      View
                    </Button>
                    <Button size="small" color="secondary">
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, enim?
        </Typography>
      </footer>
    </>
  );
};

export default App;

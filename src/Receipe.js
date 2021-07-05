import { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardHeader from "@material-ui/core/CardHeader";

import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//     gap: "10px"
//   },
//   media: {
//     height: 300
//   }
// });
const useStyles = makeStyles({
  about: {
    // textOverflow:'ellipsis',
    // overflow:'hidden',
    // whiteSpace:'nowrap'
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textAlign: "justify",
    color: "grey",
    // marginLeft: "auto"
  },
  favicon: {
    // marginLeft: "auto",
    color: "brown",
  },
});

function Ing({ receipe }) {
  const ingd = receipe.ingredients;
  return (
    <ul style={{ listStyleType: "none", textAlign: "left", paddingLeft: "0" }}>
      {ingd.map((details, index) => {
        return <li key={index}>{details}</li>;
      })}
    </ul>
  );
}
// function
function Receipes({ setSearch, searchReceipe }) {
  const classes = useStyles();
  const [receipe, setReceipe] = useState([]);

  useEffect(() => {
    fetch("https://mockapi.io/projects/609e2a6333eed80017957e00/", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setReceipe(res));
  }, [setReceipe]);

  return (
    <>
      {receipe
        .filter((rec) => {
          if (searchReceipe === "") {
            return rec;
          } else if (
            rec.name.toUpperCase().includes(searchReceipe.toUpperCase())
          ) {
            return rec;
          }
        })
        .map((receipe) => (
          <Card className="cards">
            <CardActionArea
            // className={classes.root}
            >
              <CardMedia
                // className={classes.media}
                component="img"
                alt="foodimg"
                height="350"
                image={receipe.src}
                icon
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h4"
                  component="h2"
                  style={{ color: "saddlebrown" }}
                >
                  {receipe.name}
                </Typography>
                <Typography className={classes.about}>
                  {/* <Ing receipe={receipe}/> */}
                  {receipe.about}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton
                className={classes.favicon}
                aria-label="add to favorites"
              >
                <FavoriteIcon />
              </IconButton>{" "}
              <Button
                variant="contained"
                color="primary"
                size="medium"
                onClick={() => {
                  return { ...receipe.procedure };
                }}
              >
                Lets cook...
              </Button>
            </CardActions>
          </Card>
        ))}
    </>
  );
}

export { Receipes };

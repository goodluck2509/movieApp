import { Grid, List, ListItem, ListItemText } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link, useLoaderData } from "remix";
import { ItemListTitle } from "~/api/movie";
import FormSearch from "~/common/FormSearch";

const useStyles = makeStyles((theme: any) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1e2129",
  },
  titlPage: {
    textDecoration: "none",
    border: 0,
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 64,
    padding: "0 30px",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
  },
  appBar: {
    backgroundColor: "#1e2129",
    position: "fixed",
    top: 0,
  },
  title: {
    marginTop: 12,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  nameYellow: {
    color: "yellow",
  },
  menuList: {
    maxWidth: "1240px",
    margin: "auto",
    color: "white",
  },
  mainHeader: {
    background: "black",
  },
  header: {
    width: "100%",
    padding: "0 3%",
    background: "black",
  },
  toolBar: {
    padding: "0 0",
  },
  menuButtonSearch: {
    marginRight: theme.spacing(2),
    paddingLeft: 0,
  },
  titleFilm: {
    flexGrow: 1,
  },
  accountButton: {
    marginLeft: theme.spacing(2),
  },
  buttonRed: {
    background: "#e50914",
  },
  labelMenu: {
    color: "white",
  },
}));

export default function HomePage() {
  const classes = useStyles();

  let listMovie = useLoaderData();

  const title = listMovie?.title;

  const newArrFilm = title ? listMovie?.newList : listMovie?.listData;

  let newListFilm = [];
  for (let i = 0; i < listMovie?.newArr?.length; i += 1) {
    for (let j = 0; j < listMovie?.newArr[i]?.length; j += 1) {
      newListFilm.push(listMovie?.newArr[i][j]);
    }
  }
  const dataMenu = [
    {
      label: "TH??? LO???I",
      value: 1,
      totalName: "type",
    },
    {
      label: "QU???C GIA",
      value: 2,
      totalName: ["M???", "Nh???t B???n", "H??n Qu???c", "???n ?????", "Trung Qu???c"],
    },
    {
      label: "PHIM L???",
      value: 3,
      totalName: ["N??m 2022", "N??m 2021", "N??m 2020", "N??m 2019", "N??m 2018"],
    },
    {
      label: "PHIM B???",
      value: 4,
      totalName: [
        "Phim ki???m hi???p",
        "Phim v?? thu???t",
        "Phim vi???n t?????ng",
        "Phim t??m l??",
        "Phim gia ????nh",
      ],
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.titlPage}>
            <Typography className={classes.title} variant="h6" noWrap>
              Bom<span className={classes.nameYellow}>Vang</span>.TV
            </Typography>
          </Link>
          <Grid className={classes.menuList}>
            <Box display="flex">
              <Button>
                <Typography variant="body1" className={classes.labelMenu}>
                  XEM PHIM
                </Typography>
              </Button>
              {dataMenu.map((item: any) => (
                <Box mr={2}>
                  <Tooltip
                    title={
                      item.value === 1 ? (
                        <List component="nav" aria-label="contacts">
                          {!title &&
                            newArrFilm?.map(
                              (name: ItemListTitle, index: number) => {
                                console.log(
                                  "???? ~ HomePage ~ name",
                                  name?.homeSectionId
                                );

                                return (
                                  <>
                                    {name?.homeSectionName && (
                                      <Link
                                        to={`#movie-${name?.homeSectionId}`}
                                        className={classes.link}
                                      >
                                        <ListItem key={index} button>
                                          <ListItemText
                                            primary={
                                              name?.homeSectionName?.includes(
                                                "Loklok"
                                              )
                                                ? "Phim tuy???n ch???n c???a REMIX"
                                                : name?.homeSectionName?.includes(
                                                    "kinh"
                                                  )
                                                ? "Phim kinh d???"
                                                : name?.homeSectionName
                                            }
                                          />
                                        </ListItem>
                                      </Link>
                                    )}
                                  </>
                                );
                              }
                            )}
                        </List>
                      ) : (
                        <>
                          {item.totalName && (
                            <List component="nav" aria-label="contacts">
                              {item.totalName.map((name: any) => (
                                <ListItem button>
                                  <ListItemText primary={name} />
                                </ListItem>
                              ))}
                            </List>
                          )}
                        </>
                      )
                    }
                    interactive
                  >
                    <Button>
                      <Typography variant="body1" className={classes.labelMenu}>
                        {item.label}
                      </Typography>
                    </Button>
                  </Tooltip>
                </Box>
              ))}
              <Button>
                <Typography variant="body1" className={classes.labelMenu}>
                  TOP IMDb
                </Typography>
              </Button>
              <Button>
                <Typography variant="body1" className={classes.labelMenu}>
                  BOOKMARK
                </Typography>
              </Button>
            </Box>
          </Grid>
          <FormSearch />
        </Toolbar>
      </AppBar>
    </div>
  );
}

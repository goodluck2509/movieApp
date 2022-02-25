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
      label: "THỂ LOẠI",
      value: 1,
      totalName: "type",
    },
    {
      label: "QUỐC GIA",
      value: 2,
      totalName: ["Mỹ", "Nhật Bản", "Hàn Quốc", "Ấn Độ", "Trung Quốc"],
    },
    {
      label: "PHIM LẺ",
      value: 3,
      totalName: ["Năm 2022", "Năm 2021", "Năm 2020", "Năm 2019", "Năm 2018"],
    },
    {
      label: "PHIM BỘ",
      value: 4,
      totalName: [
        "Phim kiếm hiệp",
        "Phim võ thuật",
        "Phim viễn tưởng",
        "Phim tâm lý",
        "Phim gia đình",
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
                                  "🚀 ~ HomePage ~ name",
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
                                                ? "Phim tuyển chọn của REMIX"
                                                : name?.homeSectionName?.includes(
                                                    "kinh"
                                                  )
                                                ? "Phim kinh dị"
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

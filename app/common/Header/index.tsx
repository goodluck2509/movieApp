import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Link } from "remix";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";

import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1e2129",
  },
  linkHome: {
    color: "#fff",
    textDecoration: "none",
  },
  appBar: {
    backgroundColor: "#1e2129",
    position: "fixed",
    top: 0,
  },
  title: {
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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(8)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //   width: "12ch",
    //   "&:focus": {
    //     width: "20ch",
    //   },
    // },
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
  const dataMenu = [
    {
      label: "XEM PHIM",
      value: "",
      totalName: "",
    },
    {
      label: "THỂ LOẠI",
      value: "",
      totalName: ["Phim kiếm hiệp", "Phim viễn tưởng"],
    },
    {
      label: "QUỐC GIA",
      value: "",
      totalName: ["Mỹ", "Nhật"],
    },
    {
      label: "PHIM LẺ",
      value: "",
      totalName: ["Năm 2021", "Năm 2022"],
    },
    {
      label: "PHIM BỘ",
      value: "",
      totalName: ["Phim kiếm hiệp", "Phim võ thuật"],
    },
    {
      label: "TOP IMDb",
      value: "",
      totalName: "",
    },
    {
      label: "BOOKMARK",
      value: "",
      totalName: "",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Link to="/" className={classes.linkHome}>
            <Typography className={classes.title} variant="h6" noWrap>
              bom<span className={classes.nameYellow}>vang</span>.tv
            </Typography>
          </Link>
          <Grid className={classes.menuList}>
            <Box display="flex">
              {dataMenu.map((item: any) => (
                <Box mr={2}>
                  <Tooltip
                    title={
                      item.totalName && (
                        <List component="nav" aria-label="contacts">
                          {item.totalName.map((name: any) => (
                            <ListItem button>
                              <ListItemText primary={name} />
                            </ListItem>
                          ))}
                        </List>
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
            </Box>
          </Grid>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Tìm kiếm…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

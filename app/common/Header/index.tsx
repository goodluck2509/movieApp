import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#1e2129",
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
    color: "#8e95a5",
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
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
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
  // netflixLogo: {
  //   width: 110,
  //   color: "#e50914",
  // },
  accountButton: {
    marginLeft: theme.spacing(2),
  },
  buttonRed: {
    background: "#e50914",
  },
}));
export default function HomePage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            bom<span className={classes.nameYellow}>vang</span>.tv
          </Typography>
          <Grid className={classes.menuList}>
            <Box display="flex">
              <Box mr={2}>
                <Typography variant="body1" color="inherit">
                  XEM PHIM
                </Typography>
              </Box>
              <Box mr={2}>
                <Typography variant="body1" color="inherit">
                  THỂ LOẠI
                </Typography>
              </Box>
              <Box mr={2}>
                <Typography variant="body1" color="inherit">
                  QUỐC GIA
                </Typography>
              </Box>
              <Box mr={2}>
                <Typography variant="body1" color="inherit">
                  PHIM LẺ
                </Typography>
              </Box>
              <Box mr={2}>
                <Typography variant="body1" color="inherit">
                  PHIM BỘ
                </Typography>
              </Box>
              <Box mr={2}>
                <Typography variant="body1" color="inherit">
                  TOP IMDb
                </Typography>
              </Box>
              <Box mr={2}>
                <Typography variant="body1" color="inherit">
                  BOOKMARK
                </Typography>
              </Box>
            </Box>
          </Grid>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      {/* <Box className={classes.mainHeader}>
        <AppBar position="static" className={classes.header}>
          <Toolbar className={classes.toolBar}>
            <Typography variant="h6" className={classes.titleFilm}>
              <Link to="/">
                <svg
                  viewBox="0 0 111 30"
                  className={classes.netflixLogo}
                  focusable="true"
                >
                  <g id="netflix-logo">
                    <path
                      d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                      id="Fill-14"
                    />
                  </g>
                </svg>
                BomVang.tv
              </Link>
            </Typography>
            <Box display="flex" justifyContent="spaceB">
              <Box display="flex" alignItems="center">
                <Typography>
                  PHIM VÀ CHƯƠNG TRÌNH TRUYỀN HÌNH KHÔNG GIỚI HẠN
                </Typography>
              </Box>
              <Button
                className={clsx(classes.accountButton, classes.buttonRed)}
                variant="contained"
                color="primary"
              >
                THAM GIA NGAY
              </Button>
              <Button
                className={classes.accountButton}
                variant="contained"
                color="primary"
              >
                ĐĂNG NHẬP
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box> */}
    </div>
  );
}

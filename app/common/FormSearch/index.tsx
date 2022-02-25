import Button from "@material-ui/core/Button";
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import { Form } from "remix";

const useStyles = makeStyles((theme) => ({
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
    //  pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 50,
    backgroundColor: "#83858d",
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
}));
export default function FormSearch() {
  const classes = useStyles();
  return (
    <Form reloadDocument action="" className="form-search">
      <div className={classes.search}>
        <Button
          type="submit"
          variant="contained"
          className={classes.searchIcon}
        >
          <SearchIcon />
        </Button>
        <InputBase
          type="text"
          name="title"
          placeholder="Tìm kiếm…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
    </Form>
  );
}

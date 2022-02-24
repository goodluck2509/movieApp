import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import { Pagination } from "@material-ui/lab";
import PaginationItem from "@material-ui/lab/PaginationItem";
import React from "react";
import { Link, useLoaderData } from "remix";
import ListMovie from "~/containers/HomePage/ListMovie";
import Slide from "~/containers/HomePage/Slide";
const useStyles = makeStyles((theme) => ({
  rootHompage: {
    marginTop: "64px",
  },
  container: {
    minHeight: "100vh",
    color: "white",
    maxWidth: "1280px",
    margin: "auto",
  },
  banner: {
    backgroundColor: "#2f3441",
  },
  iconRssFeed: {
    fontSize: "75px",
  },
  searchInput: {
    width: "100%",
    background: "#fff",
    margin: "10px 0 40px",
    padding: 10,
    borderRadius: "30px",
  },
  iconSearch: {
    color: "black",
    fontSize: 40,
  },
  sectionPath: {
    background: "#272b34",
    color: "#00acc1",
    fontSize: 20,
    padding: "16px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#adaaaa3d",
    padding: theme.spacing(2),
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

  const listSlide = listMovie?.listData[0];

  return (
    <Grid className={classes.rootHompage}>
      <Slide listSlide={listSlide?.recommendContentVOList} />
      <Grid className={classes.container}>
        <Box
          display="flex"
          alignItems="center"
          className={classes.banner}
          my={3}
        >
          <RssFeedIcon className={classes.iconRssFeed} />
          <Box alignItems="center">
            <Typography variant="h5">
              <b>BomVang TV</b>
            </Typography>
            <Typography component="p">
              Nơi xem phim online miễn phí với hàng nghìn bộ phim hay được cập
              nhật liên tục.
            </Typography>
          </Box>
        </Box>
        <Box mb={3}>
          <Typography className={classes.sectionPath} variant="h4" paragraph>
            Home / Thể loại
          </Typography>
        </Box>
        <Box>
          {title ? (
            <ListMovie
              movies={newListFilm}
              newTitle={title}
              title=""
              homeSectionId={0}
            />
          ) : (
            newArrFilm?.map((item: any, index: number) => (
              <ListMovie
                movies={item?.recommendContentVOList}
                title={item?.homeSectionName}
                newTitle={title}
                key={Number(index)}
                homeSectionId={item?.homeSectionId}
              />
            ))
          )}
          <Box textAlign="center" my={10}>
            <Pagination
              count={8}
              variant="outlined"
              color="secondary"
              defaultPage={listMovie?.newPage + 1}
              // count={getTotalPage(total, limit)}
              size="medium"
              shape="rounded"
              className={classes.pagination}
              renderItem={(item) => (
                <PaginationItem
                  component={Link}
                  to={`${item.page === 1 ? "" : `?page=${item.page}`}`}
                  {...item}
                />
              )}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

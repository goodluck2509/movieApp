import { Paper, Typography } from "@material-ui/core";
import MobileStepper from "@material-ui/core/MobileStepper";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  // stepper
  root: {
    flexGrow: 1,
    position: "relative",
  },
  header: {
    position: "absolute",
    color: "white",
    bottom: "10%",
    left: "16%",
    maxWidth: "1240px",
    background: "unset",
    zIndex: 15,
  },
  contairnerMobilestep: {
    position: "absolute",
    bottom: 0,
  },
  mobilestep: {
    position: "absolute",
    bottom: 0,
    left: "16%",
    background: "unset",
    zIndex: 25,
  },
  styleShadow: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "25%",
    background:
      "linear-gradient(#1e212900, #1e212970, #1e2129d9,#1e2129, #1e2129)",
    zIndex: 10,
  },
  img: {
    height: 600,
    display: "block",
    overflow: "hidden",
    width: "100%",
  },
  //
}));

export default function HomePage({ listSlide }: any) {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = listSlide?.length;

  const handleStepChange = (step: any) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography variant="h5" paragraph>
          {listSlide[activeStep].title}
        </Typography>
        <Typography variant="h6">Thể loại: Hành động, kịch tính</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {listSlide?.map((step: any, index: any) => (
          <div key={Number(index)}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imageUrl}
                alt={step.title}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton=""
        backButton=""
        className={classes.mobilestep}
      />
      <div className={classes.styleShadow}></div>
    </div>
  );
}

import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";

/* card thường chỉ shadow khi hover */
const CardDurationOnlyHover = withStyles(
  {
    root: {
      overflow: "unset",
      wordBreak: "break-word",
      boxShadow: "none",
      cursor: "pointer",
      position: "relative",
      transition: "all 0.2s ease-in-out",
      "-o-transition": "all 0.2s ease-in-out",
      "-moz-transition": "all 0.2s ease-in-out",
      "-webkit-transition": "all 0.2s ease-in-out",
      "&:hover": {
        boxShadow: "0px 3px 20px 0px rgba(44, 101, 144, 0.3)",
        "-webkit-transform": "translateY(-4px)",
        "-moz-transform": "translateY(-4px)",
        "-o-transform": "translateY(-4px)",
        "-ms-transform": "translateY(-4px)",
        transform: "translateY(-4px)",
      },
    },
  },
  { name: "CardDurationOnlyHover" }
)(Card);
export default CardDurationOnlyHover;

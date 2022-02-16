import PropTypes from "prop-types";
import React from "react";
import Home from "~/containers/Home";

export let loader = async () => {
  let res = await fetch(
    "https://ga-mobile-api.loklok.tv/cms/app/homePage/getHome?page=0",
    {
      method: "GET",
      headers: {
        lang: "en",
        versioncode: "11",
        clienttype: "ios_jike_default",
      },
    }
  );
  return res.json();
};
// export let loader = async () => {
//   let res = await fetch(
//     "https://ga-mobile-api.loklok.tv/cms/app/search/v1/searchLeaderboard",
//     {
//       method: "GET",
//       headers: { lang: "en", versioncode: 11, clienttype: "ios_jike_default" },
//     }
//   );
//   return res.json();
// };
export default function Film() {
  return <Home />;
}

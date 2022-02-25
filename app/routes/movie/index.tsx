import React from "react";
import { LoaderFunction } from "remix";
import { getFilms } from "~/api/movie";
import Home from "~/containers/Home";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  const page = url.searchParams.get("page");

  return await getFilms(title, page);
};

export default function Film() {
  return <Home />;
}

// import PropTypes from "prop-types";
// import React from "react";
// import { LoaderFunction, useLoaderData, useParams, redirect } from "remix";
// import Home from "~/containers/Home";
// import api, { getFilms } from "../api/movie";

// export let loader = ({ request, params }) => {
//   console.log("🚀 ~ loader ~ params", params);
//   console.log("🚀 ~ loader ~ request", request);

//   let a = api();
//   return a;
// };

// export const loader: LoaderFunction = async ({ request }) => {
//   const url = new URL(request.url);
//   const title = url.searchParams.get("title");
//   const page = url.searchParams.get("page");

//   return await getFilms(title, page);
// };

// export default function Film() {
//   const data = useLoaderData();
//   const param = useParams();
//   console.log("🚀 ~ Film ~ param", param);
//   console.log("🚀 ~ Film ~ data", data);
//   return <Home />;
// }

// export const loader: LoaderFunction = async () => {
//   return redirect("/movie");
// };

// import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Footer from "~/common/Footer";
import Header from "~/common/Header";
import HomePage from "~/containers/HomePage";

export default function Home() {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
}

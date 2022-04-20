import React from "react";
import Navigation from "./Navigation";
import Logo from "../components/Logo";
import Countries from "../components/Countries";

function Home() {
  return (
    <div className="countries">
      <Logo />
      <Navigation />
      <Countries />
    </div>
  );
}

export default Home;

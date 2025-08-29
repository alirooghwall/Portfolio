/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React, { useRef } from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Ali Ahmad",
  title: "Undergraduate Computer Science Student",
  email: "",
  gitHub: "alirooghwall",
  instagram: "",
  linkedIn: "",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const App = () => {
  const sitePropsRef = useRef(null);

  const handleScrollToSiteProps = () => {
    if (sitePropsRef.current) {
      sitePropsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="main">
      <Header onScrollToSiteProps={handleScrollToSiteProps} />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      {/* Add a section for siteProps */}
      <section
        ref={sitePropsRef}
        style={{
          padding: "2rem 0",
          background: secondaryColor,
          color: "#222",
          border: "2px solid red", // Debug: add border to check visibility
          zIndex: 1, // Ensure it's above backgrounds
        }}
      >
        <h2>Contact & Socials</h2>
        <ul>
          <li>Name: {siteProps.name}</li>
          <li>Title: {siteProps.title}</li>
          {siteProps.gitHub && <li>GitHub: {siteProps.gitHub}</li>}
        </ul>
      </section>
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;

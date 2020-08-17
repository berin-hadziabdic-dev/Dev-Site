import React from "react";
import Nav from "./Components/NavBar";
import SiteBanner from "./Components/SiteBanner";
import {
  SectionHeader,
  MultiSectionCard,
  SectionCard,
  PortfolioSection,
  ContactSection,
  ContactSectionTemporary,
} from "./Components/SectionCard";

import "./App.css";

import PSU_icon from "./Components/Images/PSU.jpg";
import PCC_icon from "./Components/Images/PCC.png";
import mail_icon from "./Components/Images/mail-icon.png";
import mongo_icon from "./Components/Images/mongodb_icon.png";
import bootstrap_icon from "./Components/Images/bootstrap_icon.png";
import node_icon from "./Components/Images/node_icon.png";
import react_icon from "./Components/Images/react_icon.png";
import servb_image from "./Components/Images/Serv_b.png";
import HIBE_image from "./Components/Images/HIBE.png";

import banner from "./Components/Images/banner.png";

const portfolio = [
  [
    { img: servb_image, title: "ServB" }, //Image is always zeroth item in every project object.

    {
      h3: "Project Aim",
      p:
        "Send heavy, light, or moderate traffic to a set of routes on a backend server; also allows for user, you or me, to generate data that might represents actual application users. Compiles request and response reports at the end of the process, saving them to a back end.",
    },
    {
      h3: "Testsets",
      p:
        "Use JSON to configure hostname, TCP port, hostname pathlist, requests per second, and specify a data source.",
    },
    {
      h3: "Run Testset",
      p:
        "Select the testset. Choose a report name. Click a button. Fork a microservice.",
    },
    {
      h3: "View Reports",
      p: "View reports organized by path with optional status code filtering.",
    },
  ],
  [
    { img: HIBE_image, title: "Have I Been Exploited" }, //Image is always zeroth item in every project object.

    {
      h3: "Project Aim",
      p:
        "Report compromised Blockchain contracts  on the HaveIBeenExploited website.",
    },
    {
      h3: "Python Scraper",
      p:
        "My teammate developed a python scraper which scoured the web for compromised contracts. The contracts are saved to a database.",
    },
    {
      h3: "The Website",
      p:
        "A Go backend and a React front end allows users to enter contract addresses in a search bar and reports whether or not the contact has been exploited and if it has, a table of vulnerabilities is displayed.",
    },
  ],
];

const PCC_TEXT = [
  "Portland Community College",
  "Associates Of Applied Science",
  "P.C.C was a challenging and rewarding experience.",
  "My days mostly consisted of crunching math and coding.",
];
const PSU_TEXT = [
  "Portland State University",
  "Bachelor's Of Computer Science",
  "I'm very satisfied with my tour of the P.S.U experience. ",
  "The curriculum built a very strong foundation in general C.S theory, networking, and databases.",
];
const SERVB_TEXT =
  "The Serverbuster. I name things poorly, except my variables. A node.js + React app that allows you to put,post,delete, and get to a set of routes on your server. Useful for testing. Uses a fork microservice to perform HTTP workload.";
const HIBE_TEXT =
  "An application I and another student made to store and report on exploited contracts. It was built with a vanilla React front end, GoLang backend, MySql, and a python scraper which collected contract info.";

const sectionObject = {
  react: {
    h2: "React",
    span:
      "React is an incredible library. It's simple and you can build apps fast. I also like that the eco system is rich, and there's support for a wide vista of tools.",
  },
  mongo: {
    h2: "Mongo",
    span:
      "I have really taken a liking to Mongo after using SQL databases. After leaping over the initial hurdle, writing queries is incredibly easy and fast. The documentation is very thorough too. ",
  },
  bootstrap: {
    h2: "bootstrap",
    span:
      "Bootstraps prestyled HTML elements are amazing, but its' grid system is second to none. It makes developing much faster since I don't need to tinker with CSS, and it comes with prebuilt responsivenes. These are enormous benefits that cut out a lot, so it is an indispensible tool for me at least.",
  },
};

function App() {
  return (
    <div className="App container-fluid mx-0 px-0 w-100">
      <SiteBanner bannerImg={banner} />
      <Nav />

      <SectionHeader bgColor={"#ad8f8f"} title={"Education"} />
      <SectionCard cover_bg="#8786cf" imgSrc={PCC_icon} text={PCC_TEXT} />
      <SectionCard
        className="row"
        cover_bg="#85b8ff"
        imgSrc={PSU_icon}
        text={PSU_TEXT}
      />

      <SectionHeader title={"Stack"} />
      <MultiSectionCard
        imgSrc={PCC_icon}
        colors={["#ff0000", "#bdb69f", "#dbdbdb", "#ff0000"]}
        mongo_icon={mongo_icon}
        bootstrap_icon={bootstrap_icon}
        node_icon={node_icon}
        react_icon={react_icon}
        sectionObject={sectionObject}
      />
      <SectionHeader title={"Portfolio"} />
      <PortfolioSection features={portfolio} />
      <SectionHeader title="Contact" />
      <ContactSectionTemporary mail_icon={mail_icon} />
    </div>
  );
}

export default App;

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

import me_icon from "./Components/Images/aboutme.jpg";
import PSU_icon from "./Components/Images/PSU.jpg";
import PCC_icon from "./Components/Images/PCC.png";
import mongo_icon from "./Components/Images/mongodb_icon.png";
import bootstrap_icon from "./Components/Images/bootstrap_icon.png";
import node_icon from "./Components/Images/node_icon.png";
import react_icon from "./Components/Images/react_icon.png";
import servb_image from "./Components/Images/Serv_b.png";
import HIBE_image from "./Components/Images/HIBE.png";
import PostIt_image from "./Components/Images/PostIt.png";
import banner from "./Components/Images/banner.png";

const portfolio = [
  [
    { img: servb_image, title: "ServB" }, //Image is always zeroth item in every project object.

    {
      h3: "Project Aim",
      p:
        "Send heavy, light, or moderate traffic to a set of routes on a backend server; also allows for the user, that's you or me, to generate data that might represent actual application users. Compiles request and response reports by pulling headers, body, and response status from the node.js req/res pairs.  Before-exit, the forked process validates the reports  and saves results to a Mongo back end for view at a later time.",
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
      p: "Report compromised Blockchain contracts through a web app.",
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
  [
    { img: PostIt_image, title: "Post-It" }, //Image is always zeroth item in every project object.

    {
      h3: "Project Aim",
      p:
        "Allow user to send GET,PUT,POST, and DELETE requests to the back end which served the Vue app. This tool is mainly used to simulate the HTTP functionality of a front end when one is not available.",
    },
    {
      h3: "Headers",
      p:
        "The app allows the user to add headers via simple form through key and value inputs. The inputs are put through basic validation and then stored in a javascript object.",
    },
    {
      h3: "Body",
      p:
        "The app also allows for a JSON body payload which is defined in much the same way the headers are.",
    },
    {
      h3: "Sending A Request",
      p:
        "Once headers and Json payload have been defined, the user specifies an api-endpoint, an HTTP method via a select dropdown, and the response is JSON stringified and pretty printed at the bottom of the document. ",
    },
  ],
];

const about_TEXT = [
  "Nice to meet you.",
  "I'm Berin.",
  "I'm very fond of reading books when I have the time, and taking my dog King out for walks. Stephen King is also my author of choice. ",
  "Fitness and the geetar are both pastimes of mine. They bring much positivity to my life. I also have been itching to learn how to play the piano, though I can never seem to find the time. ",
];
const PCC_TEXT = [
  "Portland Community College",
  "Associates Of Applied Science",
  "P.C.C was a great experience. I've got nothing bad to say.",
  "It was a two year trudge of math and coding.",
];
const PSU_TEXT = [
  "Portland State University",
  "Bachelor's Of Computer Science",
  "P.S.U was a few notches of difficulty above PCC. ",
  "The curriculum built a very strong foundation in general algorithmic knowledge,networking, databases, programming languages, and operating systems. I tried to tailor my elective workload towards web development because I knew that's what I wanted to do, in spite of all the \"You're getting a four year degree only to become a web developer ridicule.\"",
];

const sectionObject = {
  react: {
    h2: "React",
    span:
      "React is an incredible library. Hooks simplify everything. The eco system is rich, and it's compatible with many tools like V.S code, Bootstrap, Node, and so on. All very good things.",
  },
  mongo: {
    h2: "Mongo",
    span:
      "I have really taken a liking to Mongo after using SQL databases. The beggining wasn't fun, especially the node.js driver callbacks, but after getting past the initial learning curver, writing queries is incredibly easy and fast. The documentation is very thorough too, and the payoff is huge. It's worth to keep an open mind. ",
  },
  bootstrap: {
    h2: "bootstrap",
    span:
      "Bootstraps prestyled HTML elements are amazing, but its' grid system is second to none. It makes developing much faster since I don't need to tinker with CSS, and it comes with prebuilt responsivenes. These are enormous benefits that cut out a lot of boilerplate, so it is an indispensible tool, to me at least.",
  },
};

function App() {
  return (
    <div className="App container-fluid mx-0 px-0 w-100">
      <div className="row">
        <SiteBanner bannerImg={banner} />
        <Nav />
        <SectionHeader bgColor={"#ad8f8f"} id="about" title={"About"} />

        <div className="container-fluid">
          <div className="row ">
            {" "}
            <SectionCard
              className="row"
              cover_bg="white"
              imgSrc={me_icon}
              text={about_TEXT}
            />
            <SectionCard cover_bg="white" imgSrc={PCC_icon} text={PCC_TEXT} />
            <SectionCard
              className="row"
              cover_bg="white"
              imgSrc={PSU_icon}
              text={PSU_TEXT}
            />
          </div>
        </div>

        <SectionHeader title={"Stack"} id="stack" />
        {
          <MultiSectionCard
            imgSrc={PCC_icon}
            colors={["#ff0000", "#bdb69f", "#dbdbdb", "#ff0000"]}
            mongo_icon={mongo_icon}
            bootstrap_icon={bootstrap_icon}
            node_icon={node_icon}
            react_icon={react_icon}
            sectionObject={sectionObject}
          />
        }
        <SectionHeader title={"Portfolio"} id="portfolio" />
        <PortfolioSection features={portfolio} />
        <SectionHeader title="Contact" id="contact" />
      </div>
      <div className="row" id="THIS IS A TEMPORARY ELEMENT">
        <h3 className="col-12">
          E-mail:{" "}
          <span className="text-success">hadziabdicberin@gmail.com</span>
        </h3>
        <h3 className="col-12">
          <span>Github Link: </span>
          <a
            href="https://github.com/berin-hadziabdic-dev"
            sclassName="text-primary"
          >
            Click Me!
          </a>
        </h3>
      </div>
    </div>
  );
}

export default App;

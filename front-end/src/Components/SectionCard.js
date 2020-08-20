import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function SectionHeader(props) {
  let { title, id } = props;
  let firstLetter = title.charAt(0);
  let remainingLetters = title.substring(1, 100);

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "white",
        fontStyle: "oblique",
        borderTop: "1px solid",
      }}
      id={id}
    >
      <div className="row">
        <div className="col-3 offset-1">
          <span className="text-danger section-header-header">
            {" "}
            {firstLetter}
          </span>
          <span className="section-header-header">{remainingLetters}</span>
        </div>
      </div>
    </div>
  );
}

function SectionCard(props) {
  let { imgSrc, text, cover_bg } = props;
  return (
    <div className="col-12 col-md-6 col-lg-4 row justify-content-center">
      <div className="my-4 col-12 ">
        {" "}
        <img
          alt=""
          className="border border-secondary shadow img-fluid"
          src={imgSrc}
        ></img>
      </div>
      <div className=" col-12 ">
        <h4 className="text-dark">{text[0]}</h4>
        <h5 className="text-secondary">{text[1]}</h5>
        <h5 className="pr-1 section-card-blurb ">{text[2]}</h5>
        <h5 className="section-card-blurb-two ">{text[3]}</h5>
      </div>
    </div>
  );
}

function MultiSectionCard(props) {
  let {
    react_icon,
    node_icon,
    mongo_icon,
    bootstrap_icon,
    sectionObject,
  } = props;
  return (
    <div className="container-fluid">
      <div className="row align-items-center justify-content-center border-bottom">
        <div className="col-12 col-md-6 col-lg-3  py-2  ">
          <img alt="" className="img-fluid text-center" src={node_icon}></img>
          <div className="text-dark col-12">
            <h2 className="text-secondary">Node</h2>{" "}
            <span className="text-dark" style={{ fontStyle: "oblique" }}>
              I enjoy using node for backend development. It's simple, very easy
              to develop in, and performant enough for most oridinary use cases.
            </span>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3  h-100 py-2">
          {" "}
          <img alt="" className="img-fluid my-auto" src={react_icon}></img>
          <h2 className="text-secondary col-12">
            {sectionObject["react"].h2}
          </h2>{" "}
          <span className={"col-12 "} style={{ fontStyle: "oblique" }}>
            {sectionObject["react"].span}
          </span>
        </div>
        <div className="col-12 col-md-6 col-lg-3  py-2  h-100 ">
          <img alt="" className="img-fluid text-center" src={mongo_icon}></img>
          <h2 className="text-secondary col-12">
            {sectionObject["mongo"].h2}
          </h2>{" "}
          <span className={"text-dark "} style={{ fontStyle: "oblique" }}>
            {sectionObject["mongo"].span}
          </span>
        </div>
        <div className="col-12 col-md-6 col-lg-3   h-100 py-2">
          <img alt="" className="img-fluid " src={bootstrap_icon}></img>{" "}
          <h2 className="text-secondary col-12">
            {sectionObject["bootstrap"].h2}
          </h2>{" "}
          <span className={"text-dark "} style={{ fontStyle: "oblique" }}>
            {sectionObject["bootstrap"].span}
          </span>
        </div>
      </div>
      <div className="row container-fluid py-4">
        <div className="col-12 row justify-content-start">
          <h2 className="col-12">Honorable Mentions</h2>
          <div className="col-12 col-md-4 offset-md-2">
            {" "}
            <h2>Go</h2> Go is a charming little language. I used it to write a
            small back end. I also hope to use it in the future, and by the
            looks of its' growing usage statistics, that's a possibility. I like
            everything about it. The documentation (amazing), the performance,
            the static type checking, and its' simplicity. The delve debugger is
            also an amazingly effective tool. There's nothing to dislike about
            Go.
          </div>
          <div className="col-12 col-md-4">
            <h2 className="text-success">Vue </h2>
            <p>
              {" "}
              I've used React much more than Vue, but I strongly prefer Vue's
              approach of templates + Javascript over React's raw Javascript +
              JSX imitiation html. What I like most about it that there's a
              clear separation of JS and html in Vue code. Directives also seem
              incredibly effective in code. A conditional render in vue is a
              simple v-if="..." where as in React, it is a ternary expression
              which is much more bothersome. I think as I use this wonderful
              little library with greater frequency, I'll be able to come to
              sound judgement where it stands against React. So, far it's
              prospects are good, and I may very well use Vue as my primary
              state managment library in the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioSection(props) {
  let { features: portfolioProjects } = props;
  return (
    <div className="container-fluid">
      <div className="row  pl-6">
        {portfolioProjects.map((project) => {
          return (
            <React.Fragment>
              <h2 className="portfolio-header border-bottom px-5 col-12 text-dark row ">
                {project[0].title}
              </h2>
              <div className="col-12 col-lg-6">
                {project.map((project_section) => {
                  let retval = null;
                  if (project_section.img === undefined) {
                    retval = (
                      <React.Fragment>
                        <h5 className="col-12 text-danger">
                          {" "}
                          {project_section.h3}
                        </h5>
                        <p
                          className="col-12 text-dark"
                          style={{ fontStyle: "oblique" }}
                        >
                          {" "}
                          {project_section.p}
                        </p>
                      </React.Fragment>
                    );
                  }
                  return retval;
                })}
              </div>
              <div className=" col-12 col-lg-6 ">
                {project[0].img !== undefined ? (
                  <img alt="" className="my-3 img-fluid" src={project[0].img} />
                ) : null}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

function ContactSectionTemporary(props) {
  let { mail_icon } = props;
  return (
    <div className="row">
      <div className="col-12">
        <h2>
          {" "}
          <span className="text-warning">
            E-mail
          </span> hadziabdicberin@gmail{" "}
        </h2>
        <h2>
          LinkedIn:<a href="">Placeholder link doesnt go anywhere.</a>
        </h2>
        <img alt="" src={mail_icon} className="img-fluid" />
      </div>
    </div>
  );
}

function ContactSection(props) {
  let { mail_icon } = props;
  let [email, setEmail] = useState("");
  let [msg, setMsg] = useState("");

  function post() {
    debugger;
    axios
      .post("//xl1p1-z?", JSON.stringify({ email: email, msg: msg }), {
        validateStatus: true,
        timeout: 3000,
      })
      .then(
        (resp) => {
          if (resp.status === 200) {
            setEmail("");
            setMsg("");
          }
        },
        (err) => {}
      );
  }

  return (
    <div className="row py-4 " style={{ backgroundColor: "" }}>
      <div className=" col-12 col-md-6 border-dark border-right">
        <div className="col-12 offset-md-2 col-md-8">
          <div className="form-group">
            <label for="e-mail">e-mail</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              id="e-mail"
              className="form-control"
            />
          </div>
          <div className="col-12"></div>
          <div className=" form-group">
            <label for="text-area">Message</label>
            <textarea
              className="form-control"
              style={{ height: "200px" }}
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="col-12"></div>
          <div className="col-12 ">
            <input
              type="button"
              className="btn btn-success form-control"
              value="Send"
              onClick={() => post()}
            ></input>
          </div>
        </div>
      </div>

      <div className=" col-12 col-md-6">
        <img alt="" className="img-fluid" src={mail_icon}></img>
        <h2 className="text-warning "> Leave me a message.</h2>
        <h1>And, I'll get back to you.</h1>
        <h2>Muchos gracias.</h2>
      </div>
    </div>
  );
}
export {
  SectionHeader,
  SectionCard,
  MultiSectionCard,
  PortfolioSection,
  ContactSection,
  ContactSectionTemporary,
};

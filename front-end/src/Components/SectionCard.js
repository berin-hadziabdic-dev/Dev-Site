import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
function buildLineJSON(
  starting_x,
  starting_y,
  starting_w,
  x_max,
  w_max,
  dx,
  dw,
  fillHex
) {
  return {
    x_max: x_max,
    dx: dx,
    dw: dw,
    starting_x: starting_x,
    starting_y: starting_y,
    starting_w: starting_w,
    w_max: w_max,
    fillHex: fillHex,
    cur_x: starting_x,
    cur_w: starting_w,
  };
}

function paintLine({ starting_y, cur_x, cur_w, fillHex }, context) {
  context.beginPath();
  context.moveTo(cur_x, starting_y);
  context.lineTo(cur_x + cur_w, starting_y);
  context.strokeStyle = fillHex;
  context.lineWidth = "2";
  context.stroke();
}

function buildLineSet() {}

function setLine({
  starting_x,
  x_max,
  w_max,
  width_max,
  cur_x,
  cur_w,
  dx,
  dw,
}) {}

let redLine = buildLineJSON(15, 25, 50, 1000, 200, 3, 3, "#ff0000");
let blackLine = buildLineJSON(200, 50, 100, 1000, 200, 3, 3, "black");
let blueLine = buildLineJSON(120, 40, 50, 120, 130, 2, 3, "#071833");
let redLine_2 = buildLineJSON(15, 65, 50, 400, 700, 3, 3, "#ff0000");

function Canvas(props) {
  let canvasRef = useRef(null);
  let [context, setContext] = useState(null);

  function drawLine(line) {
    context.clearRect(0, 0, 1000, 1000);
    debugger;
    paintLine(redLine, context);
    paintLine(blackLine, context);
    paintLine(blueLine, context);
    paintLine(redLine_2, context);
  }

  useEffect(() => {
    if (canvasRef !== null) {
      setContext(canvasRef.current.getContext("2d"));
    }
  }, [canvasRef]);

  useEffect(() => {
    if (context !== null) {
      drawLine();
    }
  }, [context]);
  return <canvas ref={canvasRef}></canvas>;
}

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
          <span className="display-3 text-danger"> {firstLetter}</span>
          <span className="text-black display-4">{remainingLetters}</span>
        </div>
      </div>
    </div>
  );
}

function SectionCard(props) {
  let { imgSrc, text, cover_bg } = props;
  return (
    <div className="container-fluid text-resize">
      <div
        className="row  justify-content-center py-5"
        style={{ backgroundColor: cover_bg }}
      >
        <div className="my-4 col-12 col-md-2 border-right">
          {" "}
          <img
            alt=""
            className="border border-secondary shadow img-fluid"
            src={imgSrc}
          ></img>
          <br></br>
        </div>
        <div className=" col-12 col-md-6 tiny-text">
          <p className="pr-5 text-dark">{text[0]}</p>
          <p className="text-secondary">{text[1]}</p>
          <p className="pr-1 section-card-blurb tiny-text">{text[2]}</p>
          <p className="section-card-blurb-two tiny-text">{text[3]}</p>
        </div>
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
      <div
        className="row align-items-center justify-content-center border-bottom"
        style={{ backgroundColor: "#26262b" }}
      >
        <div className="col-12 col-md-6 col-lg-3  py-2  ">
          <img alt="" className="img-fluid text-center" src={node_icon}></img>
          <div className="text-dark col-12">
            <h2 className="text-secondary">Node</h2>{" "}
            <span
              className="tiny-text text-white"
              style={{ fontStyle: "oblique" }}
            >
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
          <span
            className={"text-white col-12 tiny-text"}
            style={{ fontStyle: "oblique" }}
          >
            {sectionObject["react"].span}
          </span>
        </div>
        <div className="col-12 col-md-6 col-lg-3  py-2  h-100 ">
          <img alt="" className="img-fluid text-center" src={mongo_icon}></img>
          <br></br>
          <h2 className="text-secondary col-12">
            {sectionObject["mongo"].h2}
          </h2>{" "}
          <span
            className={"text-white tiny-text"}
            style={{ fontStyle: "oblique" }}
          >
            {sectionObject["mongo"].span}
          </span>
        </div>
        <div className="col-12 col-md-6 col-lg-3   h-100 py-2">
          <img alt="" className="img-fluid " src={bootstrap_icon}></img>{" "}
          <br></br>
          <h2 className="text-secondary col-12">
            {sectionObject["bootstrap"].h2}
          </h2>{" "}
          <span
            className={"text-white tiny-text"}
            style={{ fontStyle: "oblique" }}
          >
            {sectionObject["bootstrap"].span}
          </span>
        </div>
      </div>
      <div className="row container-fluid py-4">
        <div className="col-12 row justify-content-start">
          <h2 className="col-12">Honorable Mentions</h2>
          <div className="col-12 col-md-4 offset-md-2">
            {" "}
            <h2>Go</h2> Go is a charming little language.<br></br> I used it to
            write a small back end. <br></br>I also hope to use it in the
            future, and by the looks of its' growing usage statistics, that's a
            possibility. <br></br> I like everything about it.<br></br> The
            documentation (amazing), the performance, the static type checking,{" "}
            <br></br> and its' simplicity. The delve debugger is also an
            amazingly effective tool. <br></br>There's nothing to dislike about
            it.
          </div>
          <div className="col-12 col-md-4">
            <h2 className="text-success">Vue </h2>
            <p>
              {" "}
              I've used React much more than Vue,<br></br> but I strongly prefer
              Vue's approach of templates + Javascript <br></br>over React's
              Javascript + JSX. <br></br> Though there's hacky ways around it,
              mixing JSX <br></br>
              and Javascript can sometimes result in clutter. <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PortfolioSection(props) {
  let { background, title, features: portfolioProjects } = props;
  return (
    <div className="container-fluid">
      <div
        className="row border-top pl-6"
        style={{
          background: background,
        }}
      >
        {portfolioProjects.map((project) => {
          return (
            <React.Fragment>
              <h2 className="display-4 offset-1 col-11 text-dark row">
                {project[0].title}
              </h2>
              <div className="col-12 col-lg-6">
                {project.map((project_section) => {
                  let retval = null;
                  if (project_section.img === undefined) {
                    retval = (
                      <React.Fragment>
                        <h3 className="col-12 text-danger">
                          {" "}
                          {project_section.h3}
                        </h3>
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
    <div className="container-fluid">
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
  Canvas,
  SectionHeader,
  SectionCard,
  MultiSectionCard,
  PortfolioSection,
  ContactSection,
  ContactSectionTemporary,
};

import React from "react";
import bannerText from "./Images/generatedtext.jpg";
function SiteBanner(props) {
  let { bannerImg } = props;
  return (
    <div className="container-fluid banner-container">
      <div className="row  mx-0 px-0">
        <div className="col-8 col-md-6  col-md-8 fade-in">
          <img className="col-12 img-fluid" src={bannerText}></img>
        </div>
        <div className=" col-8 col-md-12"></div>
        <div className="col-12 col-md-6">
          <img alt="" className=" img-fluid" style={{}} src={bannerImg} />
        </div>
      </div>
    </div>
  );
}

export default SiteBanner;

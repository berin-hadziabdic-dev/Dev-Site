import React from "react";
import bannerText from "./Images/generatedtext.jpg";
function SiteBanner(props) {
  let { bannerImg } = props;
  return (
    <div className="row banner-container mx-0 px-0">
      <div className="col-8 col-md-6  col-md-8 fade-in">
        <img className="col-12" src={bannerText}></img>
      </div>
      <div className=" col-8 col-md-12"></div>
      <div className="col-12  w-100 flex-grow">
        <img alt="" className="col-12" style={{}} src={bannerImg} />
      </div>
    </div>
  );
}

export default SiteBanner;

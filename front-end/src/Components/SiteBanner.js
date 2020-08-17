import React from "react";
import bannerText from "./Images/generatedtext.jpg";
function SiteBanner(props) {
  let { bannerImg } = props;
  return (
    <div className="container-fluid banner-container">
      <div className="row  mx-0 px-0">
        <div className="col-12 fade-in">
          <img className="img-fluid" src={bannerText}></img>
        </div>
        <div className=" col-8 col-md-12"></div>
        <div className="col-12">
          <img alt="" className="w-100 img-fluid" style={{}} src={bannerImg} />
        </div>
      </div>
    </div>
  );
}

export default SiteBanner;

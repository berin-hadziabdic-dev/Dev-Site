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
        <div className="col-12 fade-in"></div>

        <img alt="" className="img-fluid" style={{}} src={bannerImg} />
      </div>
    </div>
  );
}

export default SiteBanner;

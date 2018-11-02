import React from "react";
import "./Home.css";

import responsive from "../Images/Home/responsive.png";
import design from "../Images/Home/design.png";
import design2 from "../Images/Home/design2.png";

const Home = () => {
  return (
    <div className="homePage">
      <div className="block responsive">
        <h3 className="blockTitle">Responsive</h3>
        <img
          src={responsive}
          alt="responsive"
          className="blockImg responsiveImg"
        />
        <p className="blockText">Built for any screen size.</p>
      </div>
      <div className="block performance">
        <h3 className="blockTitle">Performant Code</h3>
        <div className="loadingBar">
          <div className="loadingBarInside" />
        </div>
        <img src={design} alt="webpage" className="blockImg performanceImg" />
        <p className="blockText">Fast and efficient architecture.</p>
      </div>
      <div className="block design">
        <div className="side designFront">
          <h3 className="blockTitle">Great Design</h3>
          <img src={design2} alt="design" className="blockImg designImg" />
          <p className="blockText">Stylish and modern aesthetics.</p>
        </div>

        <div className="side designBack">
          <h3 className="backText">
            Great<br />Design
          </h3>
          <img src={design} alt="design" className="designImgBack" />
          <div className="specialDesign" />
        </div>
      </div>
    </div>
  );
};

export default Home;

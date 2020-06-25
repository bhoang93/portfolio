import React from "react";
import "./Home.css";

import responsive from "../Images/Home/responsive.png";
import design from "../Images/Home/design.png";
import design2 from "../Images/Home/design2.png";
import stack from "../Images/Home/stack.svg";

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
        <p className="blockText">Building for any size and device.</p>
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
        <h3 className="blockTitle">Full Stack</h3>
        <img src={stack} alt="design" className="blockImg designImg" />
        <p className="blockText">Ability to work end-to-end.</p>
      </div>
    </div>
  );
};

export default Home;

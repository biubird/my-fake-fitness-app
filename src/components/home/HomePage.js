import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="jumbotron">
    <h1>Welcome To My Fake Fitness App!</h1>
    <p>
      React, Redux and React Router for ultra-responsive and ultra-fit web apps!
    </p>
    <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link>
  </div>
);

export default HomePage;

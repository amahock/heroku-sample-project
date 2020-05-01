import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes/routes";
// import PageNotFoundImage from "../Images/PageNotFoundImage.png";

const NotFoundPage = () => {
  return (
    <div>
      {/* <img src={PageNotFoundImage} alt="Page Not Found" /> */}
      <p style={{ textAlign: "center" }}> Page Not Found </p>
      <p style={{ textAlign: "center" }}>
        <Link to={routes.home}>Go to Home </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;

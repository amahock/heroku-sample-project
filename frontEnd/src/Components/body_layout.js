import React, { Fragment } from "react";
import {Route,Switch} from "react-router-dom";
import LeftSideBar from "../Pages/LeftSideBar";
import IntroPage from "../Pages/IntroPage";
import HomePage from "../Pages/HomePage";
// import "./styles.css";

const BodyLayout = ()=> {
  return (
    <Fragment>
      <div className="row">
        <div className="column-side-left">
          <LeftSideBar />
        </div>

        <div className="column-middle">
          {/* {<mainContent />} */}
          <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/intro">
          <IntroPage />
        </Route>
        {/* <Route path="/variables-in-java">
          <VariablesInJava />
         </Route> */}
      </Switch>
        </div>


        <div className="column-side-right" />
      </div>
    </Fragment>
  );
};

export default BodyLayout;

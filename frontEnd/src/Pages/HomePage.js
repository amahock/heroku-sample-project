import React, { Fragment, useContext } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { userContext } from "../Context/context";
// import LeftSideBar from "../Pages/LeftSideBar";
// import IntroPage from "../Pages/IntroPage";
// import "./styles.css";

const HomePage = props => {
  // const location = useLocation();
  const user = useContext(userContext);
  const history = useHistory();
  // // console.log(usrname);
  // console.log("in home page "+props.state);
  // if (user.isLoggedIn) {
  //   console.log(
  //     "In home page history location " + history.location.state.usrname
  //   );
  // }
  return (
    <Fragment>
      {/* <div className="row">
      <div className="column-side-left">
        <LeftSideBar />
      </div> */}

      <div className="column-middle">
        {/* {user.isLoggedIn ? (
          <h2>Welcome {history.location.state.usrname}</h2>
        ) : (
          <h2>Welcome </h2>
        )} */}
        <h2>Welcome</h2>
        <p> Welcome to learn Java!!!!</p>
      </div>

      {/* <div className="column-side-right">
       </div>
     </div> */}
    </Fragment>
  );
};

export default HomePage;

import React, { useEffect, useState, useContext } from "react";
import "./styles.css";
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import NavHeader from "./Components/NavHeader";
import networkRequests from "./services/networkRequests";
// import BodyLayout from "./Components/body_layout";
import IntroPage from "./Pages/IntroPage";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import LeftSideBar from "./Pages/LeftSideBar";
import FeedbackPage from "./Pages/FeedbackPage";
// import VariablesInJava from "./Pages/VariablesInJava";
import { userContext } from "./Context/context";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage";
import { routes } from "./routes/routes";
import ResetPasswordPage from "./Pages/ResetPasswordPage";
import NotFoundPage from "./Pages/NotFoundPage";

const App = () => {
  const location = useLocation();
  const history = useHistory();
  // const user = useContext(userContext);
  console.log(location.usrname);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (location.pathname === "/") {
      history.replace("/home");
    }

    networkRequests("/user/isLoggedIn")
      .then(response => {
        if (response.loggedInStatus) {
          console.log("Inside the /user/isLoggedIn page then loop" + response);
          console.log("isloggedin value is   :   " + isLoggedIn);
          setIsLoggedIn(true);
          console.log("isloggedin value is after change  :   " + isLoggedIn);
          // user.validUser = true;
        } else {
          setIsLoggedIn(false);
        }
      })
      .catch(error => {
        console.log("isloggedin catch part" + error);
        setIsLoggedIn(false);
        // user.validUser = false;
      });
  }, []);
  return (
    <userContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="App">
        <NavHeader />

        <div className="row">
          <div className="column-side-left" />

          <div className="column-middle">
            <br />
            <br />
            <Switch>
              <Route path={routes.home}>
                <HomePage />
              </Route>
              <Route path={routes.intro}>
                <IntroPage />
              </Route>
              <Route path={routes.forgotPassword}>
                <ForgotPasswordPage />
              </Route>
              <Route path={routes.login}>
                <LoginPage />
              </Route>
              <Route path={routes.signUp}>
                <SignupPage />
              </Route>
              <Route path={routes.resetPassword}>
                <ResetPasswordPage />
              </Route>
              <Route path={routes.feedback}>
                <FeedbackPage />
              </Route>
              {/* <Redirect to="/home" /> */}
              <Route path="*">
                <NotFoundPage />
              </Route>
            </Switch>
          </div>

          <div className="column-side-right">
            <LeftSideBar />
          </div>
        </div>
      </div>
    </userContext.Provider>
  );
};

export default App;

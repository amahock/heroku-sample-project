import React, { useState, useContext, Fragment } from "react";
import "../styles.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { useHistory } from "react-router-dom";
import { userContext } from "../Context/context";
import { routes } from "../routes/routes";

const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("in Navheader:" + isOpen);
  const history = useHistory();
  const user = useContext(userContext);
  const toggle = () => {
    setIsOpen(!isOpen);
    if (isOpen) console.log("isOpen value :" + isOpen);
    else console.log("isOpen value is false : " + isOpen);
  };
  const logout = event => {
    event.preventDefault();
    user.setIsLoggedIn(false);
    localStorage.removeItem("jwtToken");
    history.push(routes.home);
  };
  return (
    <div>
      <Navbar light expand="md" className="nav-bar-x">
        <NavbarBrand href={routes.home}>Learn Java</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href={routes.components}>Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href={routes.gitHub}>GitHub</NavLink>
            </NavItem>
          </Nav>
          <FormGroup>
            {/* <Label for="exampleSearch">Search</Label> */}
            <Input
              type="search"
              name="search"
              id="exampleSearch"
              placeholder="search"
            />
          </FormGroup>
          <NavLink href={routes.contactUs}>Contact us</NavLink>

          {user.isLoggedIn ? (
            <Fragment>
              <NavLink href="" onClick={logout}>
                Logout
              </NavLink>
              <NavLink href={routes.feedback}>Feedback</NavLink>
            </Fragment>
          ) : (
            <>
              <NavLink href={routes.login}>Login</NavLink>
              <NavLink href={routes.signUp}>SignUp</NavLink>
            </>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavHeader;

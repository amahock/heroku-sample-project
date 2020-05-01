import React, { useState, useContext, Fragment } from "react";
// import "../styles/loginStyle.css";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";
import { useHistory } from "react-router-dom";
import networkRequests from "../services/networkRequests";
import { userContext } from "../Context/context";
import validateForm from "../Components/FormValidation";

const SignupPage = props => {
  // console.log("Entered in signup page");

  const errormsg = {
      firstnameErr : "",
      lastnameErr : "",
      phonemunberErr : "",
      emailErr : "",
      passwordErr : ""
  };

  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const [phonenumber, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isValidForm,setIsValidForm] = useState(true);

  const [firstnameErr, setFirstNameErr] = useState("");
  const [lastnameErr, setLastNameErr] = useState("");
  const [phonenumberErr, setPhoneNumberErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const user = useContext(userContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  const updateFirstName = event => setFirstName(event.target.value);
  const updateLastName = event => setLastName(event.target.value);
  const updatePhoneNumber = event => setPhoneNumber(event.target.value);
  const updateEmail = event => setEmail(event.target.value);
  const updatePassword = event => setPassword(event.target.value);
  

  const formSubmit = event => {
    event.preventDefault();
    console.log(email);
    const validationResult = validateForm(email,password,firstname,lastname,phonenumber,errormsg);
    console.log(validationResult);
    if (validationResult.formIsValid === true){
        networkRequests("/user/Signup", "POST", { email, password ,firstname,lastname,phonenumber})
          .then(response => {
            console.log(response.userStatus);
            if(response.userStatus === "UAP"){
              setEmailErr("*User already present");
            }else{
              localStorage.setItem("jwtToken", response.jwtToken);
              user.setIsLoggedIn(true);
              history.push("/home");
            }
          })
          .catch(error => {
            user.setIsLoggedIn(false);
            console.error(error);
          });
    } else {
      console.log("validation error occured");
      // errormsg.firstnameErr = validationResult.errors.firstnameErr;
      // errormsg.lastnameErr = validationResult.errors.lastnameErr;
      // errormsg.phonemunberErr = validationResult.errors.phonenumberErr;
      // errormsg.emailErr = validationResult.errors.emailErr;
      // errormsg.passwordErr = validationResult.errors.passwordErr;
      console.log(errormsg);
      setFirstNameErr(errormsg.firstnameErr);
      setLastNameErr(errormsg.lastnameErr);
      setEmailErr(errormsg.emailErr);
      setPhoneNumberErr(errormsg.phonemunberErr);
      setPasswordErr(errormsg.passwordErr);
      setIsValidForm(false);
    }
  };
  return (
    <Fragment>
      <h5 class="card-title text-center">Sign Up</h5>
      <Form  onSubmit = {formSubmit}>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            First Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="firstname"
              id="examplelastname"
              placeholder="Enter your First name"
              onChange = {updateFirstName}
            />
          </Col>
        </FormGroup>
        <div className="errorMsg">{firstnameErr}</div>
        <br/>
        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Last Name
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="lastname"
              id="examplelastname"
              placeholder="Enter your Last name"
              onChange = {updateLastName}
            />
          </Col>
        </FormGroup>
        <div className="errorMsg">{lastnameErr}</div>
        <br />
        <FormGroup row>
          <Label for="exampleEmail" sm={2}>
            Email
          </Label>
          <Col sm={10}>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter your email" 
              onChange = {updateEmail}
            />
          </Col>
        </FormGroup>
        <div className="errorMsg">{emailErr}</div>
        <br />
        <FormGroup row>
          <Label for="exampleNumber" sm={2}>
            Number
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="phonenumber"
              id="exampleNumber"
              placeholder="Enter your Phone number"
              onChange = {updatePhoneNumber}
            />
          </Col>
        </FormGroup>
        <div className="errorMsg">{phonenumberErr}</div>
        <br />
        <FormGroup row>
          <Label for="examplePassword" sm={2}>
            Password
          </Label>
          <Col sm={10}>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter your password"
              onChange = {updatePassword}
            />
          </Col>
        </FormGroup>
        <div className="errorMsg">{passwordErr}</div>
        <br />
        <Button>Submit</Button>
      </Form>
    </Fragment>
  );
};

export default SignupPage;

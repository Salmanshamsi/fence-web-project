import React, { useEffect, useRef, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import SecurityUpdateWarningIcon from "@mui/icons-material/SecurityUpdateWarning";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PeopleIcon from "@mui/icons-material/People";
import AndroidIcon from "@mui/icons-material/Android";
import AppleIcon from "@mui/icons-material/Apple";
import HandshakeIcon from "@mui/icons-material/Handshake";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import MenuIcon from '@mui/icons-material/Menu';
import YouTubeIcon from "@mui/icons-material/YouTube";

import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [personalandBusiness, setPersonalandBusiness] = useState(true);
    const [userDetails,setUserDetails] = useState();
    const [enabledName,setEnabledName] = useState(false);
    const handleBusiness = () => {
      setPersonalandBusiness(false);
    };

  const personalSelect = () => {
    setPersonalandBusiness(true);
  };

  const navigate = useNavigate();

  const [signUpState, setSignUpState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [signInState, setSignInState] = useState({
    email: "",
    password: "",
  });
  const [signInError, setSignInError] = useState("");
  const [signUpError, setSignUpError] = useState("");

  let name, value;

  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;
    setSignUpState({ ...signUpState, [name]: value });
  };

  const handleSignInChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setSignInState({ ...signInState, [name]: value });
  };

  const handleSignIn = async () => {
    const { email, password } = signInState;

    if (!email || !password) {
      setSignInError("Please fill in all the required fields");
    } else if (!isEmailValid(email)) {
      setSignInError("Please enter a valid email address");
    } else if (!isStrongPassword(password)) {
      setSignInError(
        "Password must be at least 8 characters long and meet the strength criteria."
      );
    } else {
        const response = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email,
              password,
            }),
          });
          
          const data = await response.json();
          if (data.status === "ok") {
            alert("Sign In Successfully");
            navigate("/stores ")
            window.localStorage.setItem("token" , data.data)
            window.localStorage.setItem("loggedIn" , true)
          } else {
            const errorData = await res.json();
            console.error(errorData.message); // Log the error message from the server
            // You can display an error message to the user or handle the error as needed.
          }
          
  
    }
  };

  const userSignUp = async () => {
    const { firstname, lastname, email, password } = signUpState;

    if (!firstname || !lastname || !email || !password) {
      setSignUpError("Please fill in all the required fields");
    } else if (!isEmailValid(email)) {
      setSignUpError("Please enter a valid email address");
    } else if (!isStrongPassword(password)) {
      setSignUpError(
        "Password must be at least 8 characters long and meet the strength criteria."
      );
    } else {
        const res = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstname,
              lastname,
              email,
              password,
            }),
          });
          
          const data = await res.json();

          if (data) {
            // HTTP response status code is in the range 200-299 (successful)
            alert("User Created Successfully");
            setToggle(false);
          } else {
            // Handle the error, e.g., display an error message
            const errorData = await res.json();
            console.error(errorData.message); // Log the error message from the server
            // You can display an error message to the user or handle the error as needed.
          }
          
    }
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isStrongPassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!*_])[A-Za-z\d@#$%^&!*_]{8,}$/;
    return passwordRegex.test(password);
  };

  const [toggle, setToggle] = useState(true);

  const goToSignIn = () => {
    setToggle(false);
  };

  const createAnAccount = () => {
    setToggle(true);
  };


  



  return (
    <>
     <div className="auth">
     <div className="accountheader-container">
        <div className="accountheader">
          <div className="twodivcontainer">
            <div className="firstaccountheaderdiv">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.N3-_hRk0071NKuApnZH4oAHaBl&pid=Api&P=0&h=220"
                alt=""
              />
              <p className="selectstore">Select Your Store</p>
              <select name="deliver" id="deliver">
                <option value="Deliver to">Deliver to</option>
                <option value="first">first</option>
                <option value="second">second</option>
                <option value="third">third</option>
                <option value="fourth">fourth</option>
              </select>
            </div>
            <div className="secondaccountheaderdiv">
              <select name="credit" id="credit">
                <option value="Credit Center">Credit Center</option>
                <option value="first">first</option>
                <option value="second">second</option>
                <option value="third">third</option>
                <option value="fourth">fourth</option>
              </select>

              <select name="help" id="help">
                <option value="help">Help</option>
                <option value="first">first</option>
                <option value="second">second</option>
                <option value="third">third</option>
                <option value="fourth">fourth</option>
              </select>

              <select name="Gifting" id="Gifting">
                <option value="Gifting">Gifting</option>
                <option value="first">first</option>
                <option value="second">second</option>
                <option value="third">third</option>
                <option value="fourth">fourth</option>
              </select>

              <p className="order-track">Order Tracker</p>
              <p className="rebate-center">Rebate Center</p>
            </div>
          </div>
        </div>
      </div>

      <div className="accountnavcontainer">
        <div className="accountnav">
          <div className="accountnavcenter">
            <div className="mainaccountnav">
              <div className="hamburgerbox">
              <MenuIcon sx={{fontSize:"30px" , color:"#fff"}}/>
              </div>
             <div className="hidebox">
             <select name="department" id="department">
                <option value="Department">Department</option>
              </select>

              <select name="Project Center" id="ProjectCenter">
                <option value="Project Center">Project Center</option>
              </select>

              <select name="Weekly Ad" id="WeeklyAd">
                <option value="Weekly Ad">Weekly Ad</option>
              </select>
             </div>
              <div className="divandinput">
                <div className="departmentsall">All Departments</div>
                <input
                  type="text"
                  placeholder="Enter SKU , Model # or Keyword"
                  className="headerInput"
                />
              </div>
              <select name="Sign In" id="SignIn">
                <option value="Sign In">Sign In</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="createaccountcontainer">
        <div className="twomaindivsincreateaccount">
          <div className="firstcreateaccount">
            <div className="accountbox">
              <div className="acconthead">
                <button className="signinbtn" onClick={goToSignIn}>
                  Sign In
                </button>
                <button className="createaccounmtbtn" onClick={createAnAccount}>
                  Create Account
                </button>
              </div>
              {toggle ?   <div>
                         <p className="MENARDS_Text">Create a MENARDS.COM® Account</p>
                 <p className="requiredfield">* Required Fields</p>

                <div className="accounttype">
                     <p className="accountypeheading">* Account Type</p>
                     <input
                       type="radio"
                       name="account"
                       value="Personal"
                      className="aaccountinputs"
                       checked={personalandBusiness}
                       onChange={personalSelect}
                     />
                    <span className="personal">Personal</span>
                     <input
                       type="radio"
                       name="account"
                       value="Business"
                       className="aaccountinputs aaccountinputtwo"
                       checked={!personalandBusiness}
                       onChange={handleBusiness}
                     />
                     <span className="business">Business</span>
                   </div>
               <div className="personalaccountform">
                      <div className="firsttwoinputs">
                        <div className="firstinput">
                          <label htmlFor="firstname" className="firstnamelabel">
                            First Name
                          </label>
                          <input
                            type="text"
                            name="firstname"
                            id=""
                            className="firstnamei"
                            value={signUpState.firstname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="secondinput">
                          <label htmlFor="lastname" className="lastnamelabel">
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="lastname"
                            id=""
                            className="lastnamei"
                            value={signUpState.lastname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="thirdinputs">
                        <label htmlFor="Email Adress" className="emaillabel">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={signUpState.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="fourthinput">
                        <label htmlFor="password" className="passwordlabel">
                          Create a Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          value={signUpState.password}
                          onChange={handleChange}
                        />
                        {signUpError && (
                          <p className="error-messagesignup">{signUpError}</p>
                        )}
                      </div>
                      <div className="createaccountbutton">
                        <button onClick={userSignUp}>Create Account</button>
                      </div>
                    </div>
              </div>
       
            
                    
                    :      <div className="signinaccountcontainer">
                  <div className="signinaccount">
                    <p className="signinaccountfirstheading">
                      Sign In To Your Account
                    </p>
                    <p className="pleasesignIn">
                      Please sign in with your MENARDS.COM® account or create an
                      account to continue.
                    </p>
                    <p className="requiredfield">* Required Fields</p>
                    <div className="thirdinputs">
                      <label htmlFor="email" className="emaillabel">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={signInState.email}
                        onChange={handleSignInChange}
                      />
                    </div>
                    <div className="fourthinput">
                      <label htmlFor="password" className="passwordlabel">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        value={signInState.password}
                        onChange={handleSignInChange}
                      />
                    </div>
                    {signInError && (
                      <p className="error-message">{signInError}</p>
                    )}
                    <div className="sign-in-account-btn">
                      <button onClick={handleSignIn}>Sign In</button>
                    </div>
                  </div>
                </div>}
            </div>
          </div>

          <div className="secondcreateaccount">
            <div className="firstpersonalized">
              <PersonIcon sx={{ fontSize: "50px" }} />
              <div className="firstpersonalizedinner">
                <h2>Personalized</h2>
                <p>
                  View your order history, track orders, and create wish lists
                  at any time.
                </p>
              </div>
            </div>

            <div className="secondsecure">
              <HttpsIcon sx={{ fontSize: "50px" }} />
              <div className="secondsecureinner">
                <h2>Secure</h2>
                <p>
                  We use the highest encryption level currently available so you
                  can feel safe and secure when placing your orders online.
                </p>
              </div>
            </div>
            <div className="thirdConvenient">
              <SecurityUpdateWarningIcon sx={{ fontSize: "50px" }} />
              <div className="thirdConvenientinner">
                <h2>Convenient</h2>
                <p>
                  Use your MENARDS.COM® account in-store, at home, and on the go
                  with the Menards app for orders, estimates, and designs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="helpcentercontainer">
        <div className="helpcenter">
          <div className="helpcenterbox">
            <div className="flexone">
              <HelpOutlineIcon sx={{ fontSize: "40px" }} id="hideIcons"/>
              <p className="firstpara">Help Center</p>
            </div>
            <div className="flextwo">
              <MailOutlineIcon sx={{ fontSize: "40px" }}id="hideIcons" />
              <p >Sign up & Save BIG</p>
            </div>
            <div className="flexthree">
              <PeopleIcon sx={{ fontSize: "40px" }} id="hideIcons"/>
              <p >Careers</p>
            </div>
            <div className="flexfour">
              <AndroidIcon sx={{ fontSize: "40px" }} id="hideIcons"/>
              <AppleIcon sx={{ fontSize: "40px" }} id="hideIcons"/>
              <p >Use our App!</p>
            </div>
            <div className="flexfive">
              <HandshakeIcon sx={{ fontSize: "40px" }} id="hideIcons"/>
              <p > Sell to Us!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="affiliate-website-container">
        <div className="affilliatewebsite">
          <div className="firstaffiliatebox">
            <p>
              <b className="boldHeadings">Affiliated Websites</b>
            </p>
            <p className="info">Midwest Manufacturing</p>
            <p className="info">Real Estate</p>
            <p className="info">Nail Plant</p>
            <p className="info">Menards® Transportation</p>
            <p className="info">Menards® Self Storage</p>
          </div>
          <div className="secondaffiliatebox">
            <p>
              <b className="boldHeadings">Business Opportunities</b>
            </p>
            <p className="info">Contractor Hauling</p>
            <p className="info">Suppliers & Service Providers</p>
          </div>
          <div className="thirdaffiliatebox">
            <p>
              <b className="boldHeadings">Company Information</b>
            </p>
            <p className="info">About Us</p>
            <p className="info">Menards Credit Programs</p>
            <p className="info">Site Map</p>
          </div>
        </div>
      </div>

      <div className="icons-cotainer">
        <div className="iconsbox">
          <FacebookSharpIcon sx={{ fontSize: "35px" }} />
          <TwitterIcon sx={{ fontSize: "35px" }} />
          <InstagramIcon sx={{ fontSize: "35px" }} />
          <PinterestIcon sx={{ fontSize: "35px" }} />
          <YouTubeIcon sx={{ fontSize: "35px" }} />
        </div>
      </div>

      <div className="flinks-container">
        <div className="f-links">
          <a href="#">About</a>
          <a href="#">Site Map</a>
          <a href="#">Accessibility Statement</a>
          <a href="#">Privacy Statement</a>
          <a href="#">Terms</a>
          <a href="#">Security</a>
        </div>
      </div>

      <div className="second-flinks-container">
        <div className="second-f-links">
          <a href="#">
            California Transparency in Supply Chains Act Disclosure
          </a>
          <a href="#">California Privacy Rights</a>
          <a href="#">Your Privacy Choices</a>
          <a href="#">©2004-2023 Menard, Inc. All Rights Reserved.</a>
        </div>
      </div>

      <div className="footerlogo">
        <img
          src="https://tse1.mm.bing.net/th?id=OIP.N3-_hRk0071NKuApnZH4oAHaBl&pid=Api&P=0&h=220"
          alt=""
        />
      </div>
     </div>
    </>
  );
};

export default Login;
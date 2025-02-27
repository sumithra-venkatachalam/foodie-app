import "./Signup.css";
import common from "../../assets/restaurant-image.jpg";
import logo from "../../assets/logo.jpg";
import { useNavigate} from "react-router-dom";
import {useState} from "react";

function Signup() {

    const usernameFunc = (e) => {
        setSignupUsername(e.target.value);
    }

    const emailAddressFunc = (e) => {
        setSignupEmail(e.target.value);
    }

    const addressFunc = (e) => {
        setSignupAddress(e.target.value);
    }

    const passwordFunc = (e) => {
        setSignupPassword(e.target.value);
    }

    const confirmPasswordFunc = (e) => {
        setSignupConfirmPassword(e.target.value);
    }

    const [userNameError, setUserNameError] = useState("");
    const [emailAddressError, setEmailAddressError] = useState("");
    const [addressError, setAddressError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [signupUsername, setSignupUsername] = useState("");
    const [signupEmail, setSignupEmail] = useState("");
    const [signupAddress, setSignupAddress] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [signupConfirmPassword, setSignupConfirmPassword] = useState("");
    
    const navigate = useNavigate();

    const handleSignup = () => {

        let hasError = false

        if(signupUsername.length === 0) {
            hasError = true;
            setUserNameError("UserName is required");
        }
            
        else if (signupUsername.length < 5) {
            hasError = true;
            setUserNameError("Username characters must be greater than 5 characters");
        }
        else if (signupUsername.length > 25) {
            hasError = true;
            setUserNameError("Username characters should be less than 25 characters");
        }

        if (signupPassword.length === 0) {
            hasError = true
            setPasswordError("Password is required")
        }
        else if (signupPassword.length < 5) {
            hasError = true
            setPasswordError("Password should have minimum of 5 characters")
        }
        else if (signupPassword.length > 20) {
            hasError = true
            setPasswordError("Password should not exceed 20 characters")
        }
        if (signupConfirmPassword.length === 0) {
            hasError = true
            setConfirmPasswordError("Confirm password is required")
        }
        else if (signupPassword !== signupConfirmPassword ) {
            hasError = true;
            setConfirmPasswordError("New password and confirm password should be same")
        }
        if (signupAddress.length === 0) {
            hasError = true
            setAddressError("Address is required")
        }
        if (signupEmail.length === 0) {
            hasError = true
            setEmailAddressError("Email Address is required")
        }
        else if (signupEmail.length < 5) {
            hasError = true
            setEmailAddressError("Email address should have minimum of 5 characters")
        }
        else if (signupEmail.length > 20) {
            hasError = true
            setEmailAddressError("Email address should not exceed 20 characters")
        }

        if (hasError === false)
        navigate("/restaurant-listing")
    }

    const goToLogin = () => {
        navigate("/")
    }



    return(
        <div className="wholePage"> 
        <div className="leftImage"> 
            <img src={common} alt="" />
        </div>
        <div className="logoImage">
            <img src={logo} alt="" />
            <div className="rightText">
            <h1>Sign Up</h1>
            <div className="signupInput">
                <input type="text" placeholder="Username" onChange={usernameFunc} required/>
                <span className="signupErrorMessage">{userNameError}</span>
            </div>
            <div className="signupInput">
                 <input type="email" placeholder="E-mail Id" onChange={emailAddressFunc} required /> 
                 <span className="signupErrorMessage">{emailAddressError}</span>
            </div>
            <div className="signupInput">
                 <input type="textarea" placeholder="Address" onChange={addressFunc} required/>
                <span className="signupErrorMessage">{addressError}</span>
            </div>
            <div className="signupInput">
                <input type="password" placeholder="password" onChange={passwordFunc} required />
                <span className="signupErrorMessage">{passwordError}</span>
            </div>
            <div className="signupInput">
               <input type="password" placeholder="Confirm Password" onChange={confirmPasswordFunc} required/>
               <span className="signupErrorMessage">{confirmPasswordError}</span>
            </div>
            <button className="signupButton" onClick={handleSignup}>SIGN UP</button>
            <div className="bottomText">
            <span>Already have an account?</span>
            <span className="log" onClick={goToLogin}>Login</span>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Signup;

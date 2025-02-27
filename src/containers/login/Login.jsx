import {useState} from "react";
import restaurantImage from "../../assets/restaurant-image.jpg";
import logo from "../../assets/logo.jpg"
import "./Login.css";
import { useNavigate } from "react-router-dom";
import usernameContext from "../../context/UsernameContext";
import {useContext} from "react";

function Login() { 
    // const [userName , setUserName] = useState();
    const {username, setUsername} = useContext(usernameContext);
    const [password, setPassword] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const nameFunc = (e) => {
        setUsername(e.target.value) 
        console.log(username) 
    }

    const passwordFunc = (e) => {
        setPassword(e.target.value)
        console.log(password)
    }

    const handleSignin = () => {

        let hasError = false

        if(username.length === 0) {
            hasError = true;
            setUserNameError("UserName is required");
        }
            
        else if (username.length < 5) {
            hasError = true;
            setUserNameError("Username characters must be greater than 5 characters");
        }
        else if (username.length > 25) {
            hasError = true;
            setUserNameError("Username characters should be less than 25 characters");
        }

        if (password.length === 0) {
            hasError = true
            setPasswordError("Password is required")
        }
        else if (password.length < 5) {
            hasError = true
            setPasswordError("Password should have minimum of 5 characters")
        }
        else if (password.length > 20) {
            hasError = true
            setPasswordError("Password should not exceed 20 characters")
        }
        if (hasError === false)
            navigate("/restaurant-listing")
    }
 
    const goToSignup = () => {
        navigate("/signup")
    }

    return(
        <div className="entirePage">
            <div className="leftImage">
                <img src={restaurantImage} alt="Restaurant login image" />
            </div>
            <div className="rightSide">
                <img src={logo} alt="Logo image" />
                <h1>Sign In</h1>
                <div className="center">
                 <div className="inputAndError1">   
                <input 
                type="text"
                onChange={nameFunc}
                 placeholder="Username" />
                 <span className="errorMessage">{userNameError}</span>
                 </div>
                 <div className="inputAndError2">
                <input 
                type="password" 
                onChange={passwordFunc}
                placeholder="Password" />
                <span className="errorMessage">{passwordError}</span>  
                </div>
                <button className="signinButton" onClick={handleSignin}>SIGN IN</button>
                </div>
                <div className="forgot"> 
                <span className="colors2">Forgot Password?</span>
                <span className="colors">Click here</span>
                </div>
                <div className="account">
                <span className="colors2">Don't have an account?</span>
                <span className="colors1" onClick={goToSignup}>Sign up</span>
                </div>
            </div>
        </div>
    )
}
export default Login;
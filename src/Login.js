import { React, useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "./FBase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = (e) => {
        e.preventDefault();
        //some fancy firebase login
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                //signed in
                const user = userCredential.user;
                navigate('/')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }
    const register = (e) => {
        e.preventDefault();
        //firebase register
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                //successlly creted new user
                if (auth) {
                    navigate('/');
                }
                console.log(userCredential)
            })
            .catch(error => alert(error.message));
    }
    return (
        <div className="login">
            <NavLink to="/">
                <img
                    className="login__logo"
                    src="https://brandlogovector.com/wp-content/uploads/2020/08/Amazon-Logo.png"
                />
            </NavLink>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type="text" />

                    <h5>Password</h5>
                    <input
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)} />
                    <button
                        type="submit"
                        className="login__signInButton"
                        onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to AMAZON FAKE CLONE Contitions & Sale. Please
                    see our Privacy Notice and our Cookies Notice and our Interest-Based Ads Notice
                </p>
                <button className="login__registerButton" onClick={register}>Create Amazon Account</button>
            </div>
        </div >
    )
}

export default Login;
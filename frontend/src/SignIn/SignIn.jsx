import React, { useContext, useState } from 'react'
import "./SignIn.css"
import axios from "axios";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const SignIn = ({ setShowLogin }) => {

    const [state, setState] = useState("Sign up");
    const [error, setError] = useState("")
    const navigate = useNavigate();
    const { url, setToken, user, setUser } = useContext(AppContext);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({...prevData, [name]:value}));
    }

    const onLogin = async (event) => {
        event.preventDefault();
        const newUrl = state === "Sign up" ? `${url}/api/user/signup` : `${url}/api/user/login`;
        
        try {
            
            const response = await axios.post(newUrl, data);
            if(response.data.success){
                setToken(response.data.token);
                setUser(response.data.user);
                localStorage.setItem("token", response.data.token);
                if(response.data.user){
                    localStorage.setItem("user", JSON.stringify(response.data.user));
                } else {
                    console.error("user data is undefined");
                }
                console.log(data)
                setShowLogin(false);
                navigate('/')
            } else {
                setError(response.data.message) 
            }

        } catch (error) {
            console.log("Error", error)
            setError("Something Went Wrong, Please Try Again")
        }
    }

    return (
        <>
            <div className="modal-overlay">
                <div className="signup-container">
                    <div className="inside-signup-container">
                        <div className="signup-header-div">
                            <div className="signup-header">
                                <h3><strong>{state === "Sign up" ? "Create Account" : "Login"}</strong></h3>
                                <p>{state === "Sign up" ? "Please sign up to book an appointment." : "Please login to book an appointment."}</p>
                            </div>
                            <div className="cross-icon-signup-div">
                                <i onClick={() => setShowLogin(false)} className="cross-icon-signup fa-solid fa-x"></i>
                            </div>
                        </div>

                        <form onSubmit={onLogin}>
                            {state === "Sign up" && (
                                <>
                                    <label htmlFor="inputName" className="form-label">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={onChangeHandler}
                                        className="form-control"
                                        id="inputName"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </>
                            )}

                            <label htmlFor="inputEmail" className="form-label">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={onChangeHandler}
                                className={`form-control mb-3 ${error ? "error-styling" : ""}`}
                                id="inputEmail"
                                placeholder="name@example.com"
                                required
                            />

                            <label htmlFor="inputPassword" className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={onChangeHandler}
                                className="form-control"
                                id="inputPassword"
                                required
                            />

                            <div className="error-handling">
                                {error && <p className="error-message">{error}</p>}
                            </div>

                            <div className="submit-btn-div mb-4">
                                <button type="submit">{state === "Sign up" ? "Sign up" : "Login"}</button>
                            </div>
                        </form>

                        {state === "Sign up" ? (
                            <div className="already-account-div">
                                <p>Already have an account? <span onClick={() => setState("Login")}>Login here</span></p>
                            </div>
                        ) : (
                            <div className="already-account-div">
                                <p>Don't have an account? <span onClick={() => setState("Sign up")}>Sign up here</span></p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn

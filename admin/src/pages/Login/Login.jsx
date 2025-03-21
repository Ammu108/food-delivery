import React, { useContext, useState } from 'react'
import "./Login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AdminContext } from '../../context/AdminContext';

const Login = () => {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const { backendUrl, setAToken } = useContext(AdminContext);

    const onSubmitHandler = async (event) => {

        event.preventDefault();

        try {

            const { data } = await axios.post(backendUrl + `/api/admin/login`, { email, password });

            if (data.success) {
                localStorage.setItem("aToken", data.token);
                setAToken(data.token);
                navigate('/dashboard')
            } else {
                toast.error(data.message);
            }


        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className='admin-login-container'>
                <div className='admin-login-box'>
                    <form onSubmit={onSubmitHandler}>
                        <div className='admin-login-form-header'>
                            <p><span>Admin </span>Login</p>
                        </div>
                        <hr className='admin-form-header-bar mt-2 mb-4' />
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" id="admin_email" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="admin_password" placeholder="password" />
                        </div>
                        {error && (
                            <div className='admin-form-error-div mb-3'>
                                <p>Invalid Credentials</p>
                            </div>
                        )}
                        <div className="mb-3">
                            <button className='admin_login_btn'>Login</button>
                        </div>
                        <div className='switch-panel-div'>
                            <p>Admin Login? <span onClick={() => setState('Admin')}>click here</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login

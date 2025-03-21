import React, { useContext, useEffect, useState } from 'react'
import "./AllUsers.css"
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';

const AllUsers = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { getAllUsers, allUsers, backendUrl, aToken } = useContext(AdminContext);

    const handleGoBack = () => {
        navigate("/dashboard")
    }

    const handleDelete = async (userId) => {
        if (!window.confirm("Are you sure you want to delete this user?")) return;
        try {
            const response = await axios.delete(backendUrl + "/api/user/delete-user", { headers: { aToken }, data: { id: userId } })
            if (response.data.success) {
                toast.success("User Deleted Successfully.")
                navigate("/dashboard")
            } else {
                toast.error("Failed To Delete The User.")
            }
        } catch (error) {
            console.log(error)
            toast.error(error);
        }
    }

    useEffect(() => {
        if (aToken) {
            setLoading(true);
            getAllUsers()
        }
        setLoading(false)
    }, [aToken])

    return (
        <>
            <div className='admin-all-users-container'>
                <div className='inside-admin-all-users-container'>
                    <div className='back-btn-div'>
                        <button className='back-btn' onClick={handleGoBack}><i class="fa-solid fa-arrow-left"></i>Back</button>
                    </div>
                    {loading ? (
                        <p className="loading-text">Loading users...</p>
                    ) : allUsers.length > 0 ? (
                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th className='all-users-name'>Name</th>
                                    <th>Email</th>
                                    <th className='all-user-actions-btn'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allUsers.map((user, index) => (
                                    <tr key={user._id}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <button onClick={() => handleDelete(user._id)} className="delete-button">
                                                <i className="fa-solid fa-trash"></i> Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="no-users-text">No users found.</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default AllUsers

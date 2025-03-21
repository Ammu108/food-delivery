import React from 'react'
import "./SideBar.css"
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <div className='admin-sidebar-container'>
                <div className='admin-sidebar-inside-container'>

                    <div className='sidebar-items-div'>
                        <ul className='sidebar-items-ul'>
                            <div className='sidebar-item'>
                                <NavLink to={"/"}>
                                    <li>Dashboard</li>
                                </NavLink>
                            </div>
                            <div className='sidebar-item'>
                                <NavLink to={"/orders"}>
                                    <li>Orders</li>
                                </NavLink>
                            </div>
                            <div className='sidebar-item'>
                                <NavLink to={"/add"}>
                                    <li>Add Item</li>
                                </NavLink>
                            </div>
                            <div className='sidebar-item'>
                                <NavLink to={"/list"}>
                                    <li>Food List</li>
                                </NavLink>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar

import React, { useContext, useState } from 'react'
import './SearchBar.css'
import { AppContext } from '../context/AppContext';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ setShowSearchBar }) => {

    const [query, setQuery] = useState("");
    const { url, token } = useContext(AppContext);
    const navigate = useNavigate();

    const handleClose = () => {
        setShowSearchBar(false)
    }

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        try {
            const { data } = await axios.get(url + `/api/search/search-item?q=${query}`, {headers : { token }});
            if (data.success){
                navigate(`/menu?search=${query}`)
            }
        } catch (error) {
            console.error("Search failed", error);
        }
    };

    return (
        <>
            <div className="search-bar-container">
                <div className="inside-search-bar-container">
                    <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} className="search-input" />
                    <i onClick={handleSearch} className="fa-solid fa-magnifying-glass search-icon"></i>
                </div>
                <i onClick={handleClose} className="fa-solid fa-xmark close-icon"></i>
            </div>
        </>
    )
}

export default SearchBar

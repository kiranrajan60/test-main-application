import React from "react";
import "../SearchBar/SearchBar.css";
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <h3 className="pl-5 mt-5 search-head">Search</h3>
                    <hr className="line"></hr>
                </div>
            </div>
            <div className="row">
                <div className="col search-main">
                    <AiOutlineSearch className="icon-search"/>
                    <input type="text" placeholder="Food name" className="search-feild ml-5 mb-3 pl-4"></input>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;
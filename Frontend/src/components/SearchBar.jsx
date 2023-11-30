import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "../assets/styles/dashboard.css";
import CustomDivider from "./CustomDivider";

const { Search } = Input;

const SearchBar = () => {
    return (
        <div className="search-wrapper">
            <div className="search-bar">
                <SearchOutlined className="search-icon" />
                <CustomDivider height={20} marginLeft={5} marginRight={10} />
                <Input
                    className="search-input"
                    placeholder="Type keywords..."
                    allowClear
                />
            </div>
        </div>
    );
};

export default SearchBar;

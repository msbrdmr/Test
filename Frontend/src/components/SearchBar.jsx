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
                <CustomDivider type="vertical" margin={20} padding={10} />
                <input
                    className="search-input"
                    placeholder="Type keywords..."
                    allowClear
                    style={{
                        background: "transparent"
                    }}
                />
            </div>
        </div>
    );
};

export default SearchBar;

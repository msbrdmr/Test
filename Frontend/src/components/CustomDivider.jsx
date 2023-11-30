import React from "react";
import PropTypes from "prop-types";

const CustomDivider = ({ height, topMargin, bottomMargin }) => {
    const dividerStyle = {
        borderLeft: "1px solid #cfcfcf", // Adjust border color as needed
        height: `${height}px`, // Specify the desired length of the line
        margin: `${topMargin}px 0 ${bottomMargin}px 0`,
    };

    return <div style={dividerStyle}></div>;
};

CustomDivider.propTypes = {
    height: PropTypes.number,
    topMargin: PropTypes.number,
    bottomMargin: PropTypes.number,
};

CustomDivider.defaultProps = {
    height: 20, // Default height if not provided
    topMargin: 0,
    bottomMargin: 0,
};

export default CustomDivider;

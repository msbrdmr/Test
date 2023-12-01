import React from "react";
import PropTypes from "prop-types";

const CustomDivider = ({ height, marginRight, marginLeft }) => {
    const dividerStyle = {
        borderLeft: "1px solid #cfcfcf", // Adjust border color as needed
        height: `${height}px`, // Specify the desired length of the line
        margin: `0 ${marginRight}px 0 ${marginLeft}px  `,
    };

    return <div style={dividerStyle}></div>;
};

CustomDivider.propTypes = {
    height: PropTypes.number,
    marginRight: PropTypes.number,
    marginLeft: PropTypes.number
};

CustomDivider.defaultProps = {
    height: 20, // Default height if not provided
    marginRight: 0,
    marginLeft: 0,
};

export default CustomDivider;

import React from "react";
import PropTypes from "prop-types";

const CustomDivider = ({ type, height, marginRight, marginLeft }) => {
    const dividerStyle = {
        ...{
            borderLeft: type === "vertical"
                ? "1px solid #cfcfcf"
                : "0",
            borderTop: type === "horizontal"
                ? "1px solid #cfcfcf"
                : "0"
        },
        height: `${height}px`,
        margin: `0 ${marginRight}px 0 ${marginLeft}px  `,
    };

    return <div style={dividerStyle}></div>;
};

CustomDivider.propTypes = {
    type: 'horizontal' | 'vertical',
    height: PropTypes.number,
    marginRight: PropTypes.number,
    marginLeft: PropTypes.number
};

CustomDivider.defaultProps = {
    type: 'horizontal',
    height: 20, // Default height if not provided
    marginRight: 0,
    marginLeft: 0,
};

export default CustomDivider;

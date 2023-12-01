import React from "react";
import PropTypes from "prop-types";

const CustomDivider = ({ type, margin, padding }) => {
    const dividerStyleHorizontal = {
        borderBottom: '1px solid #eee',
        marginTop: margin,
        marginBottom: margin,
        paddingLeft: padding,
        paddingRight: padding
    };

    const dividerStyleVertical = {
        borderRight: '1px solid #eee',
        marginLeft: margin,
        marginRight: margin,
        paddingTop: padding,
        paddingBottom: padding
    };

    let style;

    switch (type) {
        case 'horizontal':
            style = dividerStyleHorizontal;
            break;
        case 'vertical':
            style = dividerStyleVertical;
            break;
        default:
            console.warn(`Unsupported divider type: ${type}`);
            return null; // Render nothing for unsupported types
    }

    return <div style={style}></div>;
};


CustomDivider.propTypes = {
    type: 'horizontal' | 'vertical',
    padding: PropTypes.number,
    margin: PropTypes.number,
};

CustomDivider.defaultProps = {
    type: 'horizontal',
    padding: 20, // Default height if not provided
    margin: 0,
};

export default CustomDivider;

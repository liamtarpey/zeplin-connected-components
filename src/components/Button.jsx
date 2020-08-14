import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick }) => {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired
};

export default Button;

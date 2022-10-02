import React from 'react';
import PropTypes from 'prop-types';

const TextField = ({ type, name, value, placeholder, onChange }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    
    return (
        <>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                className='form-control m-2'
            />
        </>
    );
};

TextField.defaultProps = {
    type: 'text'
};
TextField.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default TextField;

import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({
                         label,
                         value,
                         onChange,
                         defaultOption,
                         options,
                         name
                     }) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    
    const optionsArray =
        !Array.isArray(options) && typeof options === 'object'
            ? Object.values(options)
            : options;
    
    return (
        <div className="d-flex m-2">
            <label htmlFor={name} className="form-label m-2">
                {label}
            </label>
            <select
                className='form-select w-auto'
                id={name}
                name={name}
                value={value}
                onChange={handleChange}>
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray.length > 0 &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
            </select>
        </div>
    );
};

SelectField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    defaultOption: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    name: PropTypes.string
};

export default SelectField;

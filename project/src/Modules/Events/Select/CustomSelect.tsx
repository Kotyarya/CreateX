import React from 'react';
import "./CustomSelect.scss"
import Select from "react-select";

const CustomSelect = ({options, value, onChange, defaultValue, placeholder}: any) => {
    return <Select options={options} value={value} onChange={onChange} defaultValue={defaultValue}
                   placeholder={placeholder} classNamePrefix={"custom-select"} className={"custom-select-container"}
    />
};

export default CustomSelect;
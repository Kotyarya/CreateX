import React, {FC} from 'react';
import "./CustomSelect.scss"
import Select from "react-select";

interface CustomSelectProps {
    options: any,
    value: any,
    onChange: any,
    defaultValue?: any,
    placeholder: any
}

const CustomSelect: FC<CustomSelectProps> = ({options, value, onChange, defaultValue, placeholder}) => {
    return <Select options={options} value={value} onChange={onChange} defaultValue={defaultValue}
                   placeholder={placeholder} classNamePrefix={"custom-select"} className={"custom-select-container"}
    />
};

export default CustomSelect;
import React, {FC} from 'react';
import style from "./SearchInput.module.scss"


interface SearchInputProps {
    width: number,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

const SearchInput: FC<SearchInputProps> = ({width, placeholder, onChange, value, onFocus, onBlur}) => {
    return (
        <div className={style.customSearchInput}>
            <input type="text" className={style.searchInput} style={{width: `${width}rem`}} placeholder={placeholder}
                   onChange={onChange} value={value} onFocus={onFocus} onBlur={onBlur}/>
        </div>

    )
};

export default SearchInput;
import React, {FC} from 'react';
import style from "./SearchInput.module.scss"


interface SearchInputProps {
    width: number,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string
}

const SearchInput: FC<SearchInputProps> = ({width, placeholder, onChange, value}) => {
    return (
        <div className={style.customSearchInput}>
            <input type="text" className={style.searchInput} style={{width: `${width}rem`}} placeholder={placeholder}
                   onChange={onChange} value={value}/>
        </div>

    )
};

export default SearchInput;
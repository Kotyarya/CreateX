import React, {FC} from 'react';
import style from "./SearchInput.module.scss"


interface SearchInputProps {
    width: number,
    placeholder: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: FC<SearchInputProps> = ({width, placeholder, onChange}) => {
    return (
        <div className={style.customSearchInput}>
            <input type="text" className={style.searchInput} style={{width: `${width}rem`}} placeholder={placeholder}
                   onChange={onChange}/>
        </div>

    )
};

export default SearchInput;
import React, { Dispatch } from 'react';

type TextInputProps = {
    value: string,
    setValue: Dispatch<React.SetStateAction<string>>
    placeholder: string
}

export const TextInput = (props: TextInputProps) => {
    const {value, setValue, placeholder} = props;
    return (
        <input 
            type="text"
            value={value} 
            onChange={e => setValue(e.target.value)} 
            placeholder={placeholder} 
            className='border-solid border-2'
        />
    );
}

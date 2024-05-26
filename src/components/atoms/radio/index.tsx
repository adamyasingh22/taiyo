import React, { Dispatch } from 'react';

type RadioProps = {
    value: string,
    // setValue: Dispatch<React.SetStateAction<boolean>>
}

export const Radio = (props: RadioProps) => {
    const {value} = props;
    return (
        <input 
            type="radio"
            value={value}
        />
    );
}

import React, { Dispatch } from 'react';
import { Radio } from '../../atoms/radio';

type RadioInputProps = {
    value: string,
    // setValue: Dispatch<React.SetStateAction<string>>
}

export const RadioInput = (props: RadioInputProps) => {
    const {value} = props;
    return (
        <div className="space-x-1">
            <Radio value={value}  />
            <label>{value}</label>
        </div>
    );
}

import React from 'react';
import { Tag } from '../../atoms/tag';

type ButtonProps = {
    onPress?: () => void,
    title: string
}

export const Button = (props: ButtonProps) => {
    const {onPress, title} = props;

    const handlePress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        !!onPress && onPress();
    }

    return (
        <button className='px-4 py-2 bg-slate-500 rounded'onClick={e => handlePress(e)} >
            <Tag text={title} />
        </button>
    );
}

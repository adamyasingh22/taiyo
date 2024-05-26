import React from 'react';

type TagProps = {
    text: string
}

export const Tag = (props: TagProps) => {
    const {text} = props;
    return (
        <label>{text}</label>
    );
}

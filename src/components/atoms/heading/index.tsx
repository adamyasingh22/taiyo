import React from 'react';

type HeadingProps = {
    text: String
}

export const Heading = (props: HeadingProps) => {
    const {text} = props;
    return (
        <h1 className='text-center text-xl font-semibold text-white'>{text}</h1>
    );
}

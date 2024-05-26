import React from 'react';

type SubHeadingProps = {
    text: string
}

export const SubHeading = (props: SubHeadingProps) => {
    const {text} = props;
    return (
        <h1 className='text-lg font-semibold text-center'>{text}</h1>
    );
}

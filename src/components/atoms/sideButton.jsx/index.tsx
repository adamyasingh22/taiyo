import React from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
    text: String
    url: String
}

export const SideButton = (props: ButtonProps) => {
    const {text , url} = props;
    return (
        <div className='text-center'><Link to={`${url}`}>{text}</Link></div>
    );
}

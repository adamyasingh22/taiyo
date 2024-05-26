import React from 'react';

type ScreenContainerProps = {
    children: React.ReactNode
}

export const ScreenContainer = (props: ScreenContainerProps) => {
    const {children} = props;
    return (
        <div className='flex flex-col p-8 items-center space-y-4 grow'>
            {children}
        </div>
    );
}

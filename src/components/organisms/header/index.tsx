import React from 'react';
import { Heading } from '../../atoms/heading';

export const Header: React.FC = () => {
    return (
        <div>
          <div className='flex w-full justify-center py-4 bg-blue-500'>
            <Heading text="Contact Page" />
          </div>
        </div>
    );
}


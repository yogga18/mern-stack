import React from 'react';
import './button.scss';

export default function Button({title, ...rest}) {
    return (
        <div>
            <button className='button' {...rest}>{title}</button>
        </div>
    )
}

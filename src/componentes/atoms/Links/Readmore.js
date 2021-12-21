import React from 'react';
import './Readmore.scss';

export default function Readmore({ title, ...rest }) {
  return (
    <div>
      <p className='read-more' {...rest}>
        {title}
      </p>
    </div>
  );
}

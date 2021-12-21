import React from 'react';
import './Textarea.scss';

export default function TextArea({ ...rest }) {
  return (
    <div>
      <textarea {...rest} className='text-area' />
    </div>
  );
}

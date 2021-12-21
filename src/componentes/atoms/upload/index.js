import React from 'react';
import './Upload.scss';

export default function Upload() {
  const img =
    'https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg';

  return (
    <div className='upload'>
      <img className='preview' alt='preview' src={img} />
      <input className='input-file' type='file' />
    </div>
  );
}

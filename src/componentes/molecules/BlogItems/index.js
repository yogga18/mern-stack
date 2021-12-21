import React from 'react';
import './Blogitems.scss';
import Readmore from '../../atoms/Links/Readmore';
import { useNavigate } from 'react-router-dom';

export default function Blogitems() {
  const navigate = useNavigate();
  const img =
    'https://images.unsplash.com/photo-1552346318-f82ee4ffa2d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';

  const goReadMore = () => {
    navigate('/detail-blog');
  };

  return (
    <div className='blog-item'>
      <img className='image-thumb' src={img} alt='Blog Img' />
      <div className='content-detail'>
        <p className='title'>Title Blog</p>
        <p className='author'>Author - Date Post</p>
        <hr />
        <p className='body'>
          Lord Ipsum phasellus consequat, turpis nec iaculis molestie, nisl
          libero cursus ante, in tincidunt odio purus id mauris. Morbi luctus
          nec urna ut feugiat. Etiam finibus, arcu sit amet hendrerit vulputate,
          sapien turpis euismod lacus, eu maximus eros velit nec felis. Praesent
          cursus commodo sodales. Proin ornare augue metus, vitae mollis justo
          auctor vitae. Sed lacus felis, viverra vitae mollis ac, consectetur id
          velit. Fusce nec arcu gravida, fringilla turpis egestas, viverra dui.
          Aenean vel est massa. Duis id consequat felis, a viverra lacus.
        </p>
        <Readmore title='Read More' onClick={goReadMore} />
      </div>
    </div>
  );
}

import React from 'react';
import './Blogitems.scss';
import Readmore from '../../atoms/Links/Readmore';
import { useNavigate } from 'react-router-dom';

export default function Blogitems(props) {
  const { image, title, body, date, author } = props;
  const navigate = useNavigate();

  const goReadMore = () => {
    navigate('/detail-blog');
  };

  return (
    <div className='blog-item'>
      <img className='image-thumb' src={image} alt='Blog Img' />
      <div className='content-detail'>
        <p className='title'>{title}</p>
        <p className='author'>
          {author} - {date}
        </p>
        <hr />
        <p className='body'>{body}</p>
        <Readmore title='Read More' onClick={goReadMore} />
      </div>
    </div>
  );
}

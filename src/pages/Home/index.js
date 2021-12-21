import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Blogitems, Button, Gap } from '../../componentes';
import './Home.scss';

export default function Home() {
  const navigate = useNavigate();

  const goCreateBlog = () => {
    navigate('/create-blog');
  };

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title='create blog' onClick={goCreateBlog} />
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
        <Blogitems className='blog-item' />
        <Blogitems />
        <Blogitems />
        <Blogitems />
        <Blogitems />
        <Blogitems />
      </div>
      <div className='pagination'>
        <Button title='Previous' />
        <Gap width={20} />
        <Button title='Next' />
      </div>
    </div>
  );
}

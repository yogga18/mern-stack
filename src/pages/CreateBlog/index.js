import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Gap,
  Input,
  Readmore,
  TextArea,
  Upload,
} from '../../componentes';
import './Createblog.scss';

export default function CreateBlog() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/');
  };
  return (
    <div className='create-blog-wrapper'>
      <Readmore title='Back' onClick={goBack} />
      <h1 className='title-create-blog'>Create Blog</h1>
      <Input placeholder='Title' />
      <Upload />
      <TextArea placeholder='write your story here' />
      <Gap height={10} />
      <Button title='Publish' />
    </div>
  );
}

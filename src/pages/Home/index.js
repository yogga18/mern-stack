import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Spiner } from '../../assets/images';
import { Blogitems, Button, Gap } from '../../componentes';
import './Home.scss';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [dataBlog, usedataBlog] = useState([]);
  const spiner = Spiner; // image SPINNER
  const URL = 'http://localhost:4000/'; // Base URL
  const navigate = useNavigate();

  const goCreateBlog = () => {
    navigate('/create-blog');
  };

  useEffect(() => {
    const fetchApi = async () => {
      setLoading(true);
      const data = await axios
        .get(`${URL}v1/blog/posts`)
        .then((res) => {
          usedataBlog(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchApi();
  }, []);

  return (
    <div className='home-page-wrapper'>
      <div className='create-wrapper'>
        <Button title='create blog' onClick={goCreateBlog} />
      </div>
      <Gap height={20} />
      <div className='content-wrapper'>
        {loading && <img alt='spinner-loading' src={spiner} />}

        {dataBlog.map((blogPost) => {
          return (
            <Blogitems
              className='blog-item'
              key={blogPost._id}
              image={`${URL}${blogPost.image}`}
              title={blogPost.title}
              body={blogPost.body}
              author={blogPost.author.name}
              date={blogPost.createdAt}
            />
          );
        })}
      </div>
      <div className='pagination'>
        <Button title='Previous' />
        <Gap width={20} />
        <Button title='Next' />
      </div>
    </div>
  );
}

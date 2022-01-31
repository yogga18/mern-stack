import { useNavigate } from 'react-router-dom';
import { Readmore } from '../../componentes';
import './Detailblog.scss';

export default function DetailBlog() {
  // const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const img =
    'https://www.insertcart.com/wp-content/uploads/2018/05/thumbnail.jpg';
  // const spiner = Spiner;
  const goBackHome = () => {
    navigate(-1);
  };

  return (
    <div className='detail-blog-wrapper'>
      <Readmore title='Back' onClick={goBackHome} />
      <img className='img-wrapper' src={img} alt='detail img blog' />
      <h1 className='blog-title'>Title Blog</h1>
      <h4 className='blog-author'>Author Blog</h4>
      <hr />
      <p className='blog-body'>
        Lord Ipsum aenean vitae lectus tellus. Aliquam erat volutpat. Donec sed
        eros vulputate odio egestas venenatis nec vel nibh. Curabitur eros
        massa, consectetur vitae consequat ut, dictum vel ante. Duis velit enim,
        facilisis sit amet mi ac, blandit facilisis lacus. Nulla libero nunc,
        sagittis quis lacinia et, varius ac nisi. Donec porttitor lacus vitae
        lord lacinia sodales.
      </p>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h4>Home Page</h4>
      <button
        onClick={() => {
          navigate('order-summary');
        }}
      >
        Please Order
      </button>
    </>
  );
};

export default Home;

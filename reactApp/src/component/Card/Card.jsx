
import './card.css';
import { userData } from '../utils/constant/product';
import { useNavigate } from 'react-router-dom'; 


const Card = () => {
  const navigate = useNavigate();

  const defaultProfileImage = './src/assets/DefaultImage/defaultImg.jpg'; 

  return (
    <div className='card-wrapper'>
      {userData.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-img">
            <img src={item.background} alt={item.name} />
          </div>
          <div className="pro-img">
            <img 
              src={item.profileImage  ? item.profileImage : defaultProfileImage} 
              alt={item.name} 
            />
          </div>
          <h1>{item.name}</h1>
          <h3>{item.profession}</h3>
          <p>{item.description}</p>
          <button onClick={() => navigate(`/mainpage/${item.id}`)}>View Detail</button>
        </div>
      ))}
    </div>
  );
}

export default Card;


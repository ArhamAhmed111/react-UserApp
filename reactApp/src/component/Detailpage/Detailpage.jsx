import React from 'react';
import { useParams } from 'react-router-dom'; 
import { userData } from '../utils/constant/product';
import defaultImg from "../../assets/DefaultImage/defaultImg.jpg" 
import { useNavigate } from 'react-router-dom';



import './detail.css';

const Detailpage = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  
  const singleData = userData.find((item) => item.id === Number(id));
  

  console.log(singleData);
  
  if (!singleData) {
    return <div>User not found</div>;
  }

  return (
    <div className='detail-wrapper'>
      <div className='detail-proImg'>
        <img 
          src={ singleData.profileImage ? singleData.profileImage : defaultImg} 
          alt={singleData.name} 
        /> 
      </div>
      <div className='detail-userDetail'>
        <h5>{singleData.name}</h5>
        <h6>{singleData.profession}</h6> 
        <p>{singleData.description}</p> 
        <button>By me a coffee</button>
         <button onClick={() => navigate(`/`)}>Back to Mainpage</button>

      </div>
    </div>
  );
}

export default Detailpage;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';const IMAGE_BASE_URL = process.env.REACT_APP_IMAGE_BASE_URL;

const ImageContainer = ({ props, useBackgroundImage }) => {
  const [showModal, setShowModal] = useState(false);  
  const toggleModal = () => {
    setShowModal(!showModal);
  };  
  
  if (useBackgroundImage) {
    const backgroundStyle = {
      backgroundImage: `url(${IMAGE_BASE_URL}${props.poster_path})`,
    };

    return (
      <div className='image-holder-background' 
      style={backgroundStyle} key={props.id}>
        <h2>{props.title}</h2>
        <p>{props.overview}</p>
        <p>Release Date: {props.release_date}</p>
      </div>
    );
  } 
  
  else {
    
    return (
      <div className='image-holder' key={props.id}>
        <Link to={`/movies/${props.id}`}>
          <img src={`${IMAGE_BASE_URL}${props.poster_path}`} alt={props.title} />
        </Link>

        {
        showModal && (

          <div className='modal'>
            <div className='modal-content'>
              <h2>{props.title}</h2>
              <p>{props.overview}</p>
              <p>Release Date: {props.release_date}</p>
              <button onClick={toggleModal}>Close</button>
            </div>
          </div>
        )}

      </div>
    );
  }
};

export default ImageContainer;
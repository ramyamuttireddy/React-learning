import React from 'react';
import image from  './GreenUnderline.png';
import './content.scss';

function Maincontent() {
  return (
    <div className='main-content-wrapper'>
      <div className='main-heading'><p>Where Quality & Clarity Matters</p></div>
      <div className='main-para'><p>watch / download Telugu Movies in an excellent quality at the smallest file size. Exclusively designed & developed for smartphones, tablets, and PCs</p></div>
      <div className='star-content'><i className="fa fa-star green"></i><span>Beware of fake iBomma apps, sites</span></div>
      <div className='underline-image'><img src={image} alt="" /></div>
    </div>
  );
}

export default Maincontent;

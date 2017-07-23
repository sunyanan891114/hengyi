import React from 'react';
import cover from '../assets/xianju/Xcover.jpg';
import content1 from '../assets/xianju/Xcontent1.jpg';
import content2 from '../assets/xianju/Xcontent2.jpg';
import content3 from '../assets/xianju/Xcontent3.jpg';
import Header from './Header';
import Footer from './Footer';

export default() => {
  return(
      <div>
        <Header activeTab="xianju"/>
        <img src={cover} className="product-img" alt="限矩型液力偶合器"/>
        <img src={content1} className="product-img" alt="限矩型液力偶合器"/>
        <img src={content2} className="product-img" alt="限矩型液力偶合器"/>
        <img src={content3} className="product-img" alt="限矩型液力偶合器"/>
        <Footer/>
      </div>
  )
}
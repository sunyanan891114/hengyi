import React from 'react';
import cover from '../assets/product/cover.jpg';
import content1 from '../assets/product/conten1.jpg';
import content2 from '../assets/product/conten2.jpg';
import content3 from '../assets/product/conten3.jpg';
import content4 from '../assets/product/conten4.jpg';
import content5 from '../assets/product/conten5.jpg';
import Header from './Header';
import Footer from './Footer';

export default() => {
  return (
      <div>
        <Header activeTab="product"/>
        <img className="product-img" src={cover}/>
        <img className="product-img" src={content1}/>
        <img className="product-img" src={content2}/>
        <img className="product-img" src={content3}/>
        <img className="product-img" src={content4}/>
        <img className="product-img" src={content5}/>
        <Footer/>
      </div>
  )
}
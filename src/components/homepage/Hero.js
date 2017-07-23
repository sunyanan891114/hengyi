import React from 'react';
import hero1 from '../../assets/main_bg.jpg';
import hero2 from '../../assets/main_bg2.jpg';
import hero3 from '../../assets/main_bg3.jpeg';
import hero4 from '../../assets/ouheqi.png';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.images = ['bg_1', 'bg_2', 'bg_3', 'bg_4'];
    this.state = {
      imageIndex: 0
    };

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  nextImage() {
    this.switchImage((this.state.imageIndex + 1) % 4);
  }

  prevImage() {
    if (this.state.imageIndex === 0) this.switchImage(3);
    else this.switchImage((this.state.imageIndex - 1) % 4);
  }

  switchImage(imageIndex) {
    this.setState({ imageIndex });
  }

  render() {
    return (
        <section className="hero">
          <a className="hero__control" onClick={this.prevImage}>&#60;</a>
          <a className="hero__control" onClick={this.nextImage}>&#62;</a>
          <div alt="大连恒亿偶合器" className={`hero__bg ${this.images[this.state.imageIndex]}`} height={100}/>
          <h2 className="hero__title">
            欢迎光临<br/>
            大连恒亿偶合器
          </h2>
          <div className="hero__overlay"/>
        </section>
    )
  }
}

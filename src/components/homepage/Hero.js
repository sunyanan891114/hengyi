import React from 'react';

export default class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.images = ['bg_1', 'bg_2', 'bg_3', 'bg_4', 'bg_5', 'bg_6'];
    this.state = {
      imageIndex: 0
    };

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  nextImage() {
    this.switchImage((this.state.imageIndex + 1) % 6);
  }

  prevImage() {
    if (this.state.imageIndex === 0) this.switchImage(5);
    else this.switchImage((this.state.imageIndex - 1) % 6);
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

import React, { Component } from 'react';
import './index.css';
import data from './data';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
     
    };
  }
  render() {

    return (
      <>
        
            <div className='data'>
          <div className="imgs"><img src={this.props.title.foto} alt="" />
          <img className='img' src={this.props.title.img} alt="" /></div>
          <div className="dis">
         <h3> {this.props.title.name} </h3>
          <p className='ad'>{this.props.title.address}</p></div>
          <hr />
          <button className='dlt'>Delete</button>
        </div>
      </>
    );
  }
}
export default Main;

import React, { Component } from 'react';
import './index.css';
import data from './data.js';
import Main from './Main.jsx';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      search: '',
      number: 9,
      select:'id'
      
    };
  }
  render() {
    const onSearch = (e) => {
      const { value } = e.target;
      const res = data.filter((item) =>
       item[this.state.select].toString().toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ data: res });
    };

    const onSelect = (e) => {
      const { value } = e.target;
      this.setState({select:value})
    }
    

    return (
      <><div className='container'>
        <input
          type='text'
          placeholder='Enter an address,a name, or an id'
          onChange={onSearch}
        />
        <select onChange={onSelect} className='selection'>
          <option value="id">Id</option>
          <option value="name">Name</option>
          <option value="address">Address</option>
        </select>

      <h1 className='title'>Properties</h1>
      <p className='pp'>
        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
      </p>
      <div className='Number'>
          <h4>Number of Houses: {this.state.data.length }</h4>
      </div>
        <div className='house'>
          {this.state.data.map((value) => {
            return <Main title={value} />;
          })}
        </div></div>
      </>
    );
  }
}
export default Search;

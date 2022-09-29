import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Navbar';
// import foto1 from './fotos/foto1.svg';
// import foto2 from './fotos/foto2.svg';
// import foto3 from './fotos/foto3.svg';
// import foto from './fotos/Ellipse 11.svg';
// import Main from './Main';
import Search from './Search';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const data = [
//   {
//     id: 1,
//     foto: foto1,
//     img: foto,
//     name: 'Nice',
//     address: 'Quincy St, Brooklyn, NY, USA',
//   },
//   {
//     id: 2,
//     foto: foto2,
//     img: foto,
//     name: 'Beautiful',
//     address: 'Mirzo Ulugbek St, Brooklyn, NY, USA',
//   },
//   {
//     id: 3,
//     foto: foto3,
//     img: foto,
//     name: 'Mansion',
//     address: 'Beruniy St, Brooklyn, NY, USA',
//   },
//   {
//     id: 4,
//     foto: foto2,
//     img: foto,
//     name: 'Nice',
//     address: 'Amir Temur St, Brooklyn, NY, USA',
//   },
//   {
//     id: 5,
//     foto: foto3,
//     img: foto,
//     name: 'Mansion',
//     address: 'Shohsaroy St, Brooklyn, NY, USA',
//   },
//   {
//     id: 6,
//     foto: foto1,
//     img: foto,
//     name: 'Beautiful',
//     address: 'Abdulla Qodiriy St, Brooklyn, NY, USA',
//   },
//   {
//     id: 7,
//     foto: foto3,
//     img: foto,
//     name: 'Beautiful',
//     address: 'Mustaqillik St, Brooklyn, NY, USA',
//   },
//   {
//     id: 8,
//     foto: foto1,
//     img: foto,
//     name: 'Mansion',
//     address: 'Tinchlik St, Brooklyn, NY, USA',
//   },
//   {
//     id: 9,
//     foto: foto2,
//     img: foto,
//     name: 'Nice',
//     address: 'Quincy St, Brooklyn, NY, USA',
//   },
// ];


root.render(
  <React.StrictMode>
    <Navbar />
      <Search />
  </React.StrictMode>
);


import React from "react";
class Navbar extends React.Component {

  render() {
    return (
      <div className='Navbar'>
        <div className='logohouzing'>
          <img src='./fotos/Vector (5).svg' alt='logo' />
          <img src='./fotos/Houzing.svg' alt='houzing' />
        </div>
        <div className='links'>
          <a className="link" href=''>Home</a>
          <a className="link" href=''>Properties</a>
          <a className="link" href=''>Contacts</a>
        </div>
        <button className='bt'>Login</button>
      </div>
    )
  }

}
export default Navbar
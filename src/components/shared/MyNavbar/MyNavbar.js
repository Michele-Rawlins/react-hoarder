import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './MyNavbar.scss';

class MyNavbar extends React.Component {
  logMeOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="myNavbar">
        <h1>My Navbar</h1>
        <button className="btn btn-outline-success" onClick={this.logMeOut}>LogOut</button>
      </div>
    );
  }
}

export default MyNavbar;

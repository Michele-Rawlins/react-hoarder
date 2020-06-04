import React from 'react';

import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
     <div className="Home">
       <h1>Home</h1>
       <button className="btn btn-info" >Do Something</button>
       <Link to='/myStuff'>My Stuff</Link>
     </div>
    );
  }
}

export default Home;

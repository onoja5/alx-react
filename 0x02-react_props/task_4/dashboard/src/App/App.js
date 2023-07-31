import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Footer from  '../Footer/Footer';
import Login from '../Login/Login';
import Notification from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';


function App({isLoggedIn}) {
  return (
    <React.Fragment>
      <Notification />
    <div className="App">
      <Header />
      {isLoggedIn ? <CourseList /> : <Login />}
      
      <Footer />
        
    </div>
    </React.Fragment>
  );
}

export default App;

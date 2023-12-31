import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40},
]

const listNotifications = [
  {id: 1, type: 'default', value: 'New course available'},
  {id: 2, type: 'urgent', value: 'New resume available'},
  {id: 3, type: 'urgent', html: getLatestNotification()},
]

function App({isLoggedIn}) {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Notifications listNotifications={listNotifications} />
      </div>
      
      
      <div className="App-body">
        {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
      </div>
      <div className="App-footer">
        <Footer /> 
      </div>     
    </>
  );
}

App.defaultProps = {
  isLoggedIn: false,

}

App.prototypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;

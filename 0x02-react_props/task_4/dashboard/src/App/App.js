import './App.css';
import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">      
        <Header />
        <div className="App-body">
          {!isLoggedIn ? <Login /> : <CourseList />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    </React.Fragment>  
  );
}

App.defaultProps = {
  isLoggedIn: false,
}
export default App;

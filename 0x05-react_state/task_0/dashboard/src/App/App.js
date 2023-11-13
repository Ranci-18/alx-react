import React from 'react';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
    }

    this.logOut = this.logOut.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }
  listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40},
  ];

  listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: getLatestNotification()},
  ];
  
  logOut = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  };

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true})
  }

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false })
  }

  componentDidMount() {
    document.addEventListener("keydown", this.logOut);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.logOut);
  }

  render () {
    const styles = StyleSheet.create({
      body: {
        padding: 0,
        margin: 0,
      }
  });
  return (
    <React.Fragment>
      <div className={css(styles.body)}>
      <Notifications
        listNotifications={this.listNotifications}
        displayDrawer={this.state.displayDrawer}
        handleDisplayDrawer={this.handleDisplayDrawer}
        handleHideDrawer={this.handleHideDrawer}
       />
      <div className="App">      
        <Header />
        <div className="App-body">
          {!this.props.isLoggedIn ? <Login /> : <CourseList listCourses={this.listCourses} />}
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
      </div>
    </React.Fragment>  
  );
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;

import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { AppContext, user } from './AppContext';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';


const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40},
]


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: [
        {id: 1, type: 'default', value: 'New course available'},
        {id: 2, type: 'urgent', value: 'New resume available'},
        {id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
      ]
    }
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state.logOut = this.logOut;
    this.logIn = this.logIn.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true})
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false})
  }

  handleKeyPress(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  logIn(email, password) {
    this.setState({ user: { email: email, password: password, isLoggedIn: true }})
  }

  logOut() {
    this.setState({ user: { email: '', password: '', isLoggedIn: false }})
  }

  markNotificationAsRead(id) {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((notification) => notification.id !== id)
    }))
  }
  render() {

    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logOut: this.state.logOut,
        }}
        >
        <React.Fragment>
          <div className="App">
            <Header />
          </div>
          <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Notifications
              markNotificationAsRead={this.markNotificationAsRead}
              listNotifications={this.state.listNotifications}
              displayDrawer={this.state.displayDrawer}
              handleDisplayDrawer={this.handleDisplayDrawer}
              handleHideDrawer={this.handleHideDrawer}
              />
          </div>

          <div className="App-body">
            {this.state.user.isLoggedIn ? 
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
              :
              <BodySectionWithMarginBottom title='Log in to continue'> 
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>}
            <BodySection title='News from the School'>
              <p>Some random text</p>
            </BodySection>
          </div>

          <div className="App-footer">
            <Footer /> 
          </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}

App.defaultProps = {
  logOut: () => {},
}

App.propTypes = {
  logOut: PropTypes.func,
}

export default App;

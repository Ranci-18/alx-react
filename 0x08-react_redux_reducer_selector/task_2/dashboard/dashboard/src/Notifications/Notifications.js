import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);

    this.closeIconClicked = this.closeIconClicked.bind(this);

    this.styles = {
      border: 'none',
      background: 'transparent',
      position: 'absolute',
      top: '27%',
      right: '0.5em',
    }
  }

  closeIconClicked() {
    console.log('Close button has been clicked');
  }
  render() {
    const { displayDrawer, listNotifications } = this.props;
  
    return (
      <React.Fragment>
        <div className='menuItem' onClick={this.props.handleDisplayDrawer}>
            <p>Your notifications</p>
        </div>
        {displayDrawer && 
        (
        <div className='Notifications'>
          <p>Here is the list of notifications</p>
          <button 
            onClick={() => {
              this.closeIconClicked()
              this.props.handleHideDrawer()
            }}
            style={this.styles} aria-label='Close'>
            <img src={closeIcon}
                alt='close-icon'
                width={'20px'}
                height={'20px'} />
          </button>
          <ul>
            {listNotifications.length > 0 ?
                listNotifications.map((notification) => <NotificationItem markAsRead={this.props.markNotificationAsRead} type={notification.type} value={notification.value} key={notification.id} html={notification.html} />)
                :
                <NotificationItem markAsRead={this.props.markNotificationAsRead} value='No new notification for now' />}
          </ul>
        </div>
        )
        }
      </React.Fragment>
    )
  }
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {},
    markNotificationAsRead: () => {},
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func,
    markNotificationAsRead: PropTypes.func,
}
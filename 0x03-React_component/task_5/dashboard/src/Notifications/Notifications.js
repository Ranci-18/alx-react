import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.closeIconClicked = this.closeIconClicked.bind(this);

    this.markAsRead = this.markAsRead.bind(this);

    this.styles = {
      border: 'none',
      background: 'transparent',
      position: 'absolute',
      top: '27%',
      right: '0.5em',
    }
  }

  shouldComponentUpdate(nextProps) {
    return (nextProps.listNotifications.length > this.props.listNotifications.length);
  }
     closeIconClicked() {
        console.log('Close button has been clicked');
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }
  render() {
    const { displayDrawer, listNotifications } = this.props;
  
    return (
      <React.Fragment>
        <div className='menuItem'>
            <p>Your notifications</p>
        </div>
        {displayDrawer && 
        (
        <div className='Notifications'>
          <p>Here is the list of notifications</p>
          <button onClick={this.closeIconClicked} style={this.styles} aria-label='Close'>
            <img src={closeIcon}
                alt='close-icon'
                width={'20px'}
                height={'20px'} />
          </button>
          <ul>
            {listNotifications.length > 0 ?
                listNotifications.map((notification) => <NotificationItem markAsRead={this.markAsRead} key={notification.id} type={notification.type} value={notification.value} html={notification.html} />)
                :
                <NotificationItem markAsRead={this.markAsRead} value='No new notification for now' />}
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
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
}
import React from "react";
import "./Notifications.css";
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';

function Notifications() {
    const inLineStyle = {
        position: 'absolute',
        right: '1px',
        top: '1px',
    }
    const buttonOnClick = () => {
        console.log('Close button has been clicked');
    }
    return (
        <div className="Notifications">
            <button style={inLineStyle} onClick={buttonOnClick} aria-label='close'>
                <img src={closeIcon} alt='close-icon' width="10px" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <NotificationItem type="default" value="New course available" />
                <NotificationItem type="urgent" value="New resume available" />
                <NotificationItem type="urgent" html={getLatestNotification()} />
            </ul>
        </div>
    )
}

export default Notifications;
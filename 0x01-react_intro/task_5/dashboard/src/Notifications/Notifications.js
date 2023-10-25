import React from 'react';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeIcon from './close-icon.png';

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
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    )
}

export default Notifications;
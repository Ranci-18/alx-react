import React from "react";
import "./Notifications.css";
import { getLatestNotification } from '../utils/utils';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer, listNotifications }) {
    const inLineStyle = {
        position: 'absolute',
        right: '1px',
        top: '1px',
    }
    const buttonOnClick = () => {
        console.log('Close button has been clicked');
    }
    return (
        <>
            {displayDrawer ? (
            <>
                <div className="menuItem">
                    <p>Your notificatioins</p>
                </div>
                <div className="Notifications">
                    {/*<button style={inLineStyle} onClick={buttonOnClick} aria-label='close'>
                        <img src={closeIcon} alt='close-icon' width="10px" />
                    </button>
                    <p>Here is the list of notifications</p> */}
                    <ul>
                        {listNotifications && listNotifications.length > 0 ? 
                        (listNotifications.map(({ id, html, type, value }) => ( 
                        <>
                            <NotificationItem key={id} type={type} html={html} value={value} />
                        </>
                        ))
                        ) : (
                        <div>
                            <NotificationItem type="default" value="No new notification for now" />
                            <button style={inLineStyle} onClick={buttonOnClick} aria-label='close'>
                                <img src={closeIcon} alt='close-icon' width="10px" />
                            </button>
                        </div>
                        )}
                    </ul>
                </div>
            </>
            ) : (
            <div className="menuItem">
                <p>Your notificatioins</p>
            </div>
            )}
        </>
    )
}

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};

Notifications.propTypes = {
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
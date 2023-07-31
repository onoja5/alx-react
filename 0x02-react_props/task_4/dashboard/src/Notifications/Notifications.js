import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications ({displayDrawer}) {
    return(
        <>

        <div className='menuItem'>
            Your notifications
        </div>
        {displayDrawer? 
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <button 
            style={{color: '#3a3a3a',
            fontWeight: 'bold',
            background: 'none',
            border: 'none',
            fontSize: '15px',
            position: 'absolute',
            right: '3px',
            top: '3px',
            cursor: 'pointer',
            outline: 'none', }}
                arial-label = "Close"
                onClick={console.log('Close  button has been clicked')}>
                <img src={closeIcon} alt='Close'></img>

            </button>

            <ul>
                <NotificationItem type="default" value="New course available"></NotificationItem>
                <NotificationItem type="urgent" value="New course available"></NotificationItem>
                <NotificationItem type="urgent" html={getLatestNotification()}></NotificationItem>
            </ul>
        </div>
        : 
        null
        }
        </>


    );
};

Notifications.defaultProps = {
    displayDrawer: false
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};

export default Notifications;
import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

function Notifications () {
    return(
        <div className='Notifications'>
            <button 
            style={{position: 'absolute',
            right: '3px',
            top: '3px',
            cursor: 'pointer',
            outline: 'none',
            background: 'none',
            border: 'none',
         }}
                aria-label="Close"
      onClick={(e) => {
        console.log('Close button has been clicked');
      }}
      >
                <img src={closeIcon} alt='Close'></img>

            </button>
            <p>Here is the list of notifications</p>


            <ul>
                <NotificationItem type="default" value="New course available"></NotificationItem>
                <NotificationItem type="urgent" value="New course available"></NotificationItem>
                <NotificationItem type="urgent" html={getLatestNotification()}></NotificationItem>
            </ul>
        </div>
    );
};

export default Notifications;
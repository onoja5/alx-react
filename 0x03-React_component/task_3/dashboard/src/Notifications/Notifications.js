import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }
    render() {
      return (
        <>

        <div className='menuItem'>
            Your notifications
        </div>
        {this.props.displayDrawer? 
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

            {
              this.props.listNotifications.length !== 0 ?
                <p>Here is the list of notifications</p>
              : null
            }
            <ul>
              {
                this.props.listNotifications.length === 0 ?
                  <NotificationItem type="default" value="No new notification for now" />
                : null
              }
              {
                this.props.listNotifications.map((val, idx)=> {
                  return <NotificationItem
                  type={val.type}
                  value={val.value}
                  html={val.html}
                  key={val.id}
                />
                })
              }
            </ul>
        </div>
        : 
        null
        }
        </>
);

    };
};

Notifications.defaultProps = {
    thisdisplayDrawer: false,
    listNotificatons: []
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotificatons: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
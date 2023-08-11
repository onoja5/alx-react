import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';


class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }
    render() {
      return (
        <>
        
        {!this.props.displayDrawer? 
        <div className={css(notificationStyles.notifications)}>
          Your notifications
          </div>
          :
          <div className={css(notificationStyles.notifications)}>
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
                onClick={(e) => {
                console.log('Close button has been clicked');
              }} >             
              <img src={closeIcon} alt='Close'></img>

            </button>

            {
              this.props.listNotifications.length != 0 ?
                <p>Here is the list of notifications</p>
              : null
            }
            <ul>
              {
                this.props.listNotifications.length == 0 ?
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
                  markAsRead ={this.markAsRead}
                  id={val.id}
                />
                })
              }
            </ul>
        </div>
    }
        </>
);

    };
};

const opacityAnim = {
  '0%': {opacity: 0.5},
  '100%': {opacity: 1}
};

const bounceAnim = {
  '0%': {transform: 'translateY(0px)'},
  '33%': {transform: 'translateY(-5px)'},
  '66%': {transform: 'translateY(5px)'},
  '100%': {transform: 'translateY(0px)'},

}

const notificationStyles = StyleSheet.create({
  notifications: {
    padding: '3em',
    position: 'absolute',
    top: '21px',
    right: '7px',
    marginTop: '3px',
    zIndex: '100',
    '@media (max-width: 900px)': {
      width: '100%',
      padding: '0px',
      fontSize: '20px',
      position: 'relative',
      right: 0,
      left: 0,
      border: 'none',
    }
  },
  menuItem: {
    textAlign: 'right'
  },
  ul: {
    '@media (max-width: 900px)': {
      padding: 0
    }
  },
  button: {
    '@media (max-width: 900px)': {
      position: 'relative',
      float: 'right',
    }
  }

})

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
};

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

export default Notifications;
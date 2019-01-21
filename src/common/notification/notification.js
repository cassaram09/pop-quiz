import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ accept, cancel, message }) => {
  return (
    <div className="notification is-warning">
      <button className="delete notification__delete" onClick={cancel.fn}></button>
      <p className="notification__message">{message}</p>
      <button className="notification__accept" onClick={accept.fn}>{accept.text}</button>
      <button className="notification__cancel" onClick={cancel.fn} >{cancel.text}</button>
    </div>
  );
}

Notification.propTypes = {
  accept: PropTypes.shape({
    text: PropTypes.string,
    fn: PropTypes.func
  }),
  cancel: PropTypes.shape({
    text: PropTypes.string,
    fn: PropTypes.func
  }),
  message: PropTypes.string
};

Notification.defaultProps = {
  accept: {},
  cancel: {},
  message: ''
};

export default Notification;

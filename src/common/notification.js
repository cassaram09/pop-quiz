import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({ accept, cancel, message }) => {
  return (
    <div className="notification is-warning">
      <button className="delete" onClick={cancel.fn}></button>
      <p>{message}</p>
      <button onClick={accept.fn}>{accept.text}</button>
      <button onClick={cancel.fn} >{cancel.text}</button>
    </div>
  );
}

export default Notification;
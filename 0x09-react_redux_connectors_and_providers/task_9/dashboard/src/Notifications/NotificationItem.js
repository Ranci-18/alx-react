import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Notifications: {
      border: '2px dashed rgb(212, 76, 76)',
      padding: '10px',
  },
  defaultNotification: {
      '[data-notification-type="default"]': {
          color: 'rgb(11, 11, 129)',
      },
  },
  urgentNotification: {
      '[data-notification-type="urgent"], [data-urgent]': {
          color: 'red'
      },
  },
  img: {
      minHeight: '2px',
  },
});
export default function NotificationItem({ type, html, value }) {
  return (
    <>
      {type && value ? <li data-notification-type={type}>{value}</li> : null}
      {html ? <li data-urgent dangerouslySetInnerHTML={{ __html: html }} /> : null}
    </>
  )
};

NotificationItem.prototype = {
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
}
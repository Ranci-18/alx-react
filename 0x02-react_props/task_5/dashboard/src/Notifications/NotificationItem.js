import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({type, html, value}) {
  return (
    <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
    >
      {value}
    </li>
  )
}

NotificationItem.defaultProps = {
    type: 'default',
}

NotificationItem.prototypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    value: PropTypes.string
}
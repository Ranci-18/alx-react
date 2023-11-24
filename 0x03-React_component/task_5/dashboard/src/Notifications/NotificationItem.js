import React from 'react';
import PropTypes from 'prop-types';

export default class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { markAsRead, type, html, value, id } = this.props;
    return (
      <li
          onClick={() => markAsRead(id)}
          data-notification-type={type}
          dangerouslySetInnerHTML={html}
      >
        {value}
      </li>
    )
  }
}

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {console.log('empty function')},
}

NotificationItem.prototypes = {
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string
    }),
    value: PropTypes.string,
    markAsRead: PropTypes.func,
}
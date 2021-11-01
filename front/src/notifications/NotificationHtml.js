import React from 'react';

const NotificationHtml = ({ message }) => {

  return (
    <div>
      {
        message.map((m, index) => {
          return (<div key={`message-${index}`}>{m}<br/></div>);
        })
      }
    </div>
  );

};

export default NotificationHtml;

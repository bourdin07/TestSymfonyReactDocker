import React from 'react';
import { notification } from 'antd';
import { IoIosClose } from 'react-icons/io';
import { AiOutlineExclamationCircle } from 'react-icons/ai';
import {params} from '../notificationParam';

const openNotificationWithIcon = (message) => {
  //notification.destroy();
  notification['warning']({
    message,
    placement: 'bottomRight',
    className: 'Notification-container Notification-warning',
    duration: params.duration,
    closeIcon: <IoIosClose className='Notification-icon'/>,
    icon: <AiOutlineExclamationCircle style={{color: '#faad14'}} />

  });
};

export const warningNotification = (message) => openNotificationWithIcon(message);
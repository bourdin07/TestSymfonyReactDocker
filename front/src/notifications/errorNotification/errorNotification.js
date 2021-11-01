import React from 'react';
import { notification } from 'antd';
import { IoIosClose } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {params} from '../notificationParam';

const openNotificationWithIcon = (message) => {
  //notification.destroy();
  notification['error']({
    message,
    placement: 'bottomRight',
    className: 'Notification-container Notification-error',
    duration: params.duration,
    closeIcon: <IoIosClose className='Notification-icon'/>,
    icon: <AiOutlineCloseCircle style={{color: '#ff4d4f'}} />

  });
};

export const errorNotification = (message) => openNotificationWithIcon(message);
import React from 'react';
import { notification } from 'antd';
import { IoIosClose } from 'react-icons/io';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import {params} from '../notificationParam';

const openNotificationWithIcon = (message) => {
  //notification.destroy();
  //notification.close('success')
  notification['success']({
    message,
    placement: 'bottomRight',
    className: 'Notification-container Notification-success',
    duration: params.duration,
    closeIcon: <IoIosClose className='Notification-icon'/>,
    icon: <AiOutlineCheckCircle style={{color: '#52c41a'}} />
  });
};

export const successNotification = (message) => {openNotificationWithIcon(message)};
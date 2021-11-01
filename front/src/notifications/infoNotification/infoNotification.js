import React from 'react';
import { notification } from 'antd';
import { IoIosClose } from 'react-icons/io';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import {params} from '../notificationParam';

const openNotificationWithIcon = (message) => {
  //notification.destroy();
  notification['info']({
    message,
    placement: 'bottomRight',
    className: 'Notification-container Notification-info',
    duration: params.duration,
    closeIcon: <IoIosClose className='Notification-icon'/>,
    icon: <AiOutlineInfoCircle style={{color: '#1890ff'}} />

  });
};

export const infoNotification = (message) => openNotificationWithIcon(message);
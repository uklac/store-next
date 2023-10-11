'use client';

import { useState } from 'react';
import styles from './banner-notification.module.scss';

/* eslint-disable-next-line */

export enum BannerType {
  success = 'success',
  error = 'error',
  info = 'info',
  primary = 'primary',
  secondary = 'secondary',
  white = 'white',
}

export interface BannerNotificationProps {
  children: any;
  type?: BannerType;
  className?: string;
  onClickClose?: () => void;
}

export function BannerNotification(props: BannerNotificationProps) {
  const [isHidden, setIsHidden] = useState(false);
  const { children, type, onClickClose, className } = props;
  const colors = {
    success: styles['success'],
    error: styles['error'],
    info: styles['info'],
    white: styles['white'],
    primary: styles['primary'],
    secondary: styles['secondary'],
  };

  const closeBanner = () => {
    setIsHidden(!isHidden);
    onClickClose && onClickClose();
  };

  const selectedColor = colors[type || BannerType.success];
  return (
    <>
      {isHidden ? (
        <></>
      ) : (
        <div
          className={`${styles['banner-notification']} ${selectedColor} ${className}`}
        >
          {children}
          {onClickClose && (
            // <Icon icon='close' size={18} onClick={closeBanner}/>
            <i className="icon-long-arrow-right" onClick={closeBanner} />
          )}
        </div>
      )}
    </>
  );
}

export default BannerNotification;

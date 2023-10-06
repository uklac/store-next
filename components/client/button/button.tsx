import React, { ReactElement } from 'react';

interface ButtonProps {
  style?: 'round' | 'square' | 'rounded';
  outline?: 'dark' | 'primary';
  onClick: (event?: any) => void;
  children: any;
}

const btnClasses = {
  round: 'btn btn-primary btn-round',
  square: 'btn btn-primary',
  rounded: 'btn btn-primary btn-rounded',
};

const outlineClasses = {
  dark: 'btn-outline-dark',
  primary: 'btn-outline-primary',
};

export function Button(props: ButtonProps) {
  const { style, outline, onClick, children } = props;

  const btnClass = style ? btnClasses[style] : btnClasses.rounded;
  const btnOutlineClass = outline ? outlineClasses[outline] : '';

  return (
    <button className={`${btnClass} ${btnOutlineClass}`} onClick={onClick}>
      {children}
    </button>
  );
}

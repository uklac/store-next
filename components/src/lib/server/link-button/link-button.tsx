import Link from 'next/link';

export interface LinkButtonProps {
  className?: string;
  style?: 'round' | 'square' | 'rounded';
  outline?: 'dark' | 'primary';
  icon?: string;
  url: string;
  text: string;
}

const btnClasses = {
  round: 'btn btn-primary btn-round',
  square: 'btn btn-primary',
  rounded: 'btn btn-primary btn-rounded',
};

const outlineClasses = {
  dark: 'btn-outline-darker',
  primary: 'btn-outline-primary',
};

export async function LinkButton(props: LinkButtonProps) {
  const { url, text, style, outline, icon, className } = props;

  const btnClass = style ? btnClasses[style] : btnClasses.rounded;
  const btnOutlineClass = outline ? outlineClasses[outline] : '';

  return (
    <Link className={`${btnClass} ${btnOutlineClass} ${className}`} href={url}>
      {text}
      {icon && <i className={icon}></i>}
    </Link>
  );
}

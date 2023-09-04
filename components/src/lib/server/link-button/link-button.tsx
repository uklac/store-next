import Link from 'next/link';

export interface LinkButtonProps {
  style?: 'round' | 'square' | 'rounded';
  outline?: 'dark' | 'primary';
  url: string;
  text: string;
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

export async function LinkButton(props: LinkButtonProps) {
  const { url, text, style, outline } = props;

  const btnClass = style ? btnClasses[style] : btnClasses.rounded;
  const btnOutlineClass = outline ? outlineClasses[outline] : '';

  return (
    <Link className={`${btnClass} ${btnOutlineClass}`} href={url}>
      {text}
    </Link>
  );
}

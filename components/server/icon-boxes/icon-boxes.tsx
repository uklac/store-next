interface IconBoxesProps {
  position?: 'center' | 'left';
  icons?: 'default' | 'circle';
  options: {
    title: string;
    text: string;
    icon: string;
  }[];
}

export function IconBoxes(props: IconBoxesProps) {
  const { position, icons, options } = props;
  const iconClass = icons === 'circle' ? 'icon-box-circle' : '';
  const positionClass = position === 'left' ? 'icon-box-side' : 'text-center';
  
  return (
    <div className="row justify-content-center">
      {options.map((option, index) => (
        <div className="col-lg-4 col-sm-6" key={index}>
          <div className={`icon-box ${iconClass} ${positionClass}`}>
            <span className="icon-box-icon">
              <i className={option.icon}></i>
            </span>
            <div className="icon-box-content">
              <h3 className="icon-box-title">{option.title}</h3>
              <p>
                {option.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from './types';
import styles from './Button.module.scss';
import cn from 'classnames';

const Button: FC<ButtonProps> = ({ children, className, onClick, linkPath, isLink }) => {
  const buttonClassName = cn(styles.button, className);

  if (isLink) {
    return (
      <Link to={linkPath!} className={buttonClassName} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

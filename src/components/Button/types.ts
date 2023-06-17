import { ReactNode, MouseEvent } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  className?: string;
  isLink: boolean;
  linkPath?: string;
  onClick?: (event: MouseEvent) => void;
}

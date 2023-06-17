import { ReactNode } from 'react';

export interface ButtonAnswerProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

import { ReactNode } from 'react';
//def. du format des props
export interface IButtonProps {
  bgColor?: string;
  color?: string;
  type?: 'button' | 'reset' | 'submit';
  buttonStyle?: object;
  onButtonClicked?: Function;
  children: Array<ReactNode | string> | string | ReactNode;
}
import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons/lib';
import { ButtonTypeEnum } from '../../enums/buttonTypeEnum';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
  title: string;
  typeButton: ButtonTypeEnum;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, title, typeButton }) => (
  <Container buttonType={typeButton}>
    {Icon && <Icon size={14} />}
    <button type="button">{title} </button>
  </Container>
);

export default Button;

import React, { InputHTMLAttributes } from 'react';

import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ placeholder, icon: Icon, ...rest }) => (
  <Container>
    {Icon && <Icon size={20} />}
    <input placeholder={placeholder} {...rest} />
  </Container>
);

export default Input;

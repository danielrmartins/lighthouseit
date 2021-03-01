import styled, { css } from 'styled-components';

import { ButtonTypeEnum } from '../../enums/buttonTypeEnum';

interface ButtonProps {
  buttonType: ButtonTypeEnum;
}

export const Container = styled.div<ButtonProps>`
  border-radius: 10px;
  padding: 5;
  width: 110px;
  height: 30px;

  ${(props) =>
    props.buttonType === ButtonTypeEnum.ADD &&
    css`
      border: 1px solid #bb4546;
    `}

  ${(props) =>
    props.buttonType === ButtonTypeEnum.CANCEL &&
    css`
      border: 1px solid #737088;
    `}

    ${(props) =>
    props.buttonType === ButtonTypeEnum.SAVE &&
    css`
      border: 1px solid #111;
      background-color: #8aaf87;
    `}



  display: flex;
  align-items: center;

  button {
    flex: 1;
    background: transparent;
    border: 0;
    font-size: 13px;

    ${(props) =>
      props.buttonType === ButtonTypeEnum.ADD &&
      css`
        color: #bb4546;
      `}

    ${(props) =>
      props.buttonType === ButtonTypeEnum.SAVE &&
      css`
        color: #fff;
      `}
  }

  svg {
    margin-left: 10px;
    color: #bb4546;

    ${(props) =>
      props.buttonType === ButtonTypeEnum.SAVE &&
      css`
        color: #fff;
      `}

    ${(props) =>
      props.buttonType === ButtonTypeEnum.CANCEL &&
      css`
        color: #111;
      `}
  }
`;

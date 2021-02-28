import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 15px;
  padding: 5px;
  width: 100%;

  border: 1px solid #c7c6cf;
  /*  color: #666360; */

  display: flex;
  align-items: center;

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #111;

    &::placeholder {
      color: #c7c6cf;
    }
  }

  svg {
    margin-right: 16px;
    margin-left: 5px;
    color: red;
  }
`;

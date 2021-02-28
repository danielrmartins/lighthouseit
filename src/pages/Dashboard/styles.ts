import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const MenuContent = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 25vh;
`;

export const MenuStyle = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
`;

export const Divider = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  button {
    text-align: left;
    margin: 15px 0;
    border: 0;
    background-color: #fff;
    color: #c7c6cf;
    font-size: 16px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-size: 14px;
  }

  img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }

  strong {
    color: #111;
  }
  span {
    color: #c7c6cf;
  }
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0 20px 30px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5vh;
  }

  h5 {
    margin: 20px 0;
    color: #111;
    font-size: 30px;
  }

  button {
    background-color: #fff;
    border-color: gray;
    border-width: 1px;
    border-radius: 15px;
    width: 100px;
    height: 40px;
  }
`;

export const Roles = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 10px 0 0px 20px;
  border: 0;
  background-color: #fff;
  border-radius: 15px;
  flex-direction: row;

  button {
    margin-top: 10px;
    padding-bottom: 20px;
    border: none;
    border-bottom: 3px solid red;
    background-color: #fff;
    font-size: 15px;
    font-weight: bold;

    & + button {
      margin-left: 60px;
    }
  }
`;

export const UserContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 15px;
  height: 70vh;
`;

export const UserContentHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 20px 30px 20px;
  height: 5vh;

  div {
    width: 100%;

    & + div {
      width: 50%;
    }
  }

  h5 {
    color: #111;
    margin-bottom: 5px;
    font-size: 20px;
  }

  span {
    color: #c7c6cf;
    font-size: 15px;
  }
`;

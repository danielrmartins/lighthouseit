import styled, { css } from 'styled-components';

import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import { RoleEnum } from '../../enums/roleEnum';

interface RolesProps {
  selectedRoleEnum: RoleEnum;
}

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
  margin: 20px 20px 20px 30px;
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
    margin: 10px 0;
    color: #111;
    font-size: 30px;
  }

  button {
    background-color: #fff;
    border-color: #737088;
    border-width: 1px;
    border-radius: 15px;
    width: 100px;
    height: 40px;
  }
`;

export const Roles = styled.div<RolesProps>`
  display: flex;
  margin-top: 30px;
  padding: 10px 0 0px 20px;

  background-color: #fff;
  border-radius: 15px;
  flex-direction: row;

  button {
    margin-top: 10px;
    padding-bottom: 20px;
    border: none;

    ${(props) =>
      props.selectedRoleEnum === RoleEnum.USER &&
      css`
        border-bottom: 3px solid #bb4546;
        font-weight: bold;

        & + button {
          border-bottom: none;
          font-weight: normal;
        }
      `}

    background-color: #fff;
    font-size: 15px;

    & + button {
      ${(props) =>
        props.selectedRoleEnum === RoleEnum.PERMISSION &&
        css`
          border-bottom: 3px solid #bb4546;
          font-weight: bold;
        `}

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
      width: 40%;
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

export const TableContainerStyled = styled(TableContainer)`
  margin-left: 20px;
  max-width: 166vh;

  && {
    margin-right: 60px;
    border-bottom-color: #bb4546;
  }
`;

export const TableCellTitle = styled(TableCell)`
  && {
    font-weight: bold;
  }
`;

export const StyledTableRow = styled(TableRow)`
  &:nth-child(even) {
    background-color: #f8f8f8;
  }
`;

export const TableCellContent = styled(TableCell)`
  && {
    border-bottom: none;
  }
`;

export const TableCellContentIcons = styled(TableCell)`
  && {
    border-bottom: none;
    display: flex;
    justify-content: flex-end;
  }
`;

export const PaginationContent = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
`;

export const PermissionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const PermissionContent = styled.div`
  display: flex;
  height: 40vh;
  width: 40vh;
  background-color: #fff;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 15px;

  header {
    margin: 20px 20px 30px 30px;
    height: 5vh;
  }
  h3 {
    color: #111;
    margin-top: 5px;
  }
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const PermissionRoles = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 0px 150px 30px;
  height: 25vh;

  div {
    display: flex;
    flex-direction: column;
  }
  button {
    border: none;
    border-bottom: 3px solid #bb4546;
    text-align: left;
    background-color: #fff;
    color: #737088;
    font-size: 14px;
  }
`;

export const PermissionRules = styled.div`
  display: flex;
  background-color: #fff;
  width: 125vh;
  height: 75vh;
  border-radius: 15px;
  flex-direction: column;

  header {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin: 20px 20px;
    margin-left: 30px;
  }

  h3 {
    color: #111;
    margin-top: 5px;
  }
`;

export const PermissionControls = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  margin: 20px 0px 0px 20px;
  justify-content: space-between;

  div {
    display: flex;

    > div {
      margin-left: 20px;
      display: flex;
      flex-direction: column;
      align-items: left;

      span {
        color: #111;
        font-weight: bold;
        font-size: 16px;
      }

      h4 {
        color: #737088;
        font-size: 15px;
      }
    }
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

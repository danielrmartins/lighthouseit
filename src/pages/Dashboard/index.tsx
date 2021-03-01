import React, { useState } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';

import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';

import { GoGraph } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdExitToApp, MdModeEdit } from 'react-icons/md';
import { AiOutlineSearch, AiOutlineClose, AiOutlineSave } from 'react-icons/ai';
import {
  FaEye,
  FaUserEdit,
  FaUserShield,
  FaTrash,
  FaPlus,
} from 'react-icons/fa';

import logoImg from '../../assets/logo.png';
import profile from '../../assets/profile.jpg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import userMock from '../../mocks/useMock';
import permissionRoleMock from '../../mocks/permissionRoleMock';
import { ButtonTypeEnum } from '../../enums/buttonTypeEnum';
import permissionRulesMock from '../../mocks/permissionRulesMock';

import { RoleEnum } from '../../enums/roleEnum';

import {
  Container,
  MenuContent,
  MenuStyle,
  Divider,
  MenuOptions,
  Profile,
  PageContent,
  Header,
  Roles,
  UserContent,
  UserContentHeader,
  TableContainerStyled,
  TableCellTitle,
  StyledTableRow,
  TableCellContent,
  TableCellContentIcons,
  PaginationContent,
  PermissionContainer,
  PermissionContent,
  PermissionRoles,
  PermissionRules,
  PermissionControls,
  ButtonDiv,
} from './styles';

// eslint-disable-next-line no-shadow

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}
interface Props extends SwitchProps {
  classes: Styles;
}

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }),
)(({ classes, ...props }: Props) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

const Dashboard: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<RoleEnum>(
    RoleEnum.PERMISSION,
  );

  return (
    <Container>
      <MenuContent>
        <MenuStyle>
          <img src={logoImg} alt="Logo" />

          <Divider>
            <MenuOptions>
              <button type="button">
                <GoGraph style={{ verticalAlign: 'top', marginRight: 20 }} />
                On Board
              </button>
              <button type="button" /* onClick={() => alert('olá')} */>
                <GoGraph style={{ verticalAlign: 'top', marginRight: 20 }} />
                Configurações
              </button>
              <button type="button">
                <IoMdNotificationsOutline
                  style={{ verticalAlign: 'top', marginRight: 20 }}
                />
                Notificações
              </button>
              <button type="button">
                <MdExitToApp
                  style={{ verticalAlign: 'top', marginRight: 20 }}
                />
                Sair
              </button>
            </MenuOptions>

            <Profile>
              <img src={profile} alt="Perfil" />
              <div>
                <strong>Kristine Müller</strong>
                <span>Ver Perfil</span>
              </div>
            </Profile>
          </Divider>
        </MenuStyle>
      </MenuContent>

      {/* VAI APARECER QUANDO CLICAR EM CONFIGURAÇÕES */}

      <PageContent>
        <Header>
          <div>
            <h5>Configurações</h5>
            <button type="button">Voltar</button>
          </div>
        </Header>

        <Roles selectedRoleEnum={selectedRole}>
          <button type="button" onClick={() => setSelectedRole(RoleEnum.USER)}>
            Usuários
          </button>
          <button
            type="button"
            onClick={() => setSelectedRole(RoleEnum.PERMISSION)}
          >
            Permissões
          </button>
        </Roles>

        {selectedRole === RoleEnum.USER ? (
          <UserContent>
            <UserContentHeader>
              <div>
                <h5>EBP | Usuários</h5>
                <span>
                  Inclua e edite os dados dos usuários e suas permissões
                </span>
              </div>
              <div>
                <Input icon={AiOutlineSearch} placeholder="Pesquisar" />
              </div>
            </UserContentHeader>

            <TableContainerStyled>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCellTitle>Usuário</TableCellTitle>
                    <TableCellTitle>Cargo</TableCellTitle>
                    <TableCellTitle>Data de Inclusão</TableCellTitle>
                    <TableCellTitle colSpan={2}>Atualizado por</TableCellTitle>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userMock.map((user) => (
                    <StyledTableRow key={user.id}>
                      <TableCellContent>{user.name}</TableCellContent>
                      <TableCellContent>{user.role}</TableCellContent>
                      <TableCellContent>{user.createdAt}</TableCellContent>
                      <TableCellContent>{user.updatedFor}</TableCellContent>
                      <TableCellContentIcons>
                        <FaEye
                          size={16}
                          style={{ marginRight: 10, color: '#9495a3' }}
                        />
                        <FaUserEdit
                          size={16}
                          style={{ marginRight: 10, color: '#9495a3' }}
                        />
                        <FaUserShield
                          size={16}
                          style={{ marginRight: 10, color: '#9495a3' }}
                        />
                        <FaTrash
                          size={16}
                          style={{ marginRight: 10, color: '#9495a3' }}
                        />
                      </TableCellContentIcons>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainerStyled>
            <PaginationContent>
              <Pagination
                count={9}
                variant="outlined"
                shape="rounded"
                siblingCount={2}
                color="standard"
                style={{ marginRight: 20 }}
              />
            </PaginationContent>
          </UserContent>
        ) : (
          <PermissionContainer>
            <PermissionContent>
              <header>
                <div>
                  <h3>Permissões</h3>
                  <Button
                    icon={FaPlus}
                    title="Adicionar"
                    typeButton={ButtonTypeEnum.ADD}
                  />
                </div>
              </header>
              <PermissionRoles>
                <div>
                  {permissionRoleMock.map((role) => (
                    <button type="button" key={role.id}>
                      {role.id} &nbsp; &nbsp; {role.name}
                    </button>
                  ))}
                </div>
              </PermissionRoles>
            </PermissionContent>
            <PermissionRules>
              <header>
                <h3>PL Project Leader (EBP)</h3>
                <div>
                  <MdModeEdit color="gray" style={{ marginRight: 10 }} />
                  <FaTrash color="gray" style={{ marginRight: 10 }} />
                </div>
              </header>
              <PermissionControls>
                {permissionRulesMock.map((rule) => (
                  <div>
                    <IOSSwitch checked={rule.checked} />
                    <div>
                      <span>{rule.name} </span>
                      <h4>{rule.description} </h4>
                    </div>
                  </div>
                ))}
              </PermissionControls>
              <ButtonDiv>
                <Button
                  icon={AiOutlineClose}
                  title="Cancelar"
                  typeButton={ButtonTypeEnum.CANCEL}
                />
                <Button
                  icon={AiOutlineSave}
                  title="Salvar"
                  typeButton={ButtonTypeEnum.SAVE}
                />
              </ButtonDiv>
            </PermissionRules>
          </PermissionContainer>
        )}
      </PageContent>
    </Container>
  );
};

export default Dashboard;

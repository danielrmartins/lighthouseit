import React from 'react';

import { GoGraph } from 'react-icons/go';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdExitToApp } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';

import logoImg from '../../assets/logo.png';
import profile from '../../assets/profile.jpg';
import Input from '../../components/Input';

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
} from './styles';

const Dashboard: React.FC = () => {
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

        <Roles>
          <button type="button">Usuários</button>
          <button type="button">Permissões</button>
        </Roles>

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
        </UserContent>
      </PageContent>
    </Container>
  );
};

export default Dashboard;

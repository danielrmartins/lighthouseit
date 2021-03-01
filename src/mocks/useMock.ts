interface UserMockProps {
  id: string;
  name: string;
  role: string;
  createdAt: string;
  updatedFor: string;
}

const userMock: UserMockProps[] = [
  {
    id: '1',
    name: 'Kristine Müller',
    role: 'Gestor Ambiental',
    createdAt: '20/08/2012',
    updatedFor: 'Kristine Müller',
  },
  {
    id: '2',
    name: 'Eli Kear',
    role: 'Gestor Ambiental',
    createdAt: '19/03/2014',
    updatedFor: 'Kristine Müller',
  },
  {
    id: '3',
    name: 'Maida Gooch',
    role: 'Gestor Ambiental',
    createdAt: '22/03/2014',
    updatedFor: 'Kristine Müller',
  },
  {
    id: '4',
    name: 'Elna Burgess',
    role: 'Gestor Ambiental',
    createdAt: '27/01/2017',
    updatedFor: 'Kristine Müller',
  },
  {
    id: '5',
    name: 'Janel Blazek',
    role: 'Gestor Ambiental',
    createdAt: '03/08/2017',
    updatedFor: 'Kristine Müller',
  },
];

export default userMock;

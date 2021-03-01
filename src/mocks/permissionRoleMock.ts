interface PermissionRolePros {
  id: string;
  name: string;
}

const permissionRoleMock: PermissionRolePros[] = [
  {
    id: 'AS',
    name: 'Administrador do Sistema',
  },
  {
    id: 'PO',
    name: 'Product Owner (EBP)',
  },
  {
    id: 'POC',
    name: 'Project Owner (cliente)',
  },
  {
    id: 'PLC',
    name: 'Project Leader (cliente)',
  },
  {
    id: 'PL ',
    name: 'Project Leader (EBP)',
  },
  {
    id: 'ANA',
    name: 'Analista (EBP)',
  },
];

export default permissionRoleMock;

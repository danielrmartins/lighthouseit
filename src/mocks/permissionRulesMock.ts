interface PermissionRulesProps {
  id: string;
  name: string;
  description: string;
  checked: boolean;
}

const permissionRulesMock: PermissionRulesProps[] = [
  {
    id: '1',
    name: 'Visualizar, Inserir e Editar Indicadores',
    description: 'Visualizar indicadores estratégicos do CLIENTE',
    checked: true,
  },
  {
    id: '2',
    name: 'Controlar Acesso',
    description:
      'Permitir que funcionários da EBP, ou CLIENTE, tenham autorização para acessar informações/telas.',
    checked: false,
  },
  {
    id: '3',
    name: 'Inserir e Visualizar Fotos de Auditoria',
    description: 'Inserir, visualizar e editar fotos',
    checked: true,
  },
  {
    id: '4',
    name: 'Inserir e Consultar Membros',
    description: 'Visualizar, inserir e editar membros de equipe',
    checked: true,
  },
  {
    id: '5',
    name: 'Visualizar Indicadores Financeiros',
    description:
      'Visualizar indicadores financeiros do CLIENTE (múltiplas FACILITIES)',
    checked: true,
  },
  {
    id: '6',
    name: 'Criar, Visualizar e Editar Plano de Ação/Atividades',
    description:
      'Criar plano de ações, com indicação de responsável, datas previstas e início e fim, avanço, status (não iniciada, atrasada, em execução), indicar relacionado',
    checked: true,
  },
  {
    id: '7',
    name: 'Inserir e Visualizar Documentos',
    description: 'Inserir, visualizar e editar documentos',
    checked: true,
  },
];

export default permissionRulesMock;

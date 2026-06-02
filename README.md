# OrangeHRM Automation Testing

Projeto de automação de testes desenvolvido utilizando Cypress e JavaScript com foco na validação de funcionalidades críticas da aplicação OrangeHRM.

## Objetivo

Aplicar conceitos de Quality Assurance e automação de testes através da implementação de cenários reais utilizando boas práticas de desenvolvimento e organização do código.

## Tecnologias Utilizadas

- Cypress
- JavaScript
- Git
- GitHub
- Postman
- Page Objects Pattern

## Funcionalidades Automatizadas

### Login

- Login com usuário válido
- Login com usuário inválido
- Validação de mensagens de erro

### My Info

- Atualização de dados pessoais
- Validação do salvamento das informações
- Verificação do fluxo de edição de perfil

## Estrutura do Projeto

```text
cypress
├── e2e
├── pages
├── selectors
├── fixtures
└── support
```

## Boas Práticas Aplicadas

- Arquitetura Page Objects
- Organização e reutilização de código
- Separação de seletores por funcionalidade
- Estruturação de cenários de teste
- Versionamento utilizando Git e GitHub

## Como Executar

### Instalar dependências

```bash
npm install
```

### Executar interface Cypress

```bash
npx cypress open
```

### Executar testes em linha de comando

```bash
npx cypress run
```

## Autor

Felipe Lino

LinkedIn:
www.linkedin.com/in/felipe-lino

GitHub:
github.com/Felipe-LinoQA

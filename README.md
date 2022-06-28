# Portuno

Esta aplicação é referente ao desenvolvimento de um aplicativo que tem como objetivo otimizar a ocupação de salas no bloco do SMD. Ele foi criado durante a disciplina de Projeto 1 e utilizando os conhecimentos de Autoração Multimídia, IHC e Design de Interfaces Gráficas

### Procedimentos de uso Front-end
  1 | `Front-end fica na pasta front, lembre-se de executálo em formato mobile`
  
  2 | `As informações de matrículas/siape e senha dos usuários válidos estão na página MockUsers`
  
### Procedimentos de uso Back-end
 1 | Ao baixar não esqueça de executar o `npm install`
  
 2 | Dentro da pasta back crie um arquivo `.env` e adicione as seguintes informações:
  
  ```
        # VARIÁVEIS DE AMBIENTE #

      #express server config

      PORT=8080
      HOST=localhost
      HOST_URL=http://localhost:8080

      #firebase database config

      API_KEY=AIzaSyAN6gbhw3P7JzXJwzgXkFQnmYkbvHM8MZM
      AUTH_DOMAIN=sistemadeocupacaodesala.firebaseapp.com
      DATABASE_URL=https://sistemadeocupacaodesala-default-rtdb.firebaseio.com
      PROJECT_ID=sistemadeocupacaodesala
      STORAGE_BUCKET=sistemadeocupacaodesala.appspot.com
      MESSAGING_SENDER_ID=917705094691
      APP_ID=1:917705094691:web:43f4c4bd16f7e55b68a396
      MEASUREMENT_ID=G-ZPP41ER5S7
  
  ```
 3 | Use ` npm start` para iniciar
 
 4 | Experimente utilizar os métodos CRUD de usuários : ` GET, POST, PUT, UPDATE, DELETE`
 
### Equipe The Divers
| Nome  |  Matrícula  | 
| ------------------- | ------------------- |
| Eduardo Oliveira Viana | 512182 |
| João Victor Barroso Alves | 509697 |
| Lazaro Natanael da Silva | 511849 |
| Marcos Erick Gomes Miranda | 509686 |
| Vládia Helen Ferreira Farias | 511730 |

### Mapa de Requisitos

| Requisito  |  Definição  |  Código   |
| ------------------- | ------------------- |--------------------------------|
|  RF G001 |  Exibir tela de Login | [Front-end](https://github.com/The-Divers/portuno-app/blob/ae8a9b9ae0b8b69e3edd08a6e3221722dfa544a6/front/login.html#L14-L23)|
|  RF G002 |  Validar simples de formulário de Login | [Front-end](https://github.com/The-Divers/portuno-app/blob/ae8a9b9ae0b8b69e3edd08a6e3221722dfa544a6/front/login.html#L19-L20)|
|  RF G003 |  Validar dados de Login com dados do banco | [Mock](https://github.com/The-Divers/portuno-app/blob/ae8a9b9ae0b8b69e3edd08a6e3221722dfa544a6/front/MockUsers.js#L43-L65)|
|  RF G004 |  Efetivar Login | [Mock](https://github.com/The-Divers/portuno-app/blob/ae8a9b9ae0b8b69e3edd08a6e3221722dfa544a6/front/MockUsers.js#L43-L75) |
|  RF G005 |  Visualizar tela de salas | [Front-end](https://github.com/The-Divers/portuno-app/blob/ae8a9b9ae0b8b69e3edd08a6e3221722dfa544a6/front/home.html#L18-L68) |
|  RF G006 |  Navegar por diferentes andares | [Front-end](https://github.com/The-Divers/portuno-app/blob/ae8a9b9ae0b8b69e3edd08a6e3221722dfa544a6/front/home.html#L20-L25) |
|  RF G007 |  Visualizar informações específicas de uma sala | [Front-end](https://github.com/The-Divers/portuno-app/blob/ae8a9b9ae0b8b69e3edd08a6e3221722dfa544a6/front/sala.html#L42-L83) | 
|  RF G008 |  Visualizar horários de aulas e reservas futuras | Não iniciado | 
|  RF G009 |  Visualizar tela de filtros | [Front](https://github.com/The-Divers/portuno-app/blob/730397095c00394ab7f614f54c960670fd795b7d/front/views/partials/offcanvas-filtros.ejs#L1-L46) | 
|  RF G010 |  Selecionar filtros | não iniciado | 
|  RF G011 |  Aplicar filtro | não iniciado | 
|  RF G012 |  Receber notificações | não iniciado | 
|  RF G013 |  Visualizar tela de perfil | [Front-end](https://github.com/The-Divers/portuno-app/blob/ae8a9b9ae0b8b69e3edd08a6e3221722dfa544a6/front/perfil.html#L16-L28) | 
|  RF G014 |  Permitir edição de dados de perfil | Desenvolvimento | 
|  RF G015 |  Validar edição de dados | não iniciado | 
|  RF G016 |  Efetivar atualização do perfil | Desenvolvimento | 

| Requisito  |  Definição  |  Código   |
| ------------------- | ------------------- |--------------------------------|
|  RF UC001 | Visualizar tela de pedido de reserva | não iniciado |
|  RF UC002 | Validar pedido de reserva | não iniciado |
|  RF UC003 | Cronometrar tempo da reserva | não iniciado |
|  RF UC004 | Alertar término da reserva | não iniciado |
|  RF UC005 | Visualizar tela de transferência de chave | não iniciado |
|  RF UC006 | Validar transferência de chave | não iniciado |
|  RF UC007 | Fazer transferência de chave para outro usuário | não iniciado |
|  RF UC008 | Receber transferência de chave de outro usuário | não iniciado |
|  RF UC009 | Encerrar ocupação | não iniciado |
|  RF UC010 | Visualizar tela de feedback | não iniciado |
|  RF UC011 | Submeter feedback | não iniciado |

| Requisito  |  Definição  |  Código   |
| ------------------- | ------------------- |--------------------------------|
|  RF UA001 | Editar informações de salas  | não iniciado |
|  RF UA002 | Editar horários de aula e reservas futuras | não iniciado |
|  RF UA003 | Visualizar tela de permissões | não iniciado |
|  RF UA004 | Editar permissões de usuários alunos | não iniciado |
|  RF UA005 | Visualizar tela de pedidos de reservas | Desenvolvimento |
|  RF UA006 | Receber pedidos de reserva | não iniciado |
|  RF UA007 | Responder pedidos de reserva | não iniciado |
|  RF UA008 | Receber transferência de chave de outro usuário | não iniciado |
|  RF UA009 | Visualizar tela de feedback | não iniciado |
|  RF UA010 | Visualizar tela de histórico de reservas | não iniciado |
|  RF UA011 | Pesquisar no  histórico de reservas | não iniciado |


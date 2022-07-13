![path177-2](https://user-images.githubusercontent.com/86852231/178410101-d90a74ce-97fd-436a-8b4e-dd4555ff6e44.png)
![Group 27 (2)](https://user-images.githubusercontent.com/86852231/178804601-1b6cc383-5761-460e-98e4-d05f7bd5c703.png)


# Portuno


Esta aplicação é referente ao desenvolvimento de um aplicativo que tem como objetivo otimizar a ocupação de salas no bloco do SMD. Ele foi criado durante a disciplina de Projeto 1 e utilizando os conhecimentos de Autoração Multimídia, IHC e Design de Interfaces Gráficas

### 🛠 Procedimentos de uso Front-end
  1 | `Front-end fica na pasta front, lembre-se de executálo em formato mobile`
  
  2 | `As informações de matrículas/siape e senha dos usuários válidos estão na página MockUsers`
  
### 🛠 Procedimentos de uso Back-end
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
 
 3 | Para que o back tenha acesso ao `Firebase` é necessário que o computador tenha uma chave de serviço do GCloud vinculada ao projeto!
 Entretanto a maneira mas fácil de se relizar essa autenticação é pedidnod a equipe para adicionar o `email` do interessado em testar no grupo do Projeto. Por fim, já estando no grupo, o interessado pode baixar o `GCloud Shell`, e conectá-lo como Projeto!
 
  Para mais informações, veja: [Sobre autenticação com o firebase](https://cloud.google.com/docs/authentication/getting-started#create-service-account-console) ou entre em contato: `joaovba2002@gmail.com` 
 
 3 | Use ` npm start` para iniciar
 
 4 | Experimente utilizar os métodos CRUD de usuários : ` GET, POST, PUT, UPDATE, DELETE`
 
### 👥 The Divers
| Nome dos integrantes  |
| ------------------- |
| Eduardo Oliveira Viana |
| João Victor Barroso Alves |
| Lazaro Natanael da Silva |
| Marcos Erick Gomes Miranda |
| Vládia Helen Ferreira Farias |

### 🎯 Mapa de Requisitos

| Requisito  |  Definição  |  Código   |
| ------------------- | ------------------- |--------------------------------|
|  RF G001 |  Exibir tela de Login | [Front-end](https://github.com/The-Divers/portuno-app/blob/d18a0e94245ed3494e8041ad270c8c5061005733/front/views/pages/login.ejs#L6-L27)|
|  RF G002 |  Validar simples de formulário de Login | [Front-end](https://github.com/The-Divers/portuno-app/blob/d18a0e94245ed3494e8041ad270c8c5061005733/front/views/pages/login.ejs#L14-L19)|
|  RF G003 |  Validar dados de Login com dados do banco | [Mock](https://github.com/The-Divers/portuno-app/blob/ae8a9b9ae0b8b69e3edd08a6e3221722dfa544a6/front/MockUsers.js#L43-L65)|
|  RF G004 |  Efetivar Login | [Mock](https://github.com/The-Divers/portuno-app/blob/ae8a9b9ae0b8b69e3edd08a6e3221722dfa544a6/front/MockUsers.js#L43-L75) |
|  RF G005 |  Visualizar tela de salas | [Front-end](https://github.com/The-Divers/portuno-app/blob/d18a0e94245ed3494e8041ad270c8c5061005733/front/views/pages/home.ejs#L26-L55) |
|  RF G006 |  Navegar por diferentes andares | [Front-end](https://github.com/The-Divers/portuno-app/blob/d18a0e94245ed3494e8041ad270c8c5061005733/front/views/pages/home.ejs#L5-L14) |
|  RF G007 |  Visualizar informações específicas de uma sala | [Front-end](https://github.com/The-Divers/portuno-app/blob/d18a0e94245ed3494e8041ad270c8c5061005733/front/views/partials/modal-sala.ejs#L1-L34) | 
|  RF G008 |  Visualizar horários de aulas | [Mock](https://github.com/The-Divers/portuno-app/blob/main/front/views/pages/horarios.ejs) | 
|  RF G009 |  Visualizar tela de filtros | [Front](https://github.com/The-Divers/portuno-app/blob/730397095c00394ab7f614f54c960670fd795b7d/front/views/partials/offcanvas-filtros.ejs#L1-L46) | 
|  RF G010 |  Aplicar filtro | [Front-end & Back](https://github.com/The-Divers/portuno-app/blob/c774dd6acca3525d9e93214419a34bcdacce2fef/front/routes.js#L69-L200) | 
|  RF G011 |  Visualizar tela de perfil | [Front-end](https://github.com/The-Divers/portuno-app/blob/d18a0e94245ed3494e8041ad270c8c5061005733/front/views/pages/perfil.ejs#L3-L37) | 
|  RF G012 |  Permitir edição de dados de perfil | Suspenso | 
|  RF G013 |  Validar edição de dados | Suspenso | 
|  RF G014 |  Efetivar atualização do perfil | Suspenso | 
|  RF G015 |  Realizar Logout | [Front](https://github.com/The-Divers/portuno-app/blob/568387c215abec14c7c5cbb6c2ebc144c946150e/front/views/pages/perfil.ejs#L34-L36) | 

| Requisito  |  Definição  |  Código   |
| ------------------- | ------------------- |--------------------------------|
|  RF UC001 | Visualizar tela de pedido de reserva | [Front-end](https://github.com/The-Divers/portuno-app/blob/14868c743cdc7b70c90c2a44c5ad986b25807299/front/views/pages/home.ejs#L88-L134) |
|  RF UC002 | Enviar pedido de reserva | [Em desenvolvimento](https://github.com/The-Divers/portuno-app/blob/c774dd6acca3525d9e93214419a34bcdacce2fef/front/routes.js#L202-L218) |
|  RF UC003 | Visulaizar tela de reserva com ocupação atual | [Em desenvolvimento](https://github.com/The-Divers/portuno-app/blob/c774dd6acca3525d9e93214419a34bcdacce2fef/front/views/pages/reservas.ejs#L6-L27) |
|  RF UC004 | Visualizar tela de transferência de chave |  [Front](https://github.com/The-Divers/portuno-app/blob/main/front/views/partials/transferencia.ejs) |
|  RF UC005 | Validar transferência de chave | Suspenso |
|  RF UC006 | Fazer transferência de chave para outro usuário | Suspenso |
|  RF UC007 | Receber transferência de chave de outro usuário | Suspenso |
|  RF UC008 | Encerrar ocupação | [Back](https://github.com/The-Divers/portuno-app/blob/main/back/routes.js) |

| Requisito  |  Definição  |  Código   |
| ------------------- | ------------------- |--------------------------------|
|  RF UA001 | Visualizar tela de edição de salas | [Front](https://github.com/The-Divers/portuno-app/blob/main/admin/views/partials/editar-sala.ejs)|
|  RF UA002 | Editar informações de salas| Suspenso |
|  RF UA003 | Visualizar telas de pedidos de reserva |[Front-end](https://github.com/The-Divers/portuno-app/blob/56de5c7a5561d656ceb6ed3fb730c462bef23947/admin/views/pages/pedidos.ejs#L41-L76) |
|  RF UA004 | Receber pedidos de reserva| [Front & Back](https://github.com/The-Divers/portuno-app/blob/3c4a29f0a15206e779af661656623ac2fcd25f14/admin/routes.js#L53-L65) |
|  RF UA005 | Responder pedidos de reserva | [Front & Back](https://github.com/The-Divers/portuno-app/blob/77020887aaa0ec221f9a815e7eb2dc0009bb14dc/admin/routes.js#L57-L87) |
|  RF UA006 | Visualizar tela de histórico de reservas | [Front-end](https://github.com/The-Divers/portuno-app/blob/56de5c7a5561d656ceb6ed3fb730c462bef23947/admin/views/pages/historico.ejs#L38-L78) |

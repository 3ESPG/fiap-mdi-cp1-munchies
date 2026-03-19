# **Munchies** - App de Pedidos da Cantina FIAP
 
## 📌 Sobre o Projeto
 
O **Munchies** é um aplicativo mobile desenvolvido para melhorar a experiência dos alunos da FIAP na utilização da cantina.
 
O principal problema identificado foi o grande volume de filas nos horários de pico, causando demora no atendimento e perda de tempo dos alunos.
 
A solução proposta foi um aplicativo onde o usuário pode:
 
* Visualizar o cardápio
* Fazer pedidos diretamente pelo celular
* Realizar o pagamento
* Apenas retirar o pedido no balcão, sem enfrentar filas
 
## 🎯 Operação escolhida
 
A operação escolhida foi a **cantina da FIAP**, pois é um dos pontos mais críticos no dia a dia dos alunos devido às filas e ao tempo de espera.
 
## ⚙️ Funcionalidades
 
* Visualização de produtos (cardápio)
* Adição de itens ao carrinho
* Tela de carrinho com resumo do pedido
* Simulação de finalização de pedido
* Tela de perfil do usuário
* Tela sobre o aplicativo
* Navegação entre telas utilizando Expo Router
 
## 👨‍💻 Integrantes
 
* Felipe Braunstein e Silva - RM554483
* Felipe do Nascimento Fernandes - RM554598
* Henrique Ignacio Bartalo - RM555274
* Gustavo Henrique Martins - RM556956
 
## ▶️ Como Rodar o Projeto
 
### Pré-requisitos
 
* Node.js instalado
* Expo CLI
* Aplicativo Expo Go no celular OU Android Studio
 
### Passos
 
```bash
git clone <link-do-repositorio>
cd ProjetoMunchies
npm install
npx expo start
```
 
Depois:
 
* Pressione **A** para abrir no Android Studio
  ou
* Escaneie o QR Code com o Expo Go
 
## 🧠 Decisões Técnicas
 
### Estrutura
 
O projeto foi estruturado utilizando o **Expo Router**, com separação de telas dentro da pasta `app/`.
 
Também foi criada uma pasta `components/` para reutilização de componentes.
 
### Hooks utilizados
 
* `useState`: gerenciamento de estado do carrinho
* `useEffect`: simulação de carregamento de dados
 
### Navegação
 
A navegação foi feita com **Expo Router**, permitindo transição entre telas de forma simples e organizada.
 
## 🚫 Observações
 
O projeto não utiliza APIs externas ou funcionalidades avançadas fora do escopo da disciplina, mantendo-se dentro dos conteúdos apresentados até a Aula 05.

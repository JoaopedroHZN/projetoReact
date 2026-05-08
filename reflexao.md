1- Tem as tabelas, os li, divs, ids, nome e preco para cada item
2- com varios itens a pagina vai descendo podendo scrolar

3- O codigo ficou menor
4- apenas em um lugar no App.css no nome da variavel .cardapio-container
5- atraves da importacao e exportacao do App.jsx e o ItemCardapio

6-O total passa a valer 1. Porém, o React não tem como adivinhar que essa mudança aconteceu. Ele é "cego" para variáveis comuns. Como ele não foi avisado, ele não redesenha a tela, e o navegador continua mostrando o número 0 antigo.
Quando você usa o useState, a função que ele te entrega (o setTotalPedido) funciona como um alarme de incêndio. Ao fazer setTotalPedido(1), você não está apenas mudando o valor na memória, você está gritando para o React: "Chefe, o dado mudou! Apaga a tela e desenha tudo de novo com esse valor novo!" (Isso é o que chamamos de Re-render).

7-Ele guarda a variável principal (totalPedido).
Ele exibe essa variável ali mesmo no topo da tela.
Ele não pode clicar no botão (porque o botão está no outro arquivo), então ele despacha a função incrementarPedido lá para baixo, entregando ela nas mãos do componente ItemCardapio como uma Prop.
Quando o usuário clica no botão lá no filho, é a função do pai que é ativada. O pai altera o valor no cofre dele e, como ele manda no projeto todo, ele força a tela inteira a se atualizar com o número novo!

8- O usuário clica no <button> do X-Burger.
O botão HTML aciona o onClick.
O onClick dispara a prop aoAdicionar que o filho recebeu.
O React fala: "Opa, peraí, essa aoAdicionar na verdade é um apelido para a função incrementarPedido que mora lá no App.jsx!".
O React "sobe" o sinal até o App.jsx e executa a função lá dentro.
A função incrementarPedido usa o setTotalPedido (o alarme de incêndio).
O App.jsx grita: "O estado mudou!" e redesenha a tela toda, mostrando o número 1 no carrinho.


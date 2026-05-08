// src/App.jsx
import { useState } from 'react'; // 1. Importamos o Hook de estado
import './App.css';
import ItemCardapio from './ItemCardapio';

function App() {
  // 2. Criamos o estado. 'totalPedido' é o valor, 'setTotalPedido' é a função para mudar esse valor.
  const [totalPedido, setTotalPedido] = useState(0);

  // 3. Função que será disparada ao clicar no botão
  const incrementarPedido = () => {
    setTotalPedido(totalPedido + 1);
  };

  const itensCardapio = [
    { id: 1, nome: 'X-Burger', preco: 15.00 },
    { id: 2, nome: 'X-Salada', preco: 18.50 },
    { id: 3, nome: 'X-Bacon', preco: 22.00 },
    { id: 4, nome: 'Batata Frita', preco: 12.00 },
    { id: 5, nome: 'Coca-Cola Lata', preco: 6.00 },
  ];

  return (
    <div className="cardapio-container">
      {/* 4. Exibimos o total aqui no topo */}
      <div className="header-pedido">
        <h1>Cardápio 🍔</h1>
        <div className="contador-flutuante">
          🛒 Itens no Pedido: <strong>{totalPedido}</strong>
        </div>
      </div>
      
      <ul>
        {itensCardapio.map((item) => (
          <ItemCardapio 
            key={item.id} 
            nome={item.nome} 
            preco={item.preco} 
            // 5. Passamos a função de incrementar como uma Prop
            aoAdicionar={incrementarPedido}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
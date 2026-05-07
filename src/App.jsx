import './App.css'; // Mantém a importação do CSS padrão do Vite (opcional)

function App() {
  // 1. Criamos a nossa "base de dados" local com os itens do cardápio
  const itensCardapio = [
    { id: 1, nome: 'X-Burger', preco: 15.00 },
    { id: 2, nome: 'X-Salada', preco: 18.50 },
    { id: 3, nome: 'X-Bacon', preco: 22.00 },
    { id: 4, nome: 'Batata Frita', preco: 12.00 },
    { id: 5, nome: 'Coca-Cola Lata', preco: 6.00 },
  ];

  return (
    // No React, a gente sempre precisa retornar tudo dentro de uma "caixa" (como essa div principal)
    <div className="cardapio-container">
      <h1>Cardápio da Lanchonete 🍔</h1>
      
      <ul>
        {/* 2. O .map() vai varrer o nosso array e criar um <li> para cada item */}
        {itensCardapio.map((item) => (
          // O React EXIGE que cada item de uma lista tenha um "key" único para ele não se perder
          <li key={item.id}>
            <strong>{item.nome}</strong> 
            <br />
            {/* O toFixed(2) garante que o preço sempre tenha duas casas decimais (ex: 15.00) */}
            <span>R$ {item.preco.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
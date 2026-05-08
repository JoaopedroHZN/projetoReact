// src/ItemCardapio.jsx

function ItemCardapio({ nome, preco, aoAdicionar }) {
  return (
    <li>
      <div className="item-info">
        <strong>{nome}</strong>
        <span>R$ {preco.toFixed(2)}</span>
      </div>
      
      {/* 6. Botão que dispara a função que veio lá do App */}
      <button className="btn-adicionar" onClick={aoAdicionar}>
        Adicionar
      </button>
    </li>
  );
}

export default ItemCardapio;
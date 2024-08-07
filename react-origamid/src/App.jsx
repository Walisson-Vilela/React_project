import { useState } from "react";
import "./App.css";

const luana = {
  cliente: "Luana",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 1000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

function App() {
  const dados = luana;
  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);

  return (
    <div style={{ display: "inline-block" }}>
      Nome: {dados.cliente}
      <br />
      Idade: {dados.idade}
      <br />
      Total gasto: {total} <br />
      <div style={{ display: "flex" }}>
        Situação:{' '}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativa"}
        </span>
      </div>
      <p>{total > 10000 && 'Voce esta gastando muito'}</p>
    </div>
  );
}

export default App;

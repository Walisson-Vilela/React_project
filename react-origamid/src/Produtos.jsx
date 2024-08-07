import React from "react";
import Titulo from "./Titulo";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];
const Produtos = () => {
  return (
    <section>
      <Titulo texto={"Produtos"} />
      {produtos.map((produto) => (
        <ul>
          <li key={produto.nome}>{produto.nome}</li>
        </ul>
      ))}
    </section>
  );
};

export default Produtos;

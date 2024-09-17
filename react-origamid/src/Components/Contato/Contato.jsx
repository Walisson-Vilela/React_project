import React from "react";
import styles from "./contato.module.css";
import Foto from "../../img/contato.jpg";
import Head from "../Head";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description = "Entre em contato" />
      <img src={Foto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.dados}>
          <li>walissonvilela@gmail.com</li>
          <li>(31)99999-9999</li>
          <li>Rua Goitacazes, 999, Belo Horizonte</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;

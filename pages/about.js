import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Projeto de uma pokedex consumindo a PokeAPI utilizando Next.js, com o objetivo de validar os conhecimentos obtidos nesta tecnologia!</p>
      <Image src="/images/charizard.png" width="300" height="300" alt="charizard" />
    </div>
  );
}
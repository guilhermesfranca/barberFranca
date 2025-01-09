"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Logo from "/public/logo2.png";
import Sign from "/public/sign.png";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Home() {
  const [tema, setTema] = useState(false);
  const darkMode = styles.darkMode;
  const lightMode = styles.lightMode;

  function alterarTema() {
    setTema(!tema);
  }

  return (
    <div className={tema ? darkMode : lightMode}>
      <header className={styles.container_header}>
        <Image src={Logo} className={styles.logo} />
        <button onClick={alterarTema}>{tema ? <BsSun /> : <BsMoon />}</button>
      </header>
      <div className={styles.topo}>
        <h1>Be Stylish</h1>
      </div>
      <main className={styles.container_main}>
        <div>
          <h2>Welcome to Barber França</h2>
          <h3>
            Na nossa barbearia, contamos com profissionais altamente
            qualificados, prontos para atender suas expectativas com excelência
            e oferecer uma experiência única.
          </h3>
          <p>
            Desde 2010, nossa barbearia tem se dedicado a transformar
            expectativas em realidade. Com uma equipe de profissionais
            qualificados e apaixonados pelo que fazem, oferecemos um atendimento
            personalizado que visa não só a transformação do visual, mas uma
            experiência única em cada visita. Ao longo dos anos, temos orgulho
            de conquistar a confiança de nossos clientes, sempre focados em
            entregar o melhor serviço e um cuidado especial em cada detalhe
          </p>
        </div>
        <Image className={styles.sign} src={Sign} />
      </main>
      <footer className={styles.footer}>
        <p>
          Desenvolvido por Guilherme França, como parte do meu aprendizado sobre
          useState Hook
        </p>
        <p>finalidade única e exclusiva para aprendizado</p>
      </footer>
    </div>
  );
}

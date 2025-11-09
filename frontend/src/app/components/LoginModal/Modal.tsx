"use client";
import React, { useState } from "react";
import styles from "./Modal.module.css"

const LoginModal = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({login, password});
  }

  return (
    <div className={styles.formContent}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formLabel}>
          <label className={styles.label} htmlFor="login">Nome/E-mail</label>
          <input
            type="email"
            placeholder="Digite seu nome/E-mail"
            id="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
            className={styles.inputPlaceHolder}
          />
          <label className={styles.label} htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite a sua senha"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputPlaceHolder}
          />
        </div>
        <div className={styles.buttonContent}>
          <a className={styles.link} href="/#" target="_blank" rel="noopener noreferrer">Esqueci minha senha</a>
          <button
            className={styles.button}
            type="submit"
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}


export default LoginModal;
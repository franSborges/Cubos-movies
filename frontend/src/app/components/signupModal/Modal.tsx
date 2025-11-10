"use client";
import React, { useState } from "react";
import styles from "./Modal.module.css"

const SignupModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({email, password, name});
  }

  return (
    <div className={styles.formContent}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formLabel}>
          <label className={styles.label} htmlFor="text">Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            id="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className={styles.inputPlaceHolder}
          />
          <label className={styles.label} htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputPlaceHolder}
          />
          <label className={styles.label} htmlFor="password">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputPlaceHolder}
          />
          <label className={styles.label} htmlFor="password">Confirmação de senha</label>
          <input
            type="password"
            placeholder="Digite sua senha novamente"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputPlaceHolder}
          />
        </div>
        <div className={styles.buttonContent}>
          <button
            className={styles.button}
            type="submit"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}


export default SignupModal;
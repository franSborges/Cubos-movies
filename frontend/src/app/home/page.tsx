import Image from "next/image";
import styles from "./page.module.css";
import searchIcon from "./../../../public/searchIcon.svg";

const HomePage = () => {
  return (
    
    <section className={styles.contentContainer}>
      <section className={styles.movieToolbarContainer}>
        <form role="search" className={styles.movieToolbar}>
          <div className={styles.searchContainer}>
            <input
              type="search"
              id="search"
              name="query"
              placeholder="Pesquise por filmes"
              className={styles.searchInput}
            />
            <Image
              src={searchIcon}
              alt="Imagem do icone de busca"
              className={styles.searchIcon}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              className={styles.filterButton}
            >
              Filtros
            </button>
            <button
              type="button"
              className={styles.addButton}
            >
              Adicionar Filme
            </button>
          </div>
        </form>
      </section>
      <main className={styles.main}>
        Filmes
      </main>
    </section>
  );
}


export default HomePage;
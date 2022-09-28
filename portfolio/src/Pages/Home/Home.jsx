import styles from './Home.module.css';
import Nick from '../../Components/Img/123.png';
import backnick from '../../Components/Img/background.gif';

export default function Home() {
  return (
    <>
      <section>
        <div className={styles.card}>
          <div>
            <img className={styles.photo} src={Nick} alt="Foto do artista" />
            <img className={styles.back} src={backnick} alt="imagem de fundo" />
          </div>
        </div>
      </section>
    </>
  );
}

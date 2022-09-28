import styles from './Home.module.css';
import Nick from '../../Components/Img/123.png';
import backnick from '../../Components/Img/background.gif';

export default function Home() {
  return (
    <>
      <section className={styles.resp}>
        <div className={styles.title}>
          <h1>DESIGN</h1>
          <span>Gráfico</span>
          <img className={styles.principal} src={backnick} alt="background" />
        </div>
        <div className={styles.card}>
          <div>
            <img className={styles.photo} src={Nick} alt="photoDesigner" />
            <img className={styles.back} src={backnick} alt="background" />
          </div>
          <p>Nicolas Ferreira</p>
          <blockquote>
            Facilito a comunicação com seu cliente através do design!
          </blockquote>
          <button>
            <a href="http://api.whatsapp.com/send?1=pt_BR&phone=5511920151566">
              Vamos conversar
            </a>
          </button>
        </div>
      </section>
    </>
  );
}

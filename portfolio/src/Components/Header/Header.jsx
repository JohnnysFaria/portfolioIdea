import styles from './Header.module.css';
import Container from '../Container/Container';
import face from '../Img/icon face.png';
import insta from '../Img/icon Insta.png';
import twitter from '../Img/icon twitter.png';

export default function Header() {
  return (
    <Container>
      <div className={styles.container}>
        <h1>{''}</h1>
        <ul className={styles.list}>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className={styles.social}>
          <a href="https://www.facebook.com/nicolasferreirac/">
            <img src={face} alt="" />
          </a>
          <a href="https://www.instagram.com/nicolas.ferreirac/">
            <img src={insta} alt="" />
          </a>
          <a href="https://twitter.com/NicolasFereirac">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
    </Container>
  );
}

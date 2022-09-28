import styles from './Header.module.css';
import Container from '../Container/Container';

export default function Header() {
  return (
    <Container>
      <div className={styles.container}>
        <h1>LOGO</h1>
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
      </div>
    </Container>
  );
}

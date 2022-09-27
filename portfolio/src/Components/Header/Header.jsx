import styles from './Header.module.css';
import Container from '../Container/Container';

export default function Header() {
  return (
    <Container>
      <div className={styles.container}>
        <h1>LOGO</h1>
        <ul className={styles.list}>
          <li>
            <a href="#">About me</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </Container>
  );
}

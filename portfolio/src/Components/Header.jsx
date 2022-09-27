import styles from './Header.module.css';

export default function Header() {
  return (
    <>
      <div className={styles.container}>
        <h1>LOGO</h1>
        <ul>
          <li>About me</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
}

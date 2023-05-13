import styles from "./style.module.css";
import Button from 'react-bootstrap/Button';
export const Header = () => {
  return (
    <header>
      <div className={styles.topMenu}>
        <a className={styles.topMenuLink} href="/">
          Вопросы 
        </a>
        <a className={styles.topMenuLink} href="/answers">
          Ответы
        </a>
      </div>

      <div className={styles.blockTopAuth}>
      <Button variant="warning">Войти Админку</Button>{' '}
      </div>
    </header>
  );
};

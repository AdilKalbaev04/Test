import { NavLink } from "react-router-dom";
import styles from "./style.module.css";
import Button from "react-bootstrap/Button";
export const Header = () => {
  return (
    <header>
      <div className={styles.topMenu}>
        <a className={styles.topMenuLink} href="/">
          Вопросы
        </a>
        <a className={styles.topMenuLink} href="/answer">
          Ответы
        </a>
      </div>

      <div className={styles.blockTopAuth}>
        <NavLink to={"/auth"}>
          <Button variant="warning">Войти Админку</Button>
        </NavLink>
      </div>
    </header>
  );
};

import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { getData } from "../../api";
import styles from "./style.module.css";

const QuestPage = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    getData().then((rew) => {
      setItems(rew.data.ItemData);
      console.log(rew.data.ItemData);
    });
  }, []);
  return (
    <div className={styles.questionBlock}>
      <div className={styles.cards}>
        <Card data={items} />
      </div>
    </div>
  );
};

export default QuestPage;

import Card from "../../components/Card";
import styles from "./style.module.css"
const QuestPage = () => {

  return (
    <div className={styles.questionBlock}>
      <div className={styles.cards}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default QuestPage;

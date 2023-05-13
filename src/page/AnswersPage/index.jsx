import cn from "clsx";
import Card from "../../components/Card";
import styles from "./style.module.css";

const AnswersPage = () => {
  return (
    <div className={styles.AnswersBlock}>
      <div className={styles.cards}>
        <Card>
          <div className={cn(styles.userName || styles.input)}>
            <h5>Name</h5>
          </div>
          <div className={cn(styles.userTime || styles.input)}>
            <h6>Time</h6>
          </div>
        </Card>
        <Card>
          <div className={cn(styles.userName || styles.input)}>
            <h5>Name</h5>
          </div>
          <div className={cn(styles.userTime || styles.input)}>
            <h6>Time</h6>
          </div>
        </Card>
        <Card>
          <div className={cn(styles.userName || styles.input)}>
            <h5>Name</h5>
          </div>
          <div className={cn(styles.userTime || styles.input)}>
            <h6>Time</h6>
          </div>
        </Card>
        
      </div>
    </div>
  );
};

export default AnswersPage;

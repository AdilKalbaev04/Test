import { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import styles from "./style.module.css";

const Card = ({ children }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(answer)
  }

  const handleChange = (event) => {
    setAnswer(event.target.value);
  }
  return (
    <>
      <div className={styles.card}>
        <div className={styles.userData}>{children}</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, officia
          itaque veniam debitis adipisci animi, facilis aliquid, rerum doloribus
          accusamus velit! Deleniti laboriosam reprehenderit dolorem consectetur
          nemo dicta aut aliquid?
        </p>
        <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="ваш ответ"
            aria-label="Ответ"
            aria-describedby="basic-addon2"
            onChange={handleChange}
          />
          <Button type="submit" variant="outline-secondary" id="button-addon2">
            Button
          </Button>
        </InputGroup>
        </Form>
      </div>
    </>
  );
};

export default Card;

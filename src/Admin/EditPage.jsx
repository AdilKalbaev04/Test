import styled from "styled-components";
import { useState } from "react";
import { changeData } from "../api";

export const EditPage = ({ productInfo, data, index }) => {
  console.log(productInfo);
  const [item, setItem] = useState({
    question: productInfo?.question,
    answer: productInfo?.answer,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let products = [...data];
    products.splice(index, 1, item);
    changeData(products);
  };

  return (
    <div key={productInfo?.id}>
      <AdminEditPageWrapper>
        <form onSubmit={handleSubmit}>
          <h3>Name : {productInfo?.name}</h3>
          <label htmlFor="title">Question</label>
          <input
            type="text"
            name="question"
            value={item.question}
            onChange={(e) => setItem({ ...item, question: e.target.value })}
          />

          <label htmlFor="price">Answer</label>
          <input
            type="text"
            name="answer"
            value={item.answer}
            onChange={(e) => setItem({ ...item, answer: e.target.value })}
          />

          <button>Save Changes</button>
        </form>
      </AdminEditPageWrapper>
    </div>
  );
};

const AdminEditPageWrapper = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 50%;

  & h2 {
    margin-bottom: 20px;
  }

  & form {
    display: flex;
    flex-direction: column;
  }

  & label {
    color: #555;
    font-size: 14px;
    margin-bottom: 5px;
  }

  & input {
    border: none;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: 20px;
  }

  & button {
    background-color: #0080ff;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    padding: 10px;
    transition: background-color 0.2s ease-in-out;
  }

  & button:hover {
    background-color: #0072e6;
  }
`;

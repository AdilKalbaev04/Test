import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { getData } from "../../api";

const MainPage = () => {
  const [items, setItems] = useState();
  useEffect(() => {
    getData().then((rew) => {
      setItems(rew.data.ItemData);
      console.log(rew.data.ItemData);
    });
  }, []);
  return (
    <div className="">
      <Card  data={items} />
    </div>
  );
};

export default MainPage;

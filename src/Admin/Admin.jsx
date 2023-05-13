import { useEffect, useState } from "react";
import { EditPage } from "./EditPage";
import { getData } from "../api";

export const AdminPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then((res) => {
      setData(res.data.ItemData);
    });
  }, []);
  return (
    <div>
      {data.map((item, index) => {
        return (
          <EditPage
            key={item?.id}
            data={data}
            productInfo={item}
            index={index}
          />
        );
      })}
    </div>
  );
};

import React from "react";
import Column from "../Column/Column";
import { useState, useEffect } from "react";

const Main = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, []);
  const filteredData = (data, theme) => {
    return data.filter((task) => task.status === theme);
  };
  return (
    <main className="main">
      <div className="container">
        {isLoading ? (
          <div>Загрузка...</div>
        ) : (
          <div className="main__block">
            <div className="main__content">
              <Column
                data={filteredData(data, "Без статуса")}
                title={"Без статуса"}
              />
              <Column
                data={filteredData(data, "Нужно сделать")}
                title={"Нужно сделать"}
              />
              <Column
                data={filteredData(data, "В работе")}
                title={"В работе"}
              />
              <Column
                data={filteredData(data, "Тестирование")}
                title={"Тестирование"}
              />
              <Column data={filteredData(data, "Готово")} title={"Готово"} />
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Main;

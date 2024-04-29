import React from "react";
import PopUser from "../popups/PopUser/PopUser";
import { useState } from "react";
const Header = ({ data, setData }) => {
  //Cоздаем состояние для модального окна
  const [isOpenModal, setIsOpenModal] = useState(false);

  // handleClick функция для переключения состояния isOpen
  const handleClick = () => {
    console.log(isOpenModal);
    setIsOpenModal((prev) => !prev);
  };
  const handleAddTask = (e) => {
    e.preventDefault(),
      setData([
        ...data,
        {
          id: data[data.length - 1].id + 1,
          status: "Без статуса",
          title: "Web Design",
          taskName: "Название задачи",
          date: "30.10.23",
        },
      ]);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <buttonn
              onClick={handleAddTask}
              className="header__btn-main-new _hover01"
              id="btnMainNew"
            >
              <a href="#popNewCard">Создать новую задачу</a>
            </buttonn>
            <a
              onClick={handleClick}
              href="#user-set-target"
              className="header__user _hover02"
            >
              Ivan Ivanov
            </a>
            {isOpenModal && <PopUser />}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

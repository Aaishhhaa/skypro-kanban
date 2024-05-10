import { useState } from 'react';
import PopUser from '../popups/PopUser/PopUser';
import { Container } from '../../Global.styled';
import * as S from './Header.styled';

const Header = ({ data, setData, setGlobalTheme }) => {
  //Cоздаем состояние для модального окна
  const [isOpenModal, setIsOpenModal] = useState(false);

  // handleClick функция для переключения состояния isOpen
  const handleClick = () => {
    console.log(isOpenModal);
    setIsOpenModal((prev) => !prev);
  };

  // Функция добавления задачи
  const handleAddTask = () => {
    setData([
      ...data,
      {
        id: data[data.length - 1].id + 1,
        status: 'Без статуса',
        title: 'Web Design',
        taskName: 'Название задачи',
        date: '30.10.23',
      },
    ]);
  };
  //href='#popNewCard'
  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          <S.HeaderLogoLight>
            <a href='' target='_self'>
              <img src='images/logo.png' alt='logo' />
            </a>
          </S.HeaderLogoLight>
          <S.HeaderLogoDark>
            <a href='' target='_self'>
              <img src='images/logo_dark.png' alt='logo' />
            </a>
          </S.HeaderLogoDark>
          <S.HeaderNav>
            <S.HeaderBtnMainNew onClick={handleAddTask} id='btnMainNew'>
              <a>Создать новую задачу</a>
            </S.HeaderBtnMainNew>
            <S.HeaderUser className='_hover02' onClick={handleClick}>
              Ivan Ivanov
            </S.HeaderUser>
            {isOpenModal && <PopUser setGlobalTheme={setGlobalTheme} />}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;

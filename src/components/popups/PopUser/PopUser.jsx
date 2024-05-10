import * as S from './PopUser.styled';

const PopUser = ({ setGlobalTheme }) => {
  const handeClickTheme = () => {
    setGlobalTheme((prev) => !prev);
  };
  return (
    <S.PopUser
      className='header__pop-user-set pop-user-set'
      id='user-set-target'>
      {/* <a href="">x</a> */}
      <S.PopUserName className='pop-user-set__name'>Ivan Ivanov</S.PopUserName>
      <S.PopUserMail className='pop-user-set__mail'>
        ivan.ivanov@gmail.com
      </S.PopUserMail>
      <S.PopUserTheme className='pop-user-set__theme'>
        <p>Темная тема</p>
        <input
          onClick={handeClickTheme}
          type='checkbox'
          className='checkbox'
          name='checkbox'
        />
      </S.PopUserTheme>
      <button type='button' className='_hover03'>
        <a href='#popExit'>Выйти</a>
      </button>
    </S.PopUser>
  );
};

export default PopUser;

import * as S from "./PopUser.styled";

const PopUser = ({ setGlobalTheme }) => {
  const handeClickTheme = () => {
    setGlobalTheme((prev) => !prev);
  };
  return (
    <S.PopUser id="user-set-target">
      <S.PopUserName>Ivan Ivanov</S.PopUserName>
      <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
      <S.PopUserTheme>
        <p>Темная тема</p>
        <input onClick={handeClickTheme} type="checkbox" name="checkbox" />
      </S.PopUserTheme>
      <S.PropUserButton type="button">
        <a href="#popExit">Выйти</a>
      </S.PropUserButton>
    </S.PopUser>
  );
};

export default PopUser;

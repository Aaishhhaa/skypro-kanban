import Card from '../Card/Card';
import * as S from './Column.styled';

const Column = ({ data, name }) => {
  return (
    <S.Column>
      <S.ColumnTitle>
        <p>{name}</p>
      </S.ColumnTitle>
      <S.Cards>
        <S.CardsItem>
          {data &&
            data.map((card) => {
              return <Card key={card.id} {...card} />;
            })}
        </S.CardsItem>
      </S.Cards>
    </S.Column>
  );
};

export default Column;

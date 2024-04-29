import Card from "../Card/Card";

const Column = ({ data, title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <div className="cards__item">
          {data &&
            data.map((card) => {
              return <Card key={card.id} {...card} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Column;

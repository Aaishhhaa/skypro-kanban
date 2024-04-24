import Card from "../Card/Card";

const Column = ({ title }) => {
  console.log(title);
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <div className="cards__item">
          <Card cardTitle={"Webdesign"} color={"orange"} />
          <Card cardTitle={"Research"} color={"green"} />
          <Card cardTitle={"Copywriting"} color={"purple"} />
        </div>
      </div>
    </div>
  );
};

export default Column;

import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div className="grid grid-cols-2 py-28 w-fit mx-auto gap-24">
      {data.map((ele) => (
        <Card key={ele._id} data={ele} />
      ))}
    </div>
  );
};

export default Cards;

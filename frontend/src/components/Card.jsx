const Card = ({ data }) => {
  return (
    <div className="bg-gray-100 py-5 rounded-lg w-[30rem] mt-6 border border-gray-300">
      <div className="border-b border-gray-300 w-full px-5 pb-1">
        <p className="text-2xl font-bold text-gray-700 ">{data.title}</p>
      </div>
      <div className="px-5 mt-2">
        <p className="text-xl font-semibold text-gray-500 ">{data.description}</p>
      </div>
    </div>
  );
};

export default Card;

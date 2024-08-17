import { GoArrowRight } from "react-icons/go";

const Navbar = ({ query, handleChange, handleClick }) => {
  return (
    <>
      <div className="bg-violet-100 ">
        <div className="bg-black h-20 w-full rounded-tr-2xl rounded-tl-2xl mt-[2px] flex justify-between items-center">
          <div className="text-white text-xl flex px-32">
            <p>
              <span className="font-semibold">Abstract</span>
              <span className="mx-2">|</span>
              <span className="font-medium">Help Center</span>
            </p>
          </div>
          <div className="mr-60">
            <button className="bg-gray-900 px-5 py-3 rounded border border-white text-white font-semibold ">
              Submit a request
            </button>
          </div>
        </div>

        <div className="text-center py-40">
          <p className="font-[550] text-7xl ">How can we help?</p>
          <div className="bg-white border border-black rounded-md px-2 flex w-2/5 m-auto py-3 mt-14">
            <input
              type="text"
              value={query}
              onChange={handleChange}
              className="focus:outline-none w-full text-xl font-medium px-4 py-3"
              placeholder="Search"
            />
            <GoArrowRight
              size={35}
              className="cursor-pointer mt-2 mr-4 font-light"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

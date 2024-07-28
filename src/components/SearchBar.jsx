import { CiSearch } from "react-icons/ci";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { getUser } from "../context/apiContext/ApiActions";
import { UserContext } from "../context/apiContext/UserContext";

const SearchBar = () => {
  const { theme } = useContext(ThemeContext);
  const { userData, updateData } = useContext(UserContext);
  const [searchData, setSearchData] = useState("");

  const handleInput = (e) => {
    setSearchData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchData === "") {
      alert("Enter git username");
    } else {
      await getUser(searchData)
        .then((result) => updateData(result))
        .finally(() => console.log(userData));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-[90%] md:w-[80%] lg:w-[70%] flex justify-between items-center ${
        theme == "light" ? "bg-c-white" : "bg-m-dark"
      } px-2 py-2 rounded-md mt-8`}
    >
      <div className="flex items-center gap-1 flex-1 ">
        <CiSearch className=" text-light-blue text-lg " />
        <input
          className={`w-full  border-0 ${
            theme === "light"
              ? "text-c-gray bg-c-white"
              : "text-c-white bg-m-dark"
          }  focus:outline-none text-sm `}
          type="search"
          value={searchData}
          onChange={handleInput}
          name="userName"
          placeholder="Search GitHub username..."
        />
      </div>

      <div className="flex items-center gap-1">
        {/* <span className="text-sm text-[red] ">err</span> */}
        <button className=" bg-light-blue px-4 py-3 rounded-md text-c-white text-sm ">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

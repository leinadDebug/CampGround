import CampgroundCard from "./CampgroundCard";
import Campdata from "./CampData";
import { NavBar } from "./NavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";


function SearchPage() {

  const [searchText, setSearchText]= useState('')
  const [isFilter, setIsFilter] = useState(false)
  const [filteredCamp, setFilteredCamp] = useState([]);
  const data = Campdata;
  // const filteredData = data.filter(camp => camp.title.toLowerCase().includes(searchText.toLowerCase()))
  const campgroundsToMap = isFilter ? filteredCamp : data;
  function handleInputChange(e){
    setSearchText(e.target.value)
  }
  function handleSearch(e){
    e.preventDefault()
    setIsFilter(true)
    const filteredData = data.filter((camp) =>
      camp.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCamp(filteredData);
  }

  return (
    <div className=" px-[10%] ">
      <div className=" h-20 flex items-center">
        <div className="mr-[3em] p-4">
          <NavBar />
        </div>

        <h1>Home</h1>
        <div className="flex ml-auto items-center m-6 ">
          <h1 className="m-4 hover:translate-y-[2px]">Login</h1>
          <button className=" bg-black text-white font-serif p-4 rounded-md text-sm hover:animate-pulse">
            Create an account
          </button>
        </div>
      </div>
      <div className="border-2 px-9 text-left mb-36 py-16 bg-[#fbf8f2] rounded-md">
        <div className="pr-32 rounded">
          <h1 className="text-3xl font-bold mr-auto">Welcome to YelpCamp!</h1>
          <p className="py-2 text-sm">
            View our hand-picked campgrounds from all over the world, or add
            your own.
          </p>
          <div className="flex gap-2 mb-3">
            <div className="flex flex-wrap gap-2 border-2 border-gray py-2 pl-4 w-fit rounded bg-white">
              <img src="src\assets\designCamp\Assets\Search Icon.svg" />
              <input
                type="text"
                placeholder="Search for Camps"
                className="py-1  border-blue"
                value={searchText}
                onChange={handleInputChange}
              />
            </div>
            <button className="py- px-7 rounded text-white bg-black hover:ease-in-out duration-300" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        <a className="underline underline-offset-2" href="#">
          Or add your own campground
        </a>
      </div>
      <div className=" p-0 flex flex-wrap gap-12">
        {campgroundsToMap.map((item, index) => {
          return (
            <CampgroundCard
              key={item.id}
              img={item.img}
              title={item.title}
              description={item.description}
              campImg={item.campImg}
              id={index}
            />
          );
        })}
      </div>
      <Outlet />
    </div>
  );
}

export default SearchPage;

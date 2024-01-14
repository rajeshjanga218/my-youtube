import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { cacheSuggestions } from "../utils/serachSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const cachedResults = useSelector((store) => store.search);

  const handleMenuClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (cachedResults[searchText]) {
        setSuggestions(cachedResults[searchText]);
      } else {
        getSuggestion();
      }
    }, 2000);
    return () => clearInterval(timer);
  }, [searchText]);

  const sampleSuggestions = async (input) => {
    if (!input) return;
    const dummydata = ["search", "cricket", "dhoni", "kohli", "data"];
    return dummydata;
  };

  const getSuggestion = async () => {
    try {
      // const response = await fetch(
      //   `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(
      //     searchText
      //   )}`
      // );
      // const json = await response.json();
      // console.log(json);
      const data = await sampleSuggestions(searchText);
      dispatch(
        cacheSuggestions({
          [searchText]: data,
        })
      );
      setSuggestions(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(searchText);
  return (
    <>
      <div className="grid grid-cols-12 p-2 border-b">
        <div className="col-span-2 flex gap-2">
          <img
            src="/svg/hamburger.svg"
            alt="hamburger"
            className="h-8 w-8 cursor-pointer"
            onClick={handleMenuClick}
          />
          <img
            src="/images/youtubeLogo.jpg"
            alt="youtubeLogo"
            className="h-10 w-15"
          />
        </div>
        <div className="col-span-8  text-center">
          <input
            type="tex"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            placeholder="search"
            className="w-3/4 border p-2"
          />
        </div>
        <div className="col-span-2 flex justify-end">
          <img src="/svg/profile.svg" alt="profile" className="w-10 h-10" />
        </div>
      </div>
      {suggestions && searchText && (
        <ul className="absolute left-1/3 bg-slate-400 rounded-md flex flex-col gap-4 w-1/4">
          {suggestions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Header;

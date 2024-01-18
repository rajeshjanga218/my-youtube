import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
// import { SEARCH_API } from "../utils/constants";
import { cacheSuggestions } from "../utils/serachSlice";
import { dummySuggestion } from "../utils/helper";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
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

  const getSuggestion = async () => {
    try {
      // const response = await fetch(
      //   `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${encodeURIComponent(
      //     searchText
      //   )}`
      // );
      const response = await dummySuggestion(searchText);
      console.log(response);
      // const json = await response.json();

      dispatch(
        cacheSuggestions({
          [searchText]: response,
        })
      );
      setSuggestions(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSuggestionClick = (e) => {
    setSearchText(e.target.innerText);
    setShowSuggestions(false);
    navigate("/results?search_query=" + encodeURI(e.target.innerText));
  };

  const handleSearchButtonClick = () => {
    navigate("/results?search_query=" + encodeURI(searchText));
  };

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
        <div className="relative col-span-8 flex justify-center text-center">
          <input
            type="tex"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            placeholder="search"
            className="w-3/4 border p-2 rounded-l-full pl-2"
          />
          <button
            className="border rounded-r-full w-16 p-2 bg-gray-100"
            onClick={handleSearchButtonClick}
          >
            <img src="/svg/search.svg" className="w-5 h-5" />
          </button>
          {searchText && (
            <button
              className="absolute right-40 inset-y-0"
              onClick={() => setSearchText("")}
            >
              X
            </button>
          )}
        </div>
        {showSuggestions && suggestions?.length > 0 && (
          <ul className="absolute left-1/4 top-14 bg-gray-100 rounded-md flex flex-col gap-4 w-1/3 p-2">
            {suggestions.map((item, index) => (
              <li key={index}>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onMouseDown={(e) => handleSuggestionClick(e)}
                >
                  <img src="/svg/search.svg" alt="serach" className="w-4 h-4" />
                  <p className="">{item}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="col-span-2 flex justify-end">
          <img src="/svg/profile.svg" alt="profile" className="w-10 h-10" />
        </div>
      </div>
    </>
  );
};

export default Header;

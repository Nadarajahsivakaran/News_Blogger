import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchallNews } from "../../Store/newsSlice";

const Category = () => {
  const dispatch = useDispatch();
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchallNews("all"));
  }, [dispatch]);

  const categoryList = [
    "all",
    "national",
    "business",
    "sports",
    "world",
    "politics",
    "technology",
    "startup",
    "entertainment",
    "miscellaneous",
    "hatke",
    "science",
    "automobile",
  ];

  const filterCategory = (category, index) => {
    dispatch(fetchallNews(category));
    setActiveButtonIndex(index);
  };

  return (
    <div className="container mx-auto mt-28">
      <h1 className="text-left ml-6">Our News</h1>
      {categoryList.map((category, index) => (
        <button key={index}
        className="bg-gray-200 hover:bg-green-700 py-2 px-4 rounded mr-1 mt-2"
          onClick={() => filterCategory(category, index)}
          style={{
            backgroundColor: index === activeButtonIndex ? "green" : "gray",
            color: index === activeButtonIndex ? "white" : "black",
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Category;

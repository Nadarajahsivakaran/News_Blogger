import React from "react";
import { useSelector } from "react-redux";
import Error from "./Error";
import Loader from "./Loader";
import NewsCard from "./NewsCard";

const News = () => {
  const { loading, error, news } = useSelector((state) => state.news);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}

      <div className="flex items-center justify-center min-h-screen container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {news &&
            news.map((news, index) => (
              <NewsCard
                title={news.title}
                image={news.imageUrl}
                content={news.content}
                date={news.date}
                readMoreUrl={news.readMoreUrl}
                author={news.author}
                id={news.id}
                key={index}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default News;

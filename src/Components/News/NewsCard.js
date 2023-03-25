import React, { useState } from "react";
import NewsModal from "./NewsModal";

const NewsCard = ({ title, image, content, date, readMoreUrl, id }) => {
  const [showModal, setShowModal] = useState(false);

  const getDate = new Date(date.split(",")[0]);
  const formattedDate = getDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <div className="card">
        <div className="p-5 flex flex-col ">
          <div onClick={() => setShowModal(true)}>
            <div className="rounded-xl overflow-hidden ">
              <img className="w-full h-36" src={image} alt={title} />
            </div>
            <h5 className="text-sm md:text-sm font-medium mt-3 text-left">
              {title}
            </h5>
            <div className="flex text-teal-600 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <p className=" text-xs text-left ">{formattedDate}</p>
            </div>
            <p className=" text-xs mt-3 text-left">{content}</p>
          </div>
          <a
            href={readMoreUrl}
            className=" w-2/5 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 mt-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Read More
          </a>
        </div>
      </div>

      {showModal && (
        <>
          <NewsModal setShowModal={setShowModal} Id={id} />
        </>
      )}
    </>
  );
};

export default NewsCard;

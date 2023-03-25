import React from "react";
import { useSelector } from "react-redux";

const NewsModal = ({ setShowModal, Id }) => {
  const { news } = useSelector((state) => state.news);
  const findNews = news.find(({ id }) => id === Id);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-5xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold text-center mx-auto">
                {findNews.title}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                   
                >
                  <path
                    // fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    // clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="relative p-6 flex-auto">
              <div className="flex">
                <img
                  className="w-full h-56"
                  src={findNews.imageUrl}
                  alt={findNews.title}
                />
                <div>
                  <p className="my-3 text-slate-500 text-lg leading-relaxed">
                    {findNews.content}
                  </p>
                  <div className="flex">
                    <h6 className="text-left p-3">
                      {findNews.date} {findNews.time}
                    </h6>
                    <h6 className="text-right p-3 self-end">
                      Author : {findNews.author}
                    </h6>
                  </div>
                  <a href={findNews.url} className="text-blue-500 items-end">
                    More Details...
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default NewsModal;

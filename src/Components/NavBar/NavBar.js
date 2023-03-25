import React, { useState } from "react";

const NavBar = () => {
  let Links = [
    {
      name: "Home",
      link: "/",
      d:
        "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25",
    },
    {
      name: "Partners",
      link: "/",
      d:"M16.25 3.75a6.741 6.741 0 0 1 -2.377 1.472c-0.935 0.165 -3.522 -1.035 -4.798 0.19 -0.213 0.213 -0.475 0.425 -0.75 0.637 -0.6 -0.263 -1.525 -0.663 -2.2 -1.05S3.75 3.75 3.75 3.75L0 8.125s0.925 1.25 1.5 2.075c0.375 0.55 0.838 1.388 1.137 1.95l-0.425 0.5a1.095 1.095 0 0 0 0.188 1.25 1.041 1.041 0 0 0 1.252 -0.003 0.775 0.775 0 0 0 0.096 1.101 1.242 1.242 0 0 0 1.258 -0.003 1.008 1.008 0 0 0 -0.004 1.256 1.265 1.265 0 0 0 1.115 -0.143 1.027 1.027 0 0 0 0.234 1.14 1.366 1.366 0 0 0 1.318 -0.115l0.645 -0.584c0.59 0.587 1.404 0.951 2.303 0.951l0.076 -0.001a1.639 1.639 0 0 0 1.368 -0.989c0.182 0.07 0.39 0.117 0.61 0.117 0.295 0 0.569 -0.085 0.8 -0.231 0.731 -0.484 0.556 -0.859 0.556 -0.859a1.338 1.338 0 0 0 1.536 -0.349 1.245 1.245 0 0 0 0.173 -1.519 0.045 0.045 0 0 0 0.026 0.006c0.526 0 0.984 -0.29 1.222 -0.717a1.955 1.955 0 0 0 -0.239 -1.85l0.004 0.006c1.025 -0.2 0.988 -0.712 1.487 -1.462a5.906 5.906 0 0 1 1.734 -1.51zm-0.063 8.825c-0.55 0.55 -0.975 0.313 -1.913 -0.4S11.475 10.125 11.475 10.125c0.076 0.381 0.253 0.712 0.501 0.976 0.399 0.449 1.586 1.474 2.149 1.999 0.35 0.325 1.25 0.975 0.725 1.475s-0.938 0 -1.8 -0.7 -2.788 -2.425 -2.788 -2.425a1.171 1.171 0 0 0 0.338 0.9c0.213 0.25 1.4 1.4 1.9 1.925s0.938 0.838 0.512 1.25 -1.288 -0.237 -1.762 -0.725c-0.737 -0.712 -2.2 -2.037 -2.2 -2.037l-0.001 0.066c0 0.355 0.122 0.68 0.329 0.938 0.36 0.473 1.06 1.085 1.485 1.56s0.675 0.875 0 1.25 -1.675 -0.55 -2.112 -1v-0.003a0.514 0.514 0 0 0 -0.125 -0.336 1.12 1.12 0 0 0 -1.133 -0.235A0.761 0.761 0 0 0 7.5 13.875a0.943 0.943 0 0 0 -1.14 0.001 0.762 0.762 0 0 0 -0.106 -1.188 1.25 1.25 0 0 0 -1.467 0.1 0.825 0.825 0 0 0 -0.085 -1.139 1.245 1.245 0 0 0 -1.482 -0.16L2.387 10.086c-0.575 -0.912 -1.25 -1.863 -1.25 -1.863l2.85 -3.462s1.013 0.625 1.85 1.1c0.413 0.237 1.125 0.55 1.663 0.8 -0.85 0.637 -1.563 1.25 -1.35 1.675a2.292 2.292 0 0 0 2.609 0.045 3.013 3.013 0 0 1 1.679 -0.504c0.434 0 0.846 0.09 1.22 0.254 0.693 0.468 1.968 1.618 3.13 2.343 1.462 1.063 1.75 1.75 1.4 2.1z"
    },
    {
      name: "Digital Assets",
      link: "/",
      d:
        "M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z",
    },
    {
      name: "Dilma Universe",
      link: "/",
      d:
        "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418",
    },
  ];
  

  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>

          <img
            className="w-20 h-14 mr-5"
            alt="logo"
            src="https://media.istockphoto.com/id/1286680331/vector/adoption-and-community-care.jpg?s=612x612&w=0&k=20&c=ohbgHT14BhVVbVOc__N5MsBEfoM3EXwzLPxzIFeWHTI="
          />

          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                ></path>
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
            name={open ? "close" : "menu"}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mx-auto"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d={link.d} />
              </svg>
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;

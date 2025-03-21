import React from "react";
import img from '../assets/home/women-img.webp'

const Women = () => {

  return (
    <article
      id="women"
      className="mt-3 p-8 sm:p-12 text-lg border-b-4 border-indigo-500 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
    >
      <h2 className="text-center text-indigo-800 md:col-span-3 text-3xl font-extrabold row-start-1 row-end-2">
        WOMEN'S
      </h2>
      <div className="content row-start-3 row-end-4 md:col-span-2 md:row-span-2 text-center md:pr-6 place-content-center">
        Women’s <span className="text-indigo-600 font-semibold ">health</span>,
        <span className="text-indigo-600 font-semibold"> safety</span>, and
        <span className="text-indigo-600 font-semibold"> education</span> are
        fundamental pillars of a thriving society. These aspects are
        interconnected, impacting not only individual women but also the
        families and communities they nurture. Ensuring women have access to
        healthcare, safety, and educational opportunities is essential for
        promoting
        <span className="text-indigo-600 font-semibold">
          {" "}
          gender equality
        </span>{" "}
        and building a healthier, more resilient future.
      </div>
      <div className="avatar flex justify-center row-start-2 row-end-3 md:row-span-2 md:col-span-1 ">
        <img
          // src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg"
          src={img}
          alt="Avatar"
          className="w-[clamp(200px,100%,320px)]"
        />
      </div>
    </article>
  );
};

export default Women;

import React from "react";
import img from '../assets/home/health-img.jpg'

const Health = () => {

  return (
    <article
      id="health"
      className="mt-3 p-8 sm:p-12 text-lg border-b-4 border-indigo-500 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
    >
      <h2 className="text-center text-indigo-800 row-span-1 md:col-span-3 text-3xl font-extrabold">
        WOMEN'S HEALTH
      </h2>

      <div className="avatar flex justify-center row-start-2 row-end-3 md:col-span-1">
        <img
          src={img}
          alt="Avatar"
          className="w-[clamp(200px,100%,320px)]"
        />
      </div>

      <div className="content text-center md:pr-6 row-start-3 row-end-4 md:row-span-2 md:col-span-2 place-content-center">
        Women’s health is often neglected, particularly in areas like
        <span className="text-indigo-600 font-semibold">
          {" "}
          Reproductive health
        </span>
        ,
        <span className="text-indigo-600 font-semibold">
          {" "}
          mental well-being
        </span>
        , and access to essential medical care. Proper education and awareness
        about issues like
        <span className="text-indigo-600 font-semibold"> menstruation</span>,
        <span className="text-indigo-600 font-semibold"> maternal care</span>,
        <span className="text-indigo-600 font-semibold"> sexual health</span>,
        and mental health are crucial to empowering women to take charge of
        their well-being. In many parts of the world, social stigmas and lack of
        resources prevent women from seeking the help they need, leading to
        avoidable health complications.
      </div>
    </article>
  );
};

export default Health;

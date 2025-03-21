import React from "react";
import img from '../assets/home/education-img.jpg'

const Education = () => {

  return (
    <>
      <article
        id="health"
        className="mt-3 p-8 sm:p-12 text-lg border-b-4 border-indigo-500 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        <h2 className="text-center text-indigo-800 row-span-1 md:col-span-3 text-3xl font-extrabold">
          WOMEN'S EDUCATION
        </h2>

        <div className="avatar flex justify-center row-start-2 row-end-3 md:col-span-1">
          <img
            src={img}
            alt="Avatar"
            className="w-[clamp(200px,100%,320px)]"
          />
        </div>

        <div className="content text-center md:pr-6 row-start-3 row-end-4 md:row-span-2 md:col-span-2 place-content-center">
          Education is key to breaking cycles of{" "}
          <span className="text-indigo-600 font-semibold">poverty</span> and{" "}
          <span className="text-indigo-600 font-semibold">dependence</span>. By
          providing women with access to{" "}
          <span className="text-indigo-600 font-semibold">
            quality education
          </span>
          , they gain the knowledge and skills needed to become{" "}
          <span className="text-indigo-600 font-semibold">
            financially independent
          </span>
          , improve their{" "}
          <span className="text-indigo-600 font-semibold">health outcomes</span>
          , and contribute meaningfully to their{" "}
          <span className="text-indigo-600 font-semibold">communities.</span>
        </div>
      </article>
    </>
  );
};

export default Education;

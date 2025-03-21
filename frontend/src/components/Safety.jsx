import React from "react";
import img from '../assets/home/safety-img.jpg'

const Safety = () => {

  return (
    <>
      <article
        id="safety"
        className="mt-3 p-8 sm:p-12 text-lg border-b-4 border-indigo-500 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        <h2 className="text-center text-indigo-800 md:col-span-3 text-3xl font-extrabold row-start-1 row-end-2">
          WOMEN'S SAFETY
        </h2>
        <div className="content row-start-3 row-end-4 md:col-span-2 md:row-span-2 text-center md:pr-6 place-content-center">
          Safety is another critical issue women face, with many experiencing
          <span className="text-indigo-600 font-semibold">violence </span>,
          <span className="text-indigo-600 font-semibold"> harassment</span>,
          and
          <span className="text-indigo-600 font-semibold">
            {" "}
            abuse in both public and private spaces
          </span>
          . Ensuring women’s safety is not only a legal and moral responsibility
          but also a
          <span className="text-indigo-600 font-semibold">
            societal necessity
          </span>
          . Laws that protect women from domestic violence, sexual assault, and
          harassment, as well as efforts to raise awareness and{" "}
          <span className="text-indigo-600 font-semibold">
            promote women’s rights
          </span>
          , are vital in creating safe environments where women can thrive.
        </div>
        <div className="avatar flex justify-center row-start-2 row-end-3 md:row-span-2 rounded-full overflow-hidden ">
          <img
            src={img}
            alt="Avatar"
            className="w-[clamp(200px,100%,320px)] "
          />
        </div>
      </article>
    </>
  );
};

export default Safety;

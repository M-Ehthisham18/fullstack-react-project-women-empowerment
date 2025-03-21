import React from "react";
import img from '../assets/home/women-roll-img.jpg'


const Role = () => {
  return (
    <>
      <article className="w-[clamp(300px,100%,1000px)] m-auto p-8 sm:p-12 ">
        <h2 className="text-center text-indigo-800 text-3xl font-extrabold mb-4">
          Women as Pillars: Nurturers, Partners, and Legacy Bearers
        </h2>
        <img src={img} alt="img" className="max-h-[400px] m-auto my-8 rounded shadow-sm" />
        <p className="text-center md:pr-6">
          Women play indispensable roles in society as{" "}
          <span className="text-indigo-600 font-semibold">
            mothers, daughters, sisters, and wives.
          </span>{" "}
          As mothers, they shape the next{" "}
          <span className="text-indigo-600 font-semibold">
            generation, nurturing
          </span>{" "}
          and educating their children. As daughters, they carry forward the{" "}
          <span className="text-indigo-600 font-semibold">legacies</span> of
          their families. As sisters and wives, they provide{" "}
          <span className="text-indigo-600 font-semibold">
            emotional support
          </span>{" "}
          and <span className="text-indigo-600 font-semibold">partnership</span>
          , enriching the lives of those around them. Ensuring their well-being
          is not just a matter of individual rights but a way to{" "}
          <span className="text-indigo-600 font-semibold">build stronger</span>,
          more{" "}
          <span className="text-indigo-600 font-semibold">
            compassionate communities
          </span>
          .
        </p>
      </article>
    </>
  );
};

export default Role;

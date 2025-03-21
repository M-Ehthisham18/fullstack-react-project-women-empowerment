import React from "react";

const content = ({
  content = "",
  title = "",
  titleDesc = "",
  heading1 = "",
  para1 = "",
  img1="",
  alt1="",
  solHd = "",
  sol11="",
  sol12="",

  heading2 = "",
  para2 = "",
  sol22="",
  sol21="",
  heading3 = "",
  para3 = "",
  sol31="",
  sol32="",
  heading4 = "",
  para4 = "",
  sol41="",
  conclusion = "",
  conclusionDesc = "",
}) => {
  return (
    <div className="bg-white p-4 pt-[unset] sm:p-6 ">
      <h2 className="text-2xl font-extrabold text-violet-950 mb-8 text-center">
        {title}
      </h2>
      <p className="text-center font-serif italic tracking-wider mb-4 border-b-2 border-solid border-gray-300 pb-16 ">
        {titleDesc}
      </p>
      <h2 className="text-xl font-extrabold text-violet-900 mb-5">
        {heading1}
      </h2>
      <div className={`${img1 ? "mb-6 max-lg:mb-24" : ""}`}>
        <p className="px-5 font-system-ui tracking-wider mb-4">{para1}</p>
        <div className="p-6 max-h-[375px] w-full max-w-[700px] m-auto ">
          <img src={img1} alt={alt1} width="100%" height="100%" className="max-h-[375px]" />
        </div>
      </div>
      {/* solutions 1  */}
      {solHd && <div className="px-5 font-system-ui tracking-wider mb-4">
        <p className="text-xl font-extrabold text-violet-900 ">{solHd}</p>
        <ul className="list-disc">

          {sol11 && <li>{sol11}</li>}
          {sol12 && <li>{sol12}</li>}
        </ul>
      </div>}
      <h2 className="text-xl font-extrabold text-violet-900 mb-5">
        {heading2}
      </h2>
      <p className="px-5 font-system-ui tracking-wider mb-4">{para2}</p>
      {/* solutions 2  */}
      {solHd && <div className="px-5 font-system-ui tracking-wider mb-4">
        <p className="text-xl font-extrabold text-violet-900 ">{solHd}</p>
        <ul className="list-disc">
        {sol21 && <li>{sol21}</li>}
        {sol22 && <li>{sol22}</li>}
        </ul>
      </div>}
      <h2 className="text-xl font-extrabold text-violet-900 mb-5">
        {heading3}
      </h2>
      <p className="px-5 font-system-ui tracking-wider mb-4">{para3}</p>
      {/* solutions 3  */}
      {solHd && <div className="px-5 font-system-ui tracking-wider mb-4">
        <p className="text-xl font-extrabold text-violet-900 ">{solHd}</p>
        <ul className="list-disc">
        {sol31 && <li>{sol31}</li>}
        {sol32 && <li>{sol32}</li>}
        </ul>
      </div> }
      <h2 className="text-xl font-extrabold text-violet-900 mb-5">
        {heading4}
      </h2>
      <p className="px-5 font-system-ui tracking-wider mb-4">{para4}</p>
      {/* solutions 4  */}
      {sol41 && <div className="px-5 font-system-ui tracking-wider mb-4">
        <p className="text-xl font-extrabold text-violet-900 ">{solHd}</p>
        <ul className="list-disc">
        {sol41 && <li>{sol41}</li>}
        </ul>
      </div> }
      <h2 className="text-2xl font-extrabold text-violet-950 my-8 text-center pt-10  border-t-2 border-solid border-gray-300">
        {conclusion}
      </h2>
      <p className="text-center font-serif italic tracking-wider mb-12">
        {conclusionDesc}
      </p>
      {content}
    </div>
  );
};

export default content;

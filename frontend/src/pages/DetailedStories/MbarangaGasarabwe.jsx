import React from "react";
import Footer from "../../components/Footer";
import MenuButton from "../../components/MenuButton";
import { useNavigate ,Link} from "react-router-dom";

const MbarangaGasarabwe = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate("/story-blog");
  }

  return (
    <>
      {" "}
      <section className="max-w-[1000px] m-auto max-lg:p-12 sm:p-4 p-2">
        <h2 className="text-center text-3xl max-lg:text-5xl font-extrabold tracking-wider underline text-violet-950 my-8  ">
          Mbaranga Gasarabwe
        </h2>
        <div className=" sm:float-right p-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5b0eae802714e595728cdab2/1529342078909-XG33XFNJ6PFV7Z1QU7CI/Mbaranga+Gasarabwe.jpg?format=750w"
            alt="img"
            className="p-7 rounded-md"
          />
          <p className="text-center text-violet-900 font-bold">author:</p>
          <h2 className="text-center text-2xl font-extrabold text-violet-800">Mbaranga Gasarabwe</h2>
        </div>
        <div className=" p-8 ">
          <p className="mb-8">
            United Nations Secretary-General Ban Ki-moon has appointed Mbaranga
            Gasarabwe of Rwanda as the first Assistant Secretary-General for
            Safety and Security, following the General Assembly’s endorsement of
            his proposal to reclassify the post at that level.
          </p>

          <p className="mb-8">
            As deputy to the Under-Secretary-General for Safety and Security,
            the Assistant Secretary-General will be responsible for the
            day-to-day overall management of the Department, for strengthening
            internal management as well as representing the Department in the
            absence of the Under-Secretary-General.
          </p>

          <p className="mb-8">
            Ms. Gasarabwe, currently Resident Coordinator/UNDP Resident
            Representative and Designated Official in Mali, has served as
            Resident Coordinator in Guinea and Djibouti, and as Resident
            Representative ad interim and Deputy Resident Representative in
            Benin since 1998. Beginning in 1991, she held various positions with
            the United Nations Development Programme (UNDP) in New York,
            including Chief of Division ad interim for Eastern and Central
            Africa, having previously worked in other international
            institutions.
          </p>

          <p className="mb-8">
            She brings to the Department of Safety and Security her extensive
            experience as Designated Official within the United Nations Security
            Management System, including the coordination of both humanitarian
            and security actions during crisis situations. Ms. Gasarabwe’s
            demonstrated capacity in mobilizing resources for humanitarian and
            development activities, as well as her ability to forge
            collaborative partnerships at the senior-most levels, is notable.
            Her diligent efforts over the years to promote the gender dimension
            in all aspects of her work, particularly at the field level, will be
            an asset to the Department.
          </p>

          <p className="mb-8">
            In her current position, Ms. Gasarabwe has worked in close
            collaboration with the Department of Safety and Security to address
            security issues and ensure regular security-situation analysis. She
            has been instrumental in leading the United Nations country team in
            supporting the Organization’s “Delivering as One” initiative in
            Mali. As Resident Coordinator in Djibouti, she successfully
            mobilized development partners to advance the humanitarian
            management of an influx of approximately 22,000 refugees. In Guinea,
            Ms. Gasarabwe successfully faced the challenges of taking on four
            functions — Resident Coordinator, Humanitarian Coordinator,
            Designated Official and UNDP Resident Representative — at a time and
            in an environment fraught with conflicts.
          </p>

          <p className="mb-8">
            Born in Rwanda in 1959, Ms. Gasarabwe holds a master’s degree in
            economics from the University of Burundi, as well as a master’s
            degree in management and business administration from the Arthur D.
            Little School of Management, now known as the Hult International
            Business School, in Boston, Massachusetts in the United States.
          </p>
          <button className="cursor-pointer px-6 py-3 border-2 rounded-lg hover:text-white transition-colors hover:bg-violet-800 underline text-violet-900" >
            <Link to="https://press.un.org/en/2011/sga1288.doc.htm" target="_blank">
            Read More
            </Link>
          </button>
        </div>
        <div onClick={goBack}>
          <MenuButton title="Back" back="180" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MbarangaGasarabwe;

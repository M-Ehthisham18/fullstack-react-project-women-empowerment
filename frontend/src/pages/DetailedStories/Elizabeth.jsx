import React from "react";
import Footer from "../../components/Footer";
import MenuButton from "../../components/MenuButton";
import { useNavigate, Link } from "react-router-dom";

const Elizabeth = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate("/story-blog");
  }

  return (
    <>
      {" "}
      <section className="max-w-[1000px] m-auto max-lg:p-12 sm:p-4 p-2">
        <h2 className="text-center text-3xl max-lg:text-5xl font-extrabold tracking-wider underline text-violet-950 my-8  ">
          Picking Yourself Up: The Wisdom of Dame Patricia Symmonds
        </h2>
        <div className=" sm:float-right p-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5b0eae802714e595728cdab2/1529342327333-8HN17ISJCN70UQRQRON3/LizThompson.jpg?format=750w"
            alt="img"
            className="p-7 rounded-md"
          />
          <p className="text-center text-violet-900 font-bold">author:</p>
          <h2 className="text-center text-2xl font-extrabold text-violet-800">
            H. Elizabeth Thompson
          </h2>
        </div>
        <div className=" p-8 ">
          <p className="mb-8">
            Many of us can identify a teacher who was special, who loved
            teaching and students. That teacher’s sole purpose was to make a
            difference and help students achieve their potential, giving them
            the tools to become their best self. For me, that person is Dame
            Patricia Symmonds. While people recall their favourite teacher and
            talk about their fondest school memory, I live mine every day.
          </p>

          <p className="mb-8">
            In school I was regarded as a bright and articulate student, but
            somehow I always underperformed on exams. I could tell you all the
            theories, speak to the issues, articulate and defend concepts, but
            put me in an exam and ask me to write about it, and I just could not
            get it done. This plagued me right through school but my principal
            remained confident in me . When I failed my certification exams on
            leaving high school, my parents were angry and upset and I was
            humiliated. I questioned whether I truly had the ability to take
            myself in the direction I had hoped to pursue. It was a point at
            which my life could have gone either way.{" "}
          </p>

          <p className="mb-8">
            My principal called me. It was clear she was also disappointed but
            she gave me advice that I will never forget. I was 16 and her advice
            changed my life. Since then, whenever I have had a personal or
            professional challenge, when I have felt lost, uncertain of myself
            and my direction, I have pulled on the wisdom of the words she told
            me that summer day, “Elizabeth, you have fallen down at the
            crossroads, you can either stay where you are and let the traffic
            run over you, or you can pick yourself up, dust yourself off and
            continue on your journey.”
          </p>

          <p className="mb-8">
            This has become the principle by which I live my life in good and
            bad times. On many occasions I have fallen but on every occasion I
            have gotten back up, dusted myself off and kept going until I reach
            the destination and goals I have set for myself. I fall but I get
            up. I persist, I persevere, I press on, I do not relent and as a
            result I succeed and am happy.
          </p>

          <p className="mb-8">
            Are you wondering how I did academically? I have four degrees
            including two Masters, one of which is with Distinction. I still
            remember how wretched I felt that day as I watched the oncoming
            traffic and wondered what lay ahead. Thirty-five years later, I
            remain grateful that a teacher cared enough to help me get up, out
            of the way and continue with a journey that has been wonderful. Dame
            Patricia Symmonds, you touched my life and that has made all the
            difference, because it shaped my life."
          </p>

          <p className="mb-8">
            - H. Elizabeth Thompson (pictured above) Liz Thompson is Ambassador
            of Barbados to the United Nations in New York, a Writer,
            Motivational Speaker, Lawyer, Consultant, author of motivational
            book Make Yourself Happy, Former Assistant Secretary General of the
            United Nations and Minister of Government of Barbados .{" "}
          </p>
          {/*<button className="cursor-pointer px-6 py-3 border-2 rounded-lg hover:text-white transition-colors hover:bg-violet-800 underline text-violet-900">
             <Link
              to="https://samplius.com/free-essay-examples/the-main-lessons-i-have-learned-from-my-grandmother/"
              target="_blank"
            >
              Read More
            </Link> 
          </button>*/}
        </div>
        <div onClick={goBack}>
          <MenuButton title="Back" back="180" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Elizabeth;

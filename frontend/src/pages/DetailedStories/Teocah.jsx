import React from "react";
import Footer from "../../components/Footer";
import MenuButton from "../../components/MenuButton";
import { useNavigate, Link } from "react-router-dom";

const Teocah = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate("/story-blog");
  }

  return (
    <>
      {" "}
      <section className="max-w-[1000px] m-auto max-lg:p-12 sm:p-4 p-2">
        <h2 className="text-center text-3xl max-lg:text-5xl font-extrabold tracking-wider underline text-violet-950 my-8  ">
          The Main Lessons I Have Learned From My Grandmother
        </h2>
        <div className=" sm:float-right p-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5b0eae802714e595728cdab2/1529342104978-GCPF6VAP86B51FUO7NDO/Teocah.jpg?format=750w"
            alt="img"
            className="p-7 rounded-md"
          />
          <p className="text-center text-violet-900 font-bold">author:</p>
          <h2 className="text-center text-2xl font-extrabold text-violet-800">
            Teocah
          </h2>
        </div>
        <div className=" p-8 ">
          <p className="mb-8">
            My great - grandmother has served as an inspiration to me throughout
            my life. A few words spoken to me at a time of fear and weakness
            helped catapult and transform the way I approach challenges in my
            personal and professional life and will forever push me to showcase
            my strengths, work hard, and not allow fear to hold me back.
          </p>

          <p className="mb-8">
            I remember it like yesterday, I was standing on the stage about to
            deliver a song at my pre-school graduation when I choked. As the
            instrumental played, my mind said “SING” but my mouth simply could
            not open. My great-grandmother had accompanied me to the graduation,
            and up until that point, was proud of my accomplishments and all the
            awards I had won that afternoon. But my falter to sing that day,
            turned her smile immediately into a frown.
          </p>

          <p className="mb-8">
            Following the ceremony, with a piercing stern stare, she looked me
            square in the eyes and said “you had the chance to show those people
            who you are, what you can do, and now they will forever remember you
            as the girl who let fear make her mute – and, that will be your
            legacy”, and in a sharp retort feeling ashamed inside, as I started
            crying I said “no”, and then she quickly responded “then what will
            be your legacy?”.
          </p>

          <p className="mb-8">
            Those words pierced my mind and from there on out, to date, in
            everything I take part in, I ensure I do my very best and give my
            all, because at the age of 6, that day, those comments from my
            grandma made me realize that all my actions, from inception, along
            the way and til the end of my time, will leave an impression and/or
            impact on those who are a part of the journey at that time.
          </p>

          <p className="mb-8">
            That single comment, at such a young age, forever changed how I
            approached my goals and when I became older, and further understand
            the profoundness of the statement, my personal and professional
            life. Specialist hailing from Trinidad and Tobago. She holds degrees
            in Journalism and Public Relations (AAS), Media and Communications
            (BA Hons), and Gender and International Relations (Msc-Merit). She
            is also the recipient of the prestigious Chevening Scholarship
            award, and is a Queen’s Young Leaders Awardee.
          </p>

          <p className="mb-8">
            She first started volunteering at the age of 16 and eventually
            became 2nd Lieutenant in the Trinidad and Tobago Cadet Force Country
            Co-ordinator of the US Embassy of Trinidad and Tobago Youth
            Ambassador Programme. She was Trinidad and Tobago’s representative
            in the United Nations Development Programme – Caribbean Youth Think
            Tank. Teocah is presently working towards the implementation of
            youth development initiatives targeting at-risk/vulnerable children
            and youth.
          </p>
          <button className="cursor-pointer px-6 py-3 border-2 rounded-lg hover:text-white transition-colors hover:bg-violet-800 underline text-violet-900">
            <Link
              to="https://samplius.com/free-essay-examples/the-main-lessons-i-have-learned-from-my-grandmother/"
              target="_blank"
            >
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

export default Teocah;

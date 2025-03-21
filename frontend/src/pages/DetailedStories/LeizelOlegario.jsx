import React from "react";
import Footer from "../../components/Footer";
import MenuButton from "../../components/MenuButton";
import { useNavigate, Link } from "react-router-dom";

const LeizelOlegario = () => {
  const navigate = useNavigate();
  function goBack() {
    navigate("/story-blog");
  }

  return (
    <>
      {" "}
      <section className="max-w-[1000px] m-auto max-lg:p-12 sm:p-4 p-2">
        <h2 className="text-center text-3xl max-lg:text-5xl font-extrabold tracking-wider underline text-violet-950 my-8  ">
          A Filipino Culinary Visionary's Impact on Media and Representation
        </h2>
        <div className=" sm:float-right p-4">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5b0eae802714e595728cdab2/1529342620183-19WMIIRH0YNCCQ1X2EC7/Leizel.jpg?format=750w"
            alt="img"
            className="p-7 rounded-md"
          />
          <p className="text-center text-violet-900 font-bold">author:</p>
          <h2 className="text-center text-2xl font-extrabold text-violet-800">
            Leizel Olegario
          </h2>
        </div>
        <div className=" p-8 ">
          <p className="mb-8">
            Recently at the inauguration of the African Union - European Union
            Youth Plug-In Initiative (AUYPII), on the sidelines of the 4th
            Africa-EU Youth Summit in Abidjan, Cote d'Ivoire, I was asked in the
            presence of fellow young leaders and high level officials to share
            my role model. At that time, I said "I am inspired by each and every
            person around me and that everyone present has the chance to be my
            role model in this new journey." One week later, I was asked the
            same question, with an additional challenge: single out one specific
            woman.
          </p>

          <p className="mb-8">
            Brenda King MBE, President of the Sustainable Development
            Observatory at the European Economic and Social Committee (EESC,
            where she sits as the only black female member), former President of
            the African-Caribbean-Pacific (ACP) EU Committee, Chair of the
            EU-Caribbean Forum Joint Consultative Committee (EU-CF JCC) and CEO
            of African Caribbean Diversity (UK-based charity) is undoubtedly my
            role model. Brenda has not only inspired me through her career and
            achievements, but she has actively supported me as I build my skills
            and expertise and pursue my passions.
          </p>

          <p className="mb-8">
            Having shown a keen interest in observing the [creation of a] new
            generation of EU free trade agreements with the ACP group, Brenda
            invited me to attend the inaugural meetings of the EU-CF JCC. As I
            built up my expertise, she acknowledged my growth and nominated me
            for the position of Expert to the EESC to draw up the Committee's
            Opinion on the future of the EU's relations with the ACP group.
            After my nomination was approved by all Committee members, I became
            the youngest ever Expert at the EESC. This experience was a catalyst
            in both my professional career and my personal life. From that
            moment onwards, whenever I looked myself in the mirror, I too
            recognised the Expert that I had become.
          </p>

          <p className="mb-8">
            Brenda always asked, "what do you think?" I didn't realise then how
            motivating that was, but looking back on it now, asking my opinion
            was inclusive and avant-garde. Indeed, it is the essence of the
            Sustainable Development Goal 16, to ensure ‘responsive, inclusive,
            participatory and representative decision-making'. Brenda was
            already putting into practice what world leaders would eventually
            agree to do on a global scale. By asking the simple question, "what
            do you think?", she was practicing a fundamental act of empowerment.
            Brenda gave me the opportunity to respond with my ideas, to share my
            reflections and to deliberate on them, and then decide on what is
            included in the final text or not, at the same table. Her
            dedication, ambition and drive was inspiration beyond belief and the
            fact that she always asked, "what do you think?", empowered me to
            continue to pursue my dreams.
          </p>

          <p className="mb-8">
            LeizelOlegario Williams (pictured above) is a dual national of the
            UK and Trinidad and Tobago, as well as Researcher on EU affairs with
            Africa, the Caribbean and the Pacific (ACP) countries. She is
            Founder and President of the ACP Young Professionals Network (ACP
            YPN). LeizelOlegario has several years of work experience on EU
            relations with the African, Caribbean and Pacific (ACP) group of
            states, in both the public (European Commission, CTA, European
            Economic and Social Committee (EESC)) and private sector
            (consulting). In 2015, LeizelOlegario was appointed Expert to the
            EESC for the Green Paper on ‘The Future of the EU’s relations with
            the ACP group and the successor to the Cotonou Partnership
            Agreement’. She is also member of the EU-Cariforum Joint
            Consultative Committee, EESC. She has been researching the EU-ACP
            Economic Partnership Agreements since 2011 and has numerous
            publications on the topic.
          </p>

          <p className="mb-8">
            LeizelOlegario is a graduate of King's College London, Sciences Po
            Paris and post-graduate of the College of Europe, Bruges. She has
            researched, published and travelled widely in Europe, Africa and the
            Caribbean, and also in Asia and South America.
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

export default LeizelOlegario;

import React from "react";
import SideBar from "../components/Resources/SideBar";
import SideBarMenu from "../components/Resources/SideBarMenu";
import Content from "../components/Resources/Content";
import Footer from "../components/Footer";
import Askme from "../components/Askme";
import img1 from '../assets/resources/education-img-1.jpg'

const Education = () => {
  const title = ` Education
Challenges Faced by Women`;
  const titleDesc = `Lack of Access to Quality Education: In some countries, girls have limited access to education due to poverty, distance from schools, or lack of resources. UNESCO estimates that 130 million girls are out of school worldwide.
Early Marriages and Cultural Norms: Many young girls are forced into marriage at an early age, which interrupts their education. Cultural practices in some regions prioritize boys' education over girls'.`;

  const heading1 = `1. Limited Access to Quality Education`;
  const para1 = `Across low-income and rural areas, girls often lack access to education. UNESCO estimates that over 250 million children worldwide remain out of school, with 130 million of them being girls. Economic barriers, school fees, and lack of nearby facilities particularly hinder education for girls in rural areas. This educational gap can exacerbate poverty cycles and gender inequality, affecting future economic opportunities for girls.`;
  const alt1=`{${title}} image`

  const solHd = `Solutions and Approaches`;
  const sol11 = `Scholarships and Incentives for Girls: Programs such as the Malala Fund provide scholarships to help girls stay in school, especially in conflict-affected and impoverished regions. These scholarships reduce financial burdens on families and encourage continued education. UNESCO recommends financial and practical incentives, like cash transfers and free meals, which have been effective in increasing school attendance.`;
  const sol12 = `Building Schools and Resources in Rural Areas: Expanding access in remote areas by establishing local schools or providing reliable transportation can enhance attendance. UNESCO suggests that schools should ideally be located within short distances from students’ homes. This approach is critical for reducing dropout rates, particularly for girls who may face long commutes or unsafe travel conditions.`;

  const heading2 = `2. Early Marriage and Cultural Barriers`;
  const para2 = `Societal expectations and early marriage often prevent girls from continuing their education. World Bank research shows that girls forced into marriage are less likely to finish school and more likely to become young mothers, compounding socioeconomic challenges. In countries like Niger, girls often drop out to marry during school breaks, which disrupts educational continuity.`;
  const sol21 = `Curriculum Reform and STEM Promotion: Encouraging girls to participate in STEM fields by updating curricula and introducing gender-sensitive content can foster inclusivity and broaden future career opportunities. Programs that expose girls to STEM early on can inspire interest and confidence in fields traditionally dominated by men. Research from the World Bank supports integrating these subjects with hands-on, culturally relevant learning.`;
  const sol22 = ``;

  const heading3 = `3. School Safety Concerns`;
  const para3 = ` Girls are more vulnerable to violence and harassment in and around schools, especially in settings with inadequate security measures. Gender-based violence in educational environments discourages girls from attending, and many schools lack basic sanitary facilities, which can prevent girls from attending during menstruation. UNESCO’s recent report highlighted the urgent need for schools with safe environments and gender-sensitive facilities.`;
  const sol31 = `Community Advocacy for Girls’ Education: Educating parents and local communities on the importance of girls’ education can challenge traditional views and reduce cultural barriers. Advocacy programs have proven effective in shifting perspectives and fostering community-led support for girls’ education. UNESCO’s "Learning Never Stops" campaign, for instance, emphasizes the value of girls’ education for the broader community, promoting equity and sustainable development.`;
  const sol32 = ``;

  const conclusionDesc = `Empowering girls through education leads to societal benefits, including better health, economic growth, and gender equality. By implementing community-focused programs, expanding resources, and addressing systemic barriers, these strategies aim to build a future where every girl has access to safe and equitable education opportunities.`;
  return (
    <div className="grid max-lg:grid-cols-[300px_1fr] grid-cols-1 max-w-[1500px] m-auto ">
      <div>
        <aside className="max-lg:hidden">
          <SideBarMenu />
        </aside>
        <aside className="hidden max-lg:block">
          <SideBar />
        </aside>
      </div>
      <div className="py-6 px-3">
        <Content
          title={title}
          titleDesc={titleDesc}
          heading1={heading1}
          para1={para1}
          img1={img1}
          alt1={alt1}
          solHd={solHd}
          sol11={sol11}
          sol12={sol12}
          heading2={heading2}
          para2={para2}
          sol21={sol21}
          sol22={sol22}
          heading3={heading3}
          para3={para3}
          sol31={sol31}
          sol32={sol32}
          conclusion="Conclusion"
          conclusionDesc={conclusionDesc}
        />
      </div>
      <Askme/>
      <div className="max-lg:row-start-2 max-lg:col-start-3 max-lg:row-end-3 max-lg:col-end-[-3]">
        <Footer />
      </div>
    </div>
  );
};

export default Education;

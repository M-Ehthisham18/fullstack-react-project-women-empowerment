import React from "react";
import SideBar from "../components/Resources/SideBar";
import SideBarMenu from "../components/Resources/SideBarMenu";
import Content from "../components/Resources/Content";
import Footer from "../components/Footer";
import Askme from "../components/Askme";
import img1 from '../assets/resources/gender-equality-img.jpg'

const GenderEquality = () => {
  const title = `Gender Equality: Challenges and Solutions`;
  const titleDesc = `Gender equality remains a pressing global issue, with women and marginalized genders facing systemic barriers in areas like education, employment, healthcare, and political representation. Despite progress, women still earn less than men, face gender-based violence, and have limited access to leadership roles.`;

  const heading1 = `1. Workplace Inequality`;
  const para1 = ` Women continue to experience substantial inequality in the workforce. The World Economic Forum’s 2023 Global Gender Gap Report highlights that globally, women are underrepresented in leadership and earn less than men in similar roles. At this pace, achieving workplace gender parity could take more than a century. This inequality includes a "motherhood penalty," where women with children often face discrimination in hiring, promotions, and salary negotiations, further widening the gender gap.`;
  const alt1=`{${title}} image`

  const solHd = `Solutions and Approaches:`;
  const sol11 = `Policy and Legal Reform: Implementing and enforcing laws that mandate equal pay and anti-discrimination policies is crucial. For instance, the European Union has taken steps to reduce the gender pay gap through transparency laws that require companies to disclose salary information. Additionally, promoting quotas or targets for women’s representation in political and corporate spaces can increase gender diversity and inclusivity.`;
  const sol12 = ``;

  const heading2 = `2. Educational Gaps`;
  const para2 = `Although global progress has been made in increasing girls’ access to education, significant barriers persist in many regions. UNESCO data reveals that around 130 million girls worldwide remain out of school due to cultural norms, early marriage, and financial constraints. Educational gaps also exist in science, technology, engineering, and mathematics (STEM) fields, where girls are less encouraged and supported, impacting their career paths in high-demand sectors.
`;
  const sol21 = `Community Engagement Programs: Grassroots initiatives can challenge cultural norms and stereotypes. Community-based programs can raise awareness about the benefits of girls’ education and gender equality in the workforce. These programs also empower parents to view girls’ education as valuable, addressing some root causes of educational inequality.`;
  const sol22 = ``;

  const heading3 = `3. Political Representation`;
  const para3 = `Women’s underrepresentation in political leadership hinders the development of gender-sensitive policies. According to UN Women, only 26% of national parliamentarians are women. This lack of representation impacts policies concerning healthcare, education, and workplace equality, making it essential to improve gender diversity in political institutions.`;
  const sol31 = `Mentorship and Leadership Programs: Programs like Girls Who Code and Lean In Circles focus on boosting girls’ interest in STEM and leadership. These initiatives also provide mentorship opportunities, helping women build confidence and navigate their careers. Providing scholarships specifically for women in male-dominated fields such as engineering and technology encourages more girls to pursue these high-demand careers.`;
  const sol32 = ``;

  const heading4 = `4. Social and Cultural Biases`;
  const para4 = `Persistent gender stereotypes and biases continue to limit women's roles and ambitions. Social norms, such as the idea that caregiving is a woman’s primary responsibility, restrict access to education and career opportunities. These biases are further amplified in rural and conservative regions, where gender roles are rigidly defined and enforced.`;
  const sol41 = `Corporate Initiatives for Gender Parity: Businesses have the power to set an example by creating gender-equal workplaces. For instance, some companies have introduced parental leave policies that apply to both genders, helping to mitigate the impact of caregiving responsibilities on career growth. Companies are also setting gender diversity goals in hiring and promotions, supporting training programs to elevate women into leadership roles, and establishing safe reporting mechanisms for workplace harassment.`;

  const conclusionDesc = `To accelerate gender equality, an integrated approach involving legal, social, and corporate reforms is necessary. Addressing deep-rooted biases and implementing policies supporting equal pay, educational access, and political representation can lead to a fairer, more equitable society. Achieving true gender parity will require consistent global efforts across communities, governments, and organizations.`;
  return (
    <div className="grid max-lg:grid-cols-[300px_1fr] grid-cols-1 max-w-[1500px] m-auto">
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
          heading4={heading4}
          para4={para4}
          sol41={sol41}
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

export default GenderEquality;

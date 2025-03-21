import React from "react";
import SideBar from "../components/Resources/SideBar";
import SideBarMenu from "../components/Resources/SideBarMenu";
import Content from "../components/Resources/Content";
import Footer from "../components/Footer";
import Askme from "../components/Askme";
import img1 from '../assets/resources/violance-img.jpg'

const Challenges = () => {
  const title = `Challenges Faced by Women`;
  const titleDesc = `Sexual abuse and harassment remain significant issues that disproportionately impact women worldwide, with both immediate and long-term social and psychological effects. Below is a detailed exploration of the challenges faced, accompanied by solutions and actionable approaches that aim to reduce the incidence of these issues.`;

  const heading1 = `1. Prevalence of Sexual Violence:`;
  const para1 = `According to the World Health Organization (WHO), approximately one in three women globally experience physical or sexual violence in their lifetime. This issue spans cultures and geographies, affecting women in both public and private spaces. Incidents of intimate partner violence are particularly prevalent, but women also face harassment and assault from non-partners, with many cases remaining unreported due to social stigma and fear of retaliation​.`;
  const alt1=`{${title}} image`

  const solHd = `Solutions and Approaches:`;
  const sol11 = `Legal Protections and Reforms: Strengthening legal frameworks to protect women from sexual abuse and harassment is crucial. Clear laws against workplace harassment, supported by enforceable policies, can deter potential offenders. Establishing accessible reporting mechanisms and ensuring that complaints are handled with confidentiality and sensitivity can empower women to come forward. Countries with strong legal protections against gender-based violence tend to report lower incidence rates, as laws serve as both a deterrent and a tool for justice.`;
  const sol12 = ``;

  const heading2 = `2. Workplace Harassment`;
  const para2 = ` Workplace harassment, including sexual violence, affects a considerable number of women globally. The International Labour Organization (ILO) reports that 34.1% of women have experienced some form of violence or harassment at work, including psychological and sexual harassment. Young women are especially vulnerable, with over 26% reporting experiences of harassment in their recent employment history. In many workplaces, reporting mechanisms are inadequate or inaccessible, leaving women without sufficient avenues for addressing these issues​.
`;
  const sol21 = `Workplace Policies and Training: Organizations can play a significant role in combatting sexual harassment by implementing strict anti-harassment policies, providing regular training on respectful workplace conduct, and fostering a supportive culture. Workplaces that offer transparent reporting channels and take swift, decisive action against offenders help create safer environments for women. Training sessions on gender sensitivity and respectful communication can also reduce instances of unconscious biases and discrimination.`;
  const sol22 = ``;

  const heading3 = `3. Stigma and Victim Blaming`;
  const para3 = `Societal attitudes often discourage victims from reporting sexual abuse due to fear of being blamed or ostracized. This stigma surrounding sexual violence can deter women from seeking help or justice, creating an environment where perpetrators are less likely to face consequences, and victims feel isolated. Gender norms that tolerate violence against women contribute to a culture where victims are often discouraged from speaking out`;
  const sol31 = `Awareness Campaigns and Education: Educational initiatives are essential to shift cultural norms and raise awareness about issues of consent and respect. Community-led campaigns that educate men and women alike about healthy relationships, respectful behavior, and the importance of supporting victims can help reduce stigma. For example, campaigns by organizations like UN Women focus on changing public attitudes toward gender-based violence, helping to create communities that support survivors rather than blaming them.`;
  const sol32 = `Self-Defense Training: Empowering women through self-defense programs is another valuable strategy. Self-defense training can give women the skills and confidence to protect themselves in threatening situations. Many community organizations and non-profits offer free or subsidized self-defense classes to equip women with basic techniques for self-protection, creating a sense of agency and resilience among participants.`;

  const conclusionDesc = `While sexual violence and harassment are complex issues rooted in societal, cultural, and institutional frameworks, a combination of strong legal reforms, supportive workplace policies, and public awareness can create an environment where women feel safe and empowered. By implementing these solutions, society can make significant strides toward reducing incidents of harassment and ensuring that women have the resources and support needed to thrive without fear.`;
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

export default Challenges;

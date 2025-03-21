import React from "react";
import SideBar from "../components/Resources/SideBar";
import SideBarMenu from "../components/Resources/SideBarMenu";
import Content from "../components/Resources/Content";
import Footer from "../components/Footer";
import Askme from "../components/Askme";
import img1 from '../assets/resources/trauma-img.jpg'

const ChildAndAdult = () => {
  const title = `Child and Adult Trauma: Challenges and Solutions`;
  const titleDesc = `Trauma—especially stemming from childhood abuse, neglect, or exposure to violence—can have significant, long-term impacts on mental health. Research underscores how childhood trauma increases susceptibility to mental health issues, affecting self-esteem, relationships, and life outcomes. Children who witness or experience violence often develop heightened vigilance, difficulty trusting others, and maladaptive coping mechanisms, such as emotional detachment or perfectionism, which may persist into adulthood. This unresolved trauma contributes to anxiety, depression, and even post-traumatic stress disorder (PTSD) in later years.`;

  const heading1 = `1. Limited Access to Trauma-Informed Mental Health Services`;
  const para1 = ` Many women, especially in underserved or rural areas, lack access to mental health services tailored to trauma recovery. Trauma-informed care is essential for addressing PTSD and other effects of trauma, but it remains scarce due to limited resources, funding, and the availability of trained professionals`;
  const alt1=`{${title}} image`

  const solHd = `Solutions and Approaches:`;
  const sol11 = `Trauma-Informed Counseling and Support: Expanding access to trauma-specific mental health services is crucial. Trauma-informed counseling focuses on building a safe, trust-based environment where survivors feel empowered to process their experiences. Support groups and services like Rape Crisis Centers can provide validation and help survivors build resilience, promoting long-term healing through structured, sensitive interventions.`;
  const sol12 = ``;

  const heading2 = `2. Stigma and Societal Taboos around Trauma and Mental Health`;
  const para2 = ` Societal stigma often prevents women from seeking mental health care. In many cultures, discussions about trauma, especially involving domestic violence or sexual abuse, are highly taboo. This stigmatization can lead to isolation, discouraging women from getting the help they need for recovery.`;
  const sol21 = `Public Awareness Campaigns: Public campaigns are essential for reducing stigma around trauma and mental health issues, especially in communities where these topics are often taboo. Educational initiatives can help normalize seeking mental health care and dispel myths that prevent survivors from accessing support. Campaigns also foster empathy within communities, encouraging support for trauma survivors.`;
  const sol22 = ``;

  const heading3 = `3. Lack of Awareness and Education on Trauma`;
  const para3 = ` Without a widespread understanding of trauma and its effects, many communities fail to recognize the importance of mental health support for trauma survivors. Awareness campaigns are often limited, meaning many people do not understand the signs of trauma, its impact on mental health, or the benefits of trauma-informed care.`;
  const sol31 = `Training Programs for Mental Health Professionals: Mental health practitioners trained in trauma-informed care can better address the specific needs of trauma survivors. This training enables professionals to recognize symptoms of trauma, handle triggers sensitively, and create supportive therapy structures. Trauma-specific therapy methods, like eye movement desensitization and reprocessing (EMDR), have been particularly effective for trauma survivors by helping them reprocess traumatic memories safely.`;
  const sol32 = ``;

  const heading4 = `4. Underdeveloped Support Systems and Resources`;
  const para4 = ` Insufficient support networks and resources, such as crisis centers or community-based support groups, further hinder women’s access to essential care. With few community-based initiatives, survivors of trauma are often left without a supportive environment to help them process and heal from their experiences.`;
  const sol41 = `Resilience and Recovery Programs: Programs that teach resilience-building skills, such as mindfulness, meditation, and stress management, help trauma survivors regain a sense of control. Skills in self-regulation can enable women to manage triggers and emotional responses more effectively, fostering a sense of stability and empowerment as they rebuild their lives.`;

  const conclusionDesc = `For adult women, trauma from abuse, violence, or discrimination often goes unaddressed. A major barrier is the lack of mental health resources, as well as cultural stigmas that deter many from seeking help. Domestic violence alone can result in enduring mental health consequences, including depression and PTSD, exacerbating feelings of isolation and hopelessness. Limited access to trauma-informed care means many women are unable to process these experiences effectively, leading to lasting psychological scars.`;
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

export default ChildAndAdult;

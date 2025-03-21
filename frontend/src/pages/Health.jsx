import React from "react";
import SideBar from "../components/Resources/SideBar";
import SideBarMenu from "../components/Resources/SideBarMenu";
import Content from "../components/Resources/Content";
import Footer from '../components/Footer'
import Askme from "../components/Askme";
import img1 from '../assets/resources/health-img.jpg'


const Health = () => {
  const title = `Physical, Mental, and Sexual Health
Challenges Faced by Women`;
  const titleDesc = `Empowering women through technology, education, and community support plays a critical role in achieving gender equity. Strategies like online platforms, self-defense programs, and educational campaigns are transforming lives, offering women both practical resources and psychological resilience.`;

  const heading1 = `1. Physical Health`;
  const para1 = `Women face unique physical health challenges, especially in reproductive and maternal health. Conditions related to pregnancy and childbirth contribute significantly to health risks for women. In 2013, almost 300,000 women died from pregnancy-related complications, largely preventable if essential services were available. Cervical and breast cancers are also pressing health concerns, with approximately 500,000 deaths yearly, especially in low-income regions that lack adequate screening and treatment services.`;
  const alt1=`{${title}} image`

  const solHd = `Solutions and Approaches:`;
  const sol11 = `Improved Access to Maternal Health Services: Ensuring that women in underserved regions have access to essential maternal care, including antenatal visits and safe childbirth facilities, can drastically reduce maternal mortality rates.`;
  const sol12 = `Cancer Screening Programs: Widespread screening for cervical and breast cancer, along with vaccinations for HPV, could prevent thousands of deaths annually. Strengthening healthcare infrastructure to deliver these services in remote areas is crucial.`;

  const heading2=`2. Mental Health`;
  const para2=`Women are more prone to mental health issues such as anxiety and depression, which are twice as common among women compared to men. Factors like hormonal changes, gender discrimination, and societal pressures contribute to these issues. Postpartum mental health disorders also affect women significantly, with implications for both mothers and their children. For instance, untreated maternal mental health conditions may lead to negative outcomes for both mother and child, such as increased risk of preterm birth and impaired parent-child bonding.`
  const sol21=`Community-Based Mental Health Services: Therapy groups, support networks, and mental health workshops tailored for women can help address challenges by providing safe spaces for discussion and support.`
  const sol22 =`Targeted Maternal Mental Health Interventions: Educating healthcare providers to identify symptoms of postpartum depression and anxiety can promote timely intervention, reducing long-term impacts on families.`

  const heading3=`3. Sexual Health`;
  const para3=`Women’s sexual health encompasses a range of issues, including access to contraceptives, sexual education, and safe family planning services. Barriers to accessing these services can result from stigma, resource limitations, and restrictive laws. Additionally, sexually transmitted infections (STIs), including HIV, pose significant risks, with young women being particularly vulnerable. The prevalence of HIV among young women remains high due to inadequate prevention education and resources.`
  const sol31=`Education on Reproductive Health: Programs focusing on reproductive health education help reduce stigma and empower women to make informed choices regarding contraception and family planning.`
  const sol32=`Comprehensive STI Prevention and Treatment: To curb the spread of infections like HIV and HPV, integrating STI prevention education and accessible healthcare facilities in high-risk areas is essential. Collaborative efforts from organizations like WHO and UN Women can strengthen these initiatives.`

  const conclusionDesc=`These strategies, supported by reliable healthcare infrastructure and robust community engagement, can create a healthier, safer environment for women, promoting well-being and resilience. Such efforts are crucial for addressing the multifaceted health challenges women face and helping them achieve their fullest potential.`;
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
      <Footer/>
      </div>
    </div>
  );
};

export default Health;

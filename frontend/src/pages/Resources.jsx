import React from "react";
import SideBarMenu from "../components/Resources/SideBarMenu";
import SideBar from "../components/Resources/SideBar";
import Content from "../components/Resources/Content";
import Footer from '../components/Footer'
import Askme from '../components/Askme'
import img1 from '../assets/resources/ Empowerment-img.jpg'

const Resources = () => {
  const alt1="Image..."
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
      <div className="bg-white">
        <Content
          title="Strategies For Women's Empowerment"
          titleDesc="Empowering women through technology, education, and community support plays a critical role in achieving gender equity. Strategies like online platforms, self-defense programs, and educational campaigns are transforming lives, offering women both practical resources and psychological resilience."
          heading1='1. Technology as a Tool for Safety and Empowerment'
          para1='Mobile apps, websites, and helplines provide women with immediate access to safety resources, legal assistance, and support networks. For example, UN Women reports that global innovations like SafeCity and Hollaback help women report harassment anonymously, mapping unsafe areas and raising awareness of gender-based violence. Technology also connects women with remote healthcare, legal resources, and training in fields traditionally dominated by men, fostering both security and economic empowerment. The significance of this is underscored by statistics showing that women constitute nearly 40% of the world’s informal economy, often with limited protections, making these resources vital for financial stability.'
          img1={img1}
          alt1={alt1}
          heading2='2. Self-Defense and Empowerment Programs'
          para2='Many organizations partner with community centers to offer self-defense training, instilling confidence in women. Empowerment workshops emphasize personal agency, helping women to feel safer in public spaces. According to UN reports, an estimated one in three women worldwide has experienced physical or sexual violence, highlighting the urgent need for self-defense programs. These programs, combined with legal advocacy, provide tangible skills and foster solidarity among women.'
          heading3='3. Educational Campaigns for Rights Awareness'
          para3='Knowledge about legal rights, workplace protections, and financial independence is foundational to women’s empowerment. In countries where awareness campaigns are implemented, women are more likely to report abuse and seek support services. Globally, women earn 20% less than men and often face barriers to entrepreneurship, with only 10.1% of women starting businesses compared to 12.6% of men. Campaigns advocating for workplace equality, educational access, and gender-sensitive policies play a crucial role in reducing these disparities. For example, UN Women notes that expanding care policies could create up to 300 million jobs by 2035, disproportionately benefiting women by addressing gaps in unpaid labor.'
          conclusion='Conclusion'
          conclusionDesc='These multi-dimensional strategies, when implemented cohesively, can significantly improve the quality of life for women, ensuring they have equal opportunities to succeed. The ripple effects of empowerment not only benefit women but contribute to more just and prosperous communities worldwide.'
        />
      </div>
      <Askme/>
      <div className="max-lg:row-start-2 max-lg:col-start-3 max-lg:row-end-3 max-lg:col-end-[-3]">
      <Footer/>
      </div>
    </div>
  );
};

export default Resources;

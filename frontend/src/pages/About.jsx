import React from "react";
import Footer from "../components/Footer";
import AboutMe from '../components/about/AboutMe'

const About = () => {
  const communityData = [
    {
      name: 'Lean In',
      description: 'A global community founded by Sheryl Sandberg, Lean In is dedicated to empowering women to achieve their goals. It offers resources for mentorship, networking, and leadership development.',
      link: 'https://leanin.org/'
    },
    {
      name: 'Women for Women International',
      description: 'This organization helps women survivors of war rebuild their lives, offering access to education, healthcare, legal support, and vocational training, while building a strong community of women.',
      link: 'https://www.womenforwomen.org/'
    },
    {
      name: 'She Leads Africa',
      description: 'She Leads Africa is a platform aimed at empowering young African women entrepreneurs with resources, events, and mentorship programs to help them lead successful businesses and create positive social impact.',
      link: 'https://sheleadsafrica.org/'
    },
    {
      name: 'The Everywoman Network',
      description: 'A global community for women to connect, share experiences, and receive guidance on personal and professional growth. It offers resources for women\'s health, career development, and leadership opportunities.',
      link: 'https://www.everywoman.com/'
    },
    {
      name: 'Girl Up',
      description: 'A movement focused on girls’ education and empowerment, supported by the United Nations Foundation. Girl Up advocates for the rights of girls and helps create a safe space for learning and sharing experiences.',
      link: 'https://girlup.org/'
    },
    {
      name: 'The National Women’s Health Network (NWHN)',
      description: 'A U.S.-based non-profit organization supporting women’s health rights, offering resources on various health issues, legal rights, and advocacy campaigns.',
      link: 'https://www.nwhn.org/'
    },
    {
      name: 'Feminist Frequency',
      description: 'A community dedicated to critiquing and analyzing the media, aiming to create a more inclusive and gender-neutral media landscape. It’s a great resource for projects focused on gender equality.',
      link: 'https://feministfrequency.com/'
    }
  ];
  return (
    <div className="max-w-[1500px] m-auto ">
      <div className=" p-8 max-lg:p-16">
        {/* About Me Section */}
        <AboutMe/>

        {/* Vision Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700">
            Our vision is to empower women by providing accessible tools,
            knowledge, and support to lead healthier, safer, and more fulfilling
            lives. We recognize that women encounter unique challenges that
            impact their physical, mental, and emotional well-being, and our
            goal is to bridge these gaps by offering holistic, reliable
            resources for women across all backgrounds. From healthcare guidance
            on topics such as trauma recovery and sexual health to mental
            wellness tools, legal resources, and educational support, our
            platform is designed to be a comprehensive resource tailored to
            women’s needs. We strive to cultivate an inclusive community where
            women feel valued, heard, and supported in their journeys. By
            equipping women with essential information and fostering a network
            of professionals, advocates, and peers, we aim to inspire positive
            change, resilience, and growth—helping every woman build a life of
            health, security, and purpose.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700">
          Our mission is to make a meaningful, lasting impact on women’s lives by equipping them with the knowledge and support they need to overcome life’s challenges and seize new opportunities. Through this platform, we aim to inspire and empower women to take charge of their well-being, achieve personal growth, and pursue their dreams with confidence. By offering essential resources in areas such as healthcare, education, and legal guidance, we strive to create a space where women can gain the skills and encouragement needed to shape their futures and thrive in every aspect of life.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            What We Offer
          </h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              <span className="font-semibold">Health Resources:</span> We provide expert advice on topics such as trauma recovery, mental health, sexual health, and menstrual wellness. These resources are designed to help women navigate sensitive health issues with confidence and access the guidance they need to make informed decisions.
            </li>
            {/* <li>
              <span className="font-semibold">Professional Connections:</span> A
              network of healthcare and legal professionals for guidance.
            </li> */}
            <li>
              <span className="font-semibold">Interactive Chatbots:</span> Available 24/7, our AI-powered chatbots are here to answer common questions, provide immediate support, and connect users with resources, offering help on-demand whenever it’s needed most.
            </li>
            {/* <li>
              <span className="font-semibold">
                Shelter & Assistance Directories:
              </span>{" "}
              Comprehensive lists of shelters, hospitals, and centers for women
              in need.
            </li> */}
            <li>
              <span className="font-semibold">Educational Support:</span>{" "}
              Our platform provides resources for girls’ education and women’s empowerment, encouraging lifelong learning and offering tools to help women achieve personal and professional goals.
            </li>
            <li>
              <span className="font-semibold">Inspiring Stories:</span> We showcase personal stories of resilience and triumph over adversity, fostering a sense of community and hope. These stories serve to inspire and uplift, offering examples of strength in the face of challenges.
            </li>
            <li>
              <span className="font-semibold">Community Forum:</span> Here is a numbered list describing the online communities that support women's empowerment and their respective links:    
              <ul className="px-6 md:px-12 py-6">
        {communityData.map((community, index) => (
          <li key={index} className="list-decimal">
            <strong>{community.name}</strong><br />
            {community.description}
            <a href={community.link} target="_blank" rel="noopener noreferrer" className="underline text-violet-800">
              Visit Website
            </a>
          </li>
        ))}
      </ul>
            </li>
          </ul>
        </section>

        {/* Our Story Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Story</h2>
          <p className="text-gray-700">
            The idea for{" "}
            <span className="font-semibold">Women's Empowerment</span> was
            born from a desire to create a safe, informative, and inclusive
            platform. We aim to make a meaningful difference in women’s lives,
            offering reliable resources and fostering a community of support.
          </p> */}
          
          <h2 className="text-2xl font-bold text-center mb-4">Our Story</h2>
      <p className="text-lg text-gray-700 mb-4">
        The idea for <strong>Women's Empowerment</strong> emerged from a deep-rooted desire to create a space where every woman, regardless of her background or circumstances, feels seen, heard, and supported. In a world where women often face challenges that seem insurmountable—be it in <span className="text-violet-800">healthcare challenges</span>, safety, or navigating life's many struggles—our mission is to be a beacon of hope. We aim to provide not only the information and resources women need, but also a sense of belonging and <span className="text-violet-800">empowerment</span>.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        This platform was born from the belief that women deserve more than just survival—they deserve the opportunity to thrive, to heal, and to live with dignity. It’s not just about offering services or advice; it’s about creating a compassionate community that uplifts and strengthens each individual, knowing that when women come together, they can accomplish anything. This is at the core of our commitment to <span className="text-violet-800">women's support</span> and <span className="text-violet-800">education</span>.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        At <strong>Women's Empowerment</strong>, we don’t just aim to inform—we aim to inspire, to foster resilience, and to remind women that they are never alone in their journey. Together, we are unstoppable. Our goal is to empower women to take control of their own lives, providing them with the tools they need to flourish.
      </p>
        </section>

      </div>
      <Footer/>
    </div>
  );
};

export default About;

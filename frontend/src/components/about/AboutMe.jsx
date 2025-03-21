import React from "react";
import Card from './Card'
const AboutMe = () => {
  return (
    <section className="  bg-white rounded-lg shadow-lg p-4 md:p-8 min-w-[288px] mb-8 ">
      <div className="md:flex">
      <div className="md:w-[60%]">
      <h2 className="text-3xl font-bold text-purple-700 mb-4 text-center">About Me</h2>
      <p className="text-gray-700">
        Welcome to <span className="font-semibold">Women Empowerment</span> – a
        committed platform focused on empowering, educating, and uplifting women
        in every aspect of life, from health and safety to personal growth and
        community support. We believe that every woman deserves access to
        compassionate resources, accurate information, and a supportive network.
        We envision a world where every woman feels empowered to take charge of
        her well-being, pursue her goals, and overcome obstacles with
        confidence. Our platform offers tools, resources, and stories of
        resilience to inspire and guide women from all walks of life. By
        fostering connections to healthcare, mental wellness, and legal
        guidance, we aim to create a safe, inclusive space where women can
        thrive. Together, we build a community rooted in empathy, growth, and
        the shared commitment to advancing opportunities for women everywhere.
      </p>
      </div>
      <div className="max-w-[400px] m-auto rounded-lg overflow-hidden">
        <Card/>
      </div>
      </div>
    </section>
  );
};

export default AboutMe;

import React from "react";
import Footer from "../components/Footer";
import Card from "../components/stories/Card";
import Hero from "../components/stories/Hero";
import Askme from '../components/Askme'
const Storyblog = () => {
  return (
    <div>
      <div className="max-w-[1200px] m-auto p-6 sm:p-12">
        <Hero />
        {/* 
                      titles
        " Stories of Strength: Real Voices, Real Inspirations"
          "Inspire the World: Share Your Journey"
          "Rise & Share: Stories That Spark Change"
          "From Heart to Heart: Inspiring Journeys"
          "Unfiltered Inspiration: Real Stories of Resilience"
          "Voices of Victory: Sharing the Path to Overcoming"
          "True Tales of Triumph: Empowering Through Stories"
          "Together We Rise: Real-Life Inspirations"
          "Beyond the Struggle: Stories of Hope and Resilience"
          "Inspiration Unleashed: Your Story Matters" */}
        <h2 className="text-center text-2xl max-lg:text-3xl text-violet-900 font-extrabold sm:px-6 py-8">
          Unfiltered Inspiration: Real Stories of Resilience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 max-lg:grid-cols-3 w-full place-items-center gap-y-16 gap-x-1 m-auto mb-32">
          <Card title="A Filipino Culinary Visionary's Impact on Media"
            author="Leizel Olegario"
            img="https://images.squarespace-cdn.com/content/v1/5b0eae802714e595728cdab2/1529342620183-19WMIIRH0YNCCQ1X2EC7/Leizel.jpg?format=750w"/>
          <Card
            title="Assistant Secretary-General for Safety and Security"
            author="Mbaranga Gasarabwe"
            img="https://images.squarespace-cdn.com/content/v1/5b0eae802714e595728cdab2/1529342078909-XG33XFNJ6PFV7Z1QU7CI/Mbaranga+Gasarabwe.jpg?format=750w"
          />
          <Card title="The Main Lessons I Have Learned From My Grandmother"
            author="Teocah"
            img="https://images.squarespace-cdn.com/content/v1/5b0eae802714e595728cdab2/1529342104978-GCPF6VAP86B51FUO7NDO/Teocah.jpg?format=750w"/>
          <Card title="Mentorship Beyond Authority:Story of Vincent Sweeney  "
            author="Vincent Sweeney"
            img="https://images.squarespace-cdn.com/content/v1/5b0eae802714e595728cdab2/1529342215079-099L4QHHB4BW1PIJDXEQ/Vincent.jpg?format=750w"/>
          <Card title="Picking Yourself Up: The Wisdom of Dame Patricia Symmonds "
            author="H. Elizabeth Thompson"
            img="https://images.squarespace-cdn.com/content/v1/5b0eae802714e595728cdab2/1529342327333-8HN17ISJCN70UQRQRON3/LizThompson.jpg?format=750w"/>
          <Card title="Empowered by Mentorship: A Story of Inspiration "
            author="Yentyl Williams"
            img="https://images.squarespace-cdn.com/content/v1/5b0eae802714e595728cdab2/1529342466261-GD7F6VJH8PMGY9036BEA/Yentyl.jpg?format=750w"/>
          
        </div>
      </div>
          <Askme/>
      <Footer />
    </div>
  );
};

export default Storyblog;

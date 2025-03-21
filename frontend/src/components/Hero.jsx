import {NavLink, Link} from 'react-router-dom';
import Womens from '../assets/womens.png'
const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-500 to-teal-500 x-10">
        <section
          className="flex flex-col lg:flex-row justify-between items-center p-10 lg:p-20 bg-[url('./assets/bg2.webp')] bg-no-repeat bg-center bg-cover  rounded-[12px] relative min-h-[500px]
      style={{ boxShadow: '13px 9px 14px #fef4f7' }}"
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "linear-gradient(180deg, rgba(240,178,178,0) 61%, rgba(255,244,247,1) 96%)",
            }}
          >
            {/* Content goes here */}
          </div>
          <div className="max-w-lg mb-8 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-bold text-indigo-600 mb-4">
              Empowering Women's Health
            </h1>
            <p className="text-lg text-gray-700 mb-6 font-semibold md:pr-5">
              Join us in creating a world where women have access to vital
              healthcare and education for a better future.
            </p>
            <button className='animate-pulse lg:block hidden '>
            <NavLink
              to='/resources'
              className="bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 transition duration-300 cursor-pointer "
            >
              Scroll Down ↓
            </NavLink>
            </button>
          </div>
          <div className="lg:w-1/2 md:w-[50%] w-[70%]">
            <img
              src={Womens}
              alt="Women's"
              className="rounded-lg shadow-lg mix-blend-luminosity w-full"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;

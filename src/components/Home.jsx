import React from 'react';
import image22 from '../images/gbimg2023-10-25_at_10.57.49_PM-removebg.png';

const Home = () => {
  return (
    <div className="md:px-10 px-3 my-14 md:h-screen bg-[#fff]" id="home">
      <div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-[100px] w-full">
          {/* image & content */}
          {/* text */}
          <div className="text-black">
            <h6 className="text-3xl mt-12">Hello, I'm</h6>
            <h1 className="font-semibold md:text-5xl my-4 text-3xl text-yellow ">Badejo Emmanuel</h1>
            <p className="md:w-96"> Digital Marketing expert. I develop and implement online marketing strategies to promote products, services, or brands.</p>
          </div>
          <div className="order-first md:order-last relative">
            <div className="back2 two">
              <img src={image22} alt="" className="img223" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

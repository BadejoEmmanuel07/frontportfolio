import React from "react";
import carrental from "../images/car-rental.jpeg";
import ecoshop from "../images/ecoshop.jpeg";

const Projects = () => {
  const buttonStyles =
    "bg-[#000] text-white rounded-full px-6 py-2 hover:bg-[#000] transition duration-300 z-10";

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8">
      {/* E-commerce Web App */}
      <div >
      <a
            href="https://ecoshop-eta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
      <div className="project-card relative overflow-hidden group">
        <img
          src={ecoshop}
          alt="E-commerce Web App"
          className="mb-4 rounded-lg transition duration-300 transform group-hover:scale-105"
        />
        <div className="text-center absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 transform group-hover:scale-100">
          <p className="font-bold text-lg text-white my-4 md:text-base">
            E-commerce Web App
          </p>
          <p className="text-gray-300 item text-lg md:text-xs">
            Built a feature-rich e-commerce web application with secure payment
            gateways, intuitive product navigation, and a dynamic cart system.
            Leveraged API integrations for optimized inventory management and
            real-time updates, enhancing overall efficiency.
          </p>{" "}
          <br />
          <p
            className={buttonStyles}
          >
            Visit Project
          </p>
        </div>
      </div>
      </a>
      </div>


      {/* Car Rental Website */}
      <div >
      <a
            href="https://car-rental-teal.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
      <div className="project-card relative overflow-hidden group">
        <img
          src={carrental}
          alt="Car Rental Website"
          className="mb-4 rounded-lg transition duration-300 transform group-hover:scale-105"
        />
        <div className="text-center absolute top-0 left-0 w-full h-full opacity-0 bg-black bg-opacity-50 hover:opacity-100 transition duration-300 transform group-hover:scale-100">
          <p className="font-bold text-lg text-white my-4 md:text-base">
            Car Rental Website
          </p>
          <p className="text-gray-300 text-lg item md:text-xs">
            Designed and implemented a responsive car rental website, providing
            users with an intuitive platform to explore, select, and rent
            vehicles. Integrated real-time features like live availability and
            pricing information.
          </p>{" "}
          <br />
          <p
          
            className={buttonStyles}
          >
            Visit Project
          </p>
        </div>
      </div>
      </a>
      </div>
     
    </div>
    <div className="p-8">
      <h1 className="text-3xl font-semibold">Copywriting Project</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 p-8">

    <div className="agro-tech-academy">
       <h2 className="font-bold text-lg  my-4 md:text-base">Cultivate Your Future with Agro-Tech Excellence!</h2>
       <p>Embark on a transformative journey with our Agro-Tech Academy, where innovation meets agriculture. Join a community of forward-thinkers and cultivate the skills needed to thrive in the agro-tech landscape.</p>
       <p>What We Offer:</p>
       <p>• Cutting-Edge Education: Learn from industry experts and stay ahead with the latest agro-tech advancements.</p>
       <p>• Hands-On Experience: Gain practical insights through interactive sessions and real-world projects.</p>
       <p>• Global Network: Connect with a diverse community of agro-tech enthusiasts, mentors, and professionals.</p>
       <a href="#" className="apply-now-btn">Apply Now</a>
   </div>
     <div className="flour-product">
     <h2 className="font-bold text-lg  my-4 md:text-base">Introducing Our Premium Flour - Harvested for Perfection!</h2>
     <p>Elevate your culinary experience with our agro-tech firm's exceptional flour product. Meticulously crafted from the finest harvests, our flour promises a symphony of flavors and textures that redefine your baking and cooking adventures.</p>
     <p>Key Features:</p>
     <p>• Farm-to-Table Freshness: Sourced directly from our sustainable farms, ensuring unparalleled freshness.</p>
     <p>• Nutrient-Rich Grains: Packed with essential nutrients for a healthier, wholesome meal.</p>
     <p>• Versatile in Every Dish: Perfect for baking, cooking, and creating delightful culinary masterpieces.</p>
     <a href="#" className="shop-now-btn">Shop Now</a>
 </div>
 </div>
    </div>
  );
};

export default Projects;

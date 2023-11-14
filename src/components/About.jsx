import React from "react";
import Work from "../images/work.jpg";

const About = () => {
  return (
    <div className="py-16 flex items-center justify-center" id="about">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <img src={Work} alt="Work" className="rounded w-[250px] h-[250px] items-center" />
        <div className="md:ml-8 mt-4 md:mt-0 md:w-[500px] ">
          <h4 className="text-3xl font-semibold">About Me</h4>
          <p className="text-sm mt-4">
          Experienced digital marketer with a two-year success record. Proficient in persuasive sales copy, targeted email marketing, and strategic social media ad campaigns. Specializing in React.js, TypeScript, and CSS frameworks like Tailwind and Bootstrap for crafting sleek, responsive websites.

📝 Copywriting Specialist:
Crafting compelling narratives that captivate and convert, tailoring messages for specific audiences.

📧 Email Marketing Pro:
Executing campaigns that foster engagement and conversions through personalized strategies.

📱 Social Media Strategist:
Optimizing ad campaigns for enhanced brand visibility, engagement, and lead generation.

💻 Web Development Mastery:
Building dynamic websites for an optimal user experience with React.js, TypeScript, and CSS frameworks.

📈 Results-Driven Focus:
A career marked by a results-oriented approach, utilizing key performance indicators for consistent, measurable outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

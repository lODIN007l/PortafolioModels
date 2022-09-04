import React from "react";

import Projects from "./Projects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="section bg-primary min-h-[1400px] ">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="section-title before:content-portfolio relative before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block ">
            My latest work{" "}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

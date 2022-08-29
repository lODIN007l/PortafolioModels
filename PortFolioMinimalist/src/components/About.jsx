import React from "react";
import Imagen from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            src={Imagen}
            alt=""
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
          />
          <div className="flex flex-col text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-0-[2rem] before:hidden before:lg:block">
                Jane Doe
              </h2>
              <p className="mb-4 text-accent ">Freelancer Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8 ">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Inventore corrupti est porro id consectetur omnis mollitia
                beatae distinctio eum quidem odit perspiciatis velit blanditiis
                facilis, nemo, recusandae sapiente minus rem.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all ">
              Contact me{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

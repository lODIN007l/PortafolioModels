import { useEffect } from "react";
import { useState } from "react";
//data
import { projectsData } from "../data";
import { projectsNav } from "../data";
//componente
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() == item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* nav */}
      <nav className="mb-12 max-w-xl mx-auto ">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white  ">
          {projectsNav.map((item, index) => {
            return (
              <li
                className={`${
                  active === index ? "active" : ""
                } cursor-pointer capitalize m-4`}
                onClick={(e) => handleClick(e, index)}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* projectos  */}
      <section className="grid lg:grid-cols-3 gap-y-12 md: lg:gap-x-8 lg:gap-y-8 md:justify-center">
        {projects.map((item) => {
          return <Project item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Projects;

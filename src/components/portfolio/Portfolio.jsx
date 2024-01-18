import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Projects from './Projects';
import SectionTitle from '../shared/SectionTitle';

const Portfolio = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  const projectsCategory = ['React', 'Mern Stack', 'Javascript', 'Static'];
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  const filteredProjects = projects.filter(
    (project) => project.category === projectsCategory[tabIndex]
  );

  return (
    <div id="portfolio" className='my-10'>
      <SectionTitle
        heading="My Projects"
        subHeading="The Evolution of My Portfolio
        Exploring New Horizons in the Past 12 Months"
      />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="md:w-3/4 text-[10px] sm:text-base md:font-medium mx-auto flex items-center sm:gap-1 md:gap-2 justify-center text-center pb-5 overflow-hidden">
          {projectsCategory.map((item, index) => (
            <Tab className="px-2 py-1 sm:px-3 sm:py-2 border shadow-md shadow-[#111132] border-[#111132] cursor-pointer rounded-t-lg outline-0" key={index}>{item}</Tab>
          ))}
        </TabList>

        {projectsCategory.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => (
                <Projects key={project.id} project={project}></Projects>
              ))}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Portfolio;

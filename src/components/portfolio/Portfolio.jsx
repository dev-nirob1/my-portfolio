import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Projects from './Projects';

const Portfolio = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  const projectsCategory = ['React', 'Javascript', 'Mern Stack', 'Static'];

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
    <div className='my-10'>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="w-3/4 mx-auto text-center pb-5">
          {projectsCategory.map((item, index) => (
            <Tab key={index}>{item}</Tab>
          ))}
        </TabList>

        {projectsCategory.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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

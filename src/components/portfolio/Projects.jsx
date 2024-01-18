import { FaGithub, FaRegEye } from "react-icons/fa";

const Projects = ({ project }) => {
    const { title, technologies, description, live_link, github_link, image,github_server } = project;
    return (
        <div className="border border-indigo-900 shadow-md shadow-indigo-900 rounded p-2 m-2">
            <div className="w-full">

                <div style={{ backgroundImage: `url('${image}')` }} className="w-full rounded bg-top bg-cover hover:bg-bottom transition-all duration-[1.5s] h-64">

                </div>
                <div className="text-center pt-5 capitalize">
                    <p className="text-2xl font-semibold">{title}</p>
                    {technologies.map((tech, i) => <span className="inline-flex m-1 flex-wrap rounded bg-orange-600 text-sm" key={i}>{tech}</span>)}
                </div>
                <div>
                    <p className="text-gray-400 my-6">{description}</p>
                    <div className="flex gap-3">

                        <a className="bg-[#0c0c1d] transition-all duration-300 font-medium border border-gray-800 hover:bg-gradient-to-r from-indigo-950 to-indigo-900 rounded text-gray-300 hover:border-indigo-800 shadow-md hover:shadow-indigo-900 py-[10px] px-5" href={live_link} target="_blank" rel="noreferrer">
                            Live <FaRegEye size={20} className="inline ml-1" />
                        </a>
                        <a className="bg-[#0c0c1d] transition-all duration-300 font-medium border border-gray-800 hover:bg-gradient-to-r from-indigo-900 to-indigo-950 rounded text-gray-300 hover:border-indigo-800 shadow-md hover:shadow-indigo-900 py-[10px] px-5" href={github_link} target="_blank" rel="noreferrer">
                            Github <FaGithub size={20} className="inline ml-1" />
                        </a>

                        {github_server && <a className="bg-[#0c0c1d] transition-all duration-300 font-medium border border-gray-800 hover:bg-gradient-to-b from-indigo-950 to-indigo-900 rounded text-gray-300 hover:border-indigo-800 shadow-md hover:shadow-indigo-900 py-[10px] px-5" href={github_server} target="_blank" rel="noreferrer">
                            Server <FaGithub size={20} className="inline ml-1" />
                        </a>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
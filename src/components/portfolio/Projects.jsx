
const Projects = ({ project }) => {
    const { title, technologies, description, live_link, github_link, image } = project;
    return (
        <div className="border p-5 m-4">
            <div className="w-full">
                <figure className="w-full">
                    <img className="w-full h-1/2" src={image} alt="project image" />
                </figure>
                <div className="text-center pt-5">
                    <p className="text-2xl font-semibold">{title}</p>
                    {technologies.map((tech, i) => <span className="inline-flex m-1 flex-wrap rounded bg-orange-600" key={i}>{tech}</span>)}
                </div>
                <div>
                    <p className="text-gray-400 my-3">{description}</p>
                    <div className="flex gap-3">
                        <a className="px-4 py-2 border rounded" href={live_link}>Live</a>
                        <a className="px-4 py-2 border rounded" href={github_link}>Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
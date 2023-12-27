
const SingleService = ({ service }) => {
    const { image, category, description } = service;
    return (
        <div className="bg-[#111132] shadow-inner shadow-indigo-600 space-y-3 text-center py-10 px-5 rounded-lg">
            <figure>
                <img className="w-fit mx-auto" src={image} alt="" />
            </figure>
            <h3 className="text-2xl font-bold mb-2">{category}</h3>
            <p className="text-gray-400">
                {description}
            </p>
        </div>
    );
};

export default SingleService;

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center mb-12 relative'>
            <h2 className="text-3xl text-gray-300 md:text-4xl font-bold md:font-extrabold">{heading}</h2>
            <p className='md:w-1/2 mx-auto pt-3 text-gray-400 font-medium'>{subHeading} </p>
        </div>
    );
};

export default SectionTitle;
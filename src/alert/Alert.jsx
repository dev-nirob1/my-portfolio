import { useState } from 'react';

const Alert = () => {
    const [visible, setVisible] = useState(true);

    return (
        visible && (
            <div className={`p-4 text-sm shadow-xl text-gray-300 bg-transparent rounded-md border font-semibold border-dashed border-indigo-500 relative`}>
                <span className="block">
                    Note: I don&#39;t engage in any illegal, betting, or questionable websites.</span>
                <button
                    onClick={() => setVisible(false)}
                    className="absolute top-0 right-0 p-2 text-xl cursor-pointer focus:outline-none"
                >
                    &times;
                </button>
            </div>
        )
    );
};

export default Alert;

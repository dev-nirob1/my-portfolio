
const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#111132] to-[#0c0c1d] text-gray-400  p-8">
            <div className="container mx-auto flex flex-col items-center">
               

                {/* Copyright and attribution */}
                <p className="mt-10 text-xs text-center">
                    © {new Date().getFullYear()} Nirob. All rights reserved.
                    <br />
                    Website designed with ❤️.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

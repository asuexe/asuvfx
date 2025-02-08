import { portfolioData } from "../context/portfolioData";

const Footer = () => {
    return (
      <footer className="relative z-10 w-full py-6 bg-black text-white text-center border-t border-gray-700">
        <p className="text-gray-400 text-lg font-semibold">
          © {new Date().getFullYear()} {portfolioData.name}
        </p>
      </footer>
    );
  };
  
  export default Footer;
  
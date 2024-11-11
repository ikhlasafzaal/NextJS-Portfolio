// components/Navbar.jsx
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-primary p-6 fixed top-0 left-0 right-0 z-10 shadow-lg">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex justify-between items-center">
      <div className="text-white text-3xl font-extrabold">
        <a href="#hero">IB (CE)</a>
      </div>

      <ul className="hidden md:flex space-x-8 text-white text-lg font-bold">
        <li><a href="#hero" className="hover:text-accent transition duration-300">Home</a></li>
        <li><a href="#about" className="hover:text-accent transition duration-300">About</a></li>
        <li><a href="#expertise" className="hover:text-accent transition duration-300">Expertise</a></li>
        <li><a href="#portfolio" className="hover:text-accent transition duration-300">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-accent transition duration-300">Contact</a></li>
      </ul>

      <div className="ml-4 hidden md:block">
        <a
          href="/IkhlasResumeUpdated.pdf"
          download
          className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-primary transition duration-300 text-lg font-bold"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className="text-white">
          <span className="material-icons">menu</span>
        </button>
      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;

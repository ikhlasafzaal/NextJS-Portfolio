// components/Footer.jsx
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12 mt-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="text-white text-3xl font-extrabold mb-6 md:mb-0">
        <a href="#hero">IB (CE)</a>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-x-8 mb-6 md:mb-0">
        <Link href="#hero" className="text-white hover:text-accent font-medium text-lg transition duration-300">Home</Link>
        <Link href="#about" className="text-white hover:text-accent font-medium text-lg transition duration-300">About</Link>
        <Link href="#expertise" className="text-white hover:text-accent font-medium text-lg transition duration-300">Expertise</Link>
        <Link href="#portfolio" className="text-white hover:text-accent font-medium text-lg transition duration-300">Portfolio</Link>
        <Link href="#contact" className="text-white hover:text-accent font-medium text-lg transition duration-300">Contact</Link>
      </div>

      <div className="flex space-x-6 mt-6 md:mt-0">
        <a href="https://github.com/ikhlasafzaal" className="text-white hover:text-accent font-bold text-lg transition duration-300">GitHub</a>
        <a href="https://www.linkedin.com/in/ikhlas-bano/" className="text-white hover:text-accent font-bold text-lg transition duration-300">LinkedIn</a>
      </div>
    </div>

    {/* Footer Text */}
    <div className="mt-8 text-center text-sm text-gray-300">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </div>
  </div>
</footer>

  );
};

export default Footer;

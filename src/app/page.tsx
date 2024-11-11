import Link from 'next/link';
import AboutSection from "./Components/About/page";
import ContactSection from "./Components/Contact/page";
import ExpertiseSection from "./Components/Expertise/page";

import HeroSection from "./Components/Hero/page";
import PortfolioSection from "./Components/Portfolio/page";
import MyDocument from "./pages/_document"

const App = () => {
  return (
    <div className="bg-light-gray">
=      <nav className="bg-primary p-6 fixed top-0 left-0 right-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="text-white text-3xl font-extrabold">
              <a href="#hero">IB (CE)</a>
            </div>

            <ul className="flex space-x-8 text-white text-lg font-bold">
              <li><a href="#hero" className="hover:text-accent transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition duration-300">About</a></li>
              <li><a href="#expertise" className="hover:text-accent transition duration-300">Expertise</a></li>
              <li><a href="#portfolio" className="hover:text-accent transition duration-300">Portfolio</a></li>
              <li><a href="#contact" className="hover:text-accent transition duration-300">Contact</a></li>
            </ul>

            <div className="ml-4">
              <a
                href="/IkhlasResumeUpdated.pdf"
                download
                className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-primary transition duration-300 text-lg font-bold"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="expertise">
        <ExpertiseSection />
      </section>

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

=      <footer className="bg-primary text-white py-12 mt-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="flex items-center justify-between">

=      <div className="text-white text-3xl font-extrabold">
        <a href="#hero">IB (CE)</a>
      </div>

      <div className="flex flex-col md:flex-row justify-center space-x-8 mb-6 md:mb-0">
        <Link href="#hero" className="text-white hover:text-accent font-medium text-lg transition duration-300">Home</Link>
        <Link href="#about" className="text-white hover:text-accent font-medium text-lg transition duration-300">About</Link>
        <Link href="#expertise" className="text-white hover:text-accent font-medium text-lg transition duration-300">Expertise</Link>
        <Link href="#portfolio" className="text-white hover:text-accent font-medium text-lg transition duration-300">Portfolio</Link>
        <Link href="#contact" className="text-white hover:text-accent font-medium text-lg transition duration-300">Contact</Link>
      </div>

      <div className="flex space-x-6">


        <a href="https://github.com/ikhlasafzaal" className="text-white hover:text-accent font-bold text-lg transition duration-300">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/ikhlas-bano/" className="text-white hover:text-accent font-bold text-lg transition duration-300">
          LinkedIn
        </a>
      </div>

    </div>

    {/* Footer Text */}
    <div className="mt-8 text-center text-sm text-gray-300">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </div>
  </div>
</footer>

    </div>
  );
};

export default App;
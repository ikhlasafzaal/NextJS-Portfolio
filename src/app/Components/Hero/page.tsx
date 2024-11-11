import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="py-28 px-6 bg-gradient-to-r from-secondary to-primary mt-19">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-black text-3xl font-bold opacity-80">Hello, I am Ikhlas Bano</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-grey align-center tracking-tight">
            Aiming to make an impact as a <span className="text-accent font-bold">Computer Engineer</span>
          </h1>
          <p className="text-black text-lg opacity-80 max-w-xl">
            Passionate about software development and engineering. Dedicated to continuous learning, innovation, and collaboration with forward-thinking teams.
          </p><br></br>
          <a href='#contact'>
            <button className="bg-accent text-white text-lg font-bold px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 hover:bg-primary">
              Get in Touch
            </button>
          </a>
        </div>

        <div className="relative">
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/coderGirl.gif" 
              alt="Ikhlas Bano"
              fill
              className="object-cover rounded-2xl mt-4"
              style={{ objectPosition: "top" }} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

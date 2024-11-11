import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="py-28 px-6 bg-light-gray mt-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Section */}
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/images/p5.png" // Replace with actual image path
            alt="About Me"
            fill
            className="object-cover rounded-2xl mt-4"
            style={{ objectPosition: "center" }} 
          />
        </div>

        {/* Text Content Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-dark-gray">About Me</h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            I am Ikhlas Bano, an undergraduate Computer Engineering student with a keen interest in software development and system engineering. Eager to grow in a dynamic environment, I am focused on building skills that enhance my technical expertise and analytical thinking.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Throughout my studies, Ive explored areas such as web development, software engineering, and emerging technologies like artificial intelligence. My goal is to collaborate with innovative teams to create impactful digital solutions while advancing my knowledge and contributing to meaningful projects.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            With a deep commitment to continuous learning, I stay updated with the latest in AI, Web 3.0, and software development trends. My career objective is to collaborate with a team dedicated to mutual growth and innovation.

          </p>
          <button>
          <a
                href="/IkhlasResumeUpdated.pdf"
                download
                className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-primary transition duration-300 text-lg font-bold"
              >
                Download Resume
              </a>
          </button>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

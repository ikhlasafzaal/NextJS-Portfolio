const ExpertiseSection = () => {
  const expertises = [
    { title: "HTML & CSS" },
    { title: "UI Design" },
    { title: "JS & TS" },
    { title: "UI & UX Design" },
    { title: "MySQL & SQL" },
    { title: "Java & C" },
    { title: "PHP & Laravel" },
    { title: "ASP.NET & Angular" }
  ];

  return (
    <section className="py-20 px-6 bg-light-gray mb-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-dark-gray mb-12 text-center">
          My Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertises.map((expertise, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 flex items-center justify-center"
            >
              <h3 className="text-2xl font-semibold text-dark-gray">{expertise.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

// components/ContactSection.jsx

const ContactSection = () => {
  return (
    <section className="py-20 px-6 bg-light-gray">
      <div className="max-w-7xl mx-auto space-y-12">
              <h2 className="text-5xl font-extrabold text-dark-gray mb-4 text-center">
          Lets Work Together
        </h2>
        <p className="text-lg font-medium text-dark-gray text-center">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>


        <form className="space-y-6 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-5 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-transparent"
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-4 rounded-md hover:bg-primary-dark transition-colors w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;

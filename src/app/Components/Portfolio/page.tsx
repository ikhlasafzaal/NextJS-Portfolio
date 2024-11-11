'use client';

import { useState } from "react";
import Image from "next/image";

const PortfolioSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projects = [
    {
      image: "/images/p1.png",
      title: "Electronics Website",
      description: "A fully functional e-commerce platform designed for selling electronic products, featuring a user-friendly interface, product categorization, advanced search filters, and a secure checkout system."
    },
    {
      image: "/images/p2.png",
      title: "Ecommerce Website",
      description: "An online store built with a responsive design, showcasing a variety of products, integrated with secure payment gateways, and optimized for both desktop and mobile experiences."
    },
    {
      image: "/images/p3.png",
      title: "TripConnect Website",
      description: "A travel booking platform that allows users to explore and book trips seamlessly, featuring an interactive UI, advanced search filters, and real-time availability of rental options."
    }
    
  ];

  // Open modal with the clicked image
  const openModal = (image: string): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = (): void => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-20 px-6 bg-light-gray">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-dark-gray mb-12 text-center">
          My Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="relative h-[200px] w-full overflow-hidden rounded-xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-dark-gray mt-4">{project.title}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <p
                className="text-accent mt-2 cursor-pointer group-hover:underline"
                onClick={() => openModal(project.image)}
              >
                See more →
              </p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div className="relative bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90%] overflow-auto">
            <button
              className="absolute top-0 right-0 text-xl text-dark-gray p-4"
              onClick={closeModal}
            >
              &#10005;
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedImage || ""}
                alt="Selected Project"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;

"use client";

import React from 'react';
import { usePathname } from "next/navigation";
import HeroSection from './HeroSection';

export default function CompanyValues() {

      const pathname = usePathname();
    
    const values = [
      {
        title: "Personalised Care",
        description:
          "We understand that every individual is unique. Our services are designed to be flexible, giving you choice and control over the care you receive. We ensure that your comfort, requests, and safety come first.",
        imgSrc: " /value/pcare.jpg",
        imgAlt: "Hands holding a heart",
      },
      {
        title: "Comprehensive Home Care Solutions",
        description:
          "Whether you need personal care, respite, or home care, we offer a complete range of services to support your lifestyle within the familiar environment of your home.",
         imgSrc: " /value/hcare.jpg",
        imgAlt: "House icon with heart",
      },
      {
        title: "Experienced Support",
        description:
          "Our support workers are not only highly qualified, but also deeply passionate about making a positive impact in the lives of those they care for. All our support workers keep their certifications and education up to date through nationally recognized healthcare training organisations.",
        imgSrc: " /value/e-support.jpg",
        imgAlt: "Professional caregiver",
      },
      {
        title: "Heartfelt Service",
        description:
          "We strive to build strong relationships with our clients and their families, ensuring that their needs and preferences are always at the forefront of our services. Together, we create a caring community where everyone has the equal opportunity to thrive.",
      imgSrc: " /value/h-service.jpg",
        imgAlt: "Heart icon",
      },
    ];
  

  return (
    <>
        {pathname === "/values" && <HeroSection />}

      <section>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold my-16 text-center text-pink font-heading">Our Company Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {values.map((val) => (
              <div key={val.title} className="bg-pink rounded-xl shadow-md pt-0 p-6 flex flex-col items-center">
                <img
                  src={val.imgSrc}
                  alt={val.imgAlt}
                  className="h-50 w-50 mb-4 shadow-lg object-contain p-4  bg-white rounded-full"
                />
                <h3 className="text-2xl font-extrabold text-white mb-2 font-heading">{val.title}</h3>
                <p className="text-white leading-relaxed text-left font-heading">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      </>
    );
  }
  

"use client";

import React from "react";
import { usePathname } from "next/navigation";
import HeroSection from "./HeroSection";

export default function ContactUs() {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/contact" && <HeroSection />}

      <h2 className="text-4xl md:text-5xl my-16 font-extrabold text-center text-pink font-heading">
        Contact Us
      </h2>
      <section className="py-16 bg-pink text-white mx-4 lg:mx-8 rounded-3xl">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Left: Headline & copy */}
            <div className="md:w-2/3 space-y-4 ">
              <h2 className="text-4xl md:text-3xl font-semibold font-heading">
                Ready to move forward? Contact us now!
              </h2>
              <p className="text-lg font-heading">
                Give us a call or request a call back at a time that suits you.
              </p>
              <p className="text-lg font-heading">
                We&apos;re available from{" "}
                <strong>9:00am - 7:00pm, Monday to Saturday.</strong>
              </p>
            </div>

            {/* Right: Contact methods */}
            <div className="flex flex-col my-3">
              {/* Call button */}
              <a
                href="tel:+610392679030"
                className="
      inline-block
      bg-transparent hover:bg-white
      hover:text-pink
      text-white
      font-extrabold
       p-2
       pl-1
      rounded-full
      transition-colors duration-200
      text-small-font md:text-xl
      font-heading
     "
              >
                Call +61 0392679030
              </a>

              {/* Request callback button */}
              <a
                href="mailto:Enquiries@treasuredcareforyou.com"
                className="
      mt-2
      inline-block
      bg-transparent hover:bg-white
      hover:text-pink
      text-white
      font-extrabold
     p-2
     pl-1
      rounded-full
      transition-colors duration-200
      text-small-font md:text-xl
      font-heading
    "
              >
                Enquiries@treasuredcareforyou.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

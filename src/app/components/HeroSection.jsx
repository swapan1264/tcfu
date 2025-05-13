'use client'

import { usePathname } from 'next/navigation'

export default function HeroSection() {

     const pathname = usePathname() 

// 1️⃣ Map each route to its heading **and** its image file
  const routeConfig = {
    '/': {
      heading: 'Welcome to Treasured Care for you', 
      image: '/welcome.jpg',
    },
    '/vision': {
      heading: 'Our Vision & Mission',
      image: '/vision.jpg',
    },
    '/values': {
      heading: 'Our Company Values',
      image: '/values.jpg',
    },
    '/about': {
      heading: 'About Us',
      image: '/about.jpg',
    },
    '/contact': {
      heading: 'Contact Us',
      image: '/contact2.jpg',
    },
  }

 // 2️⃣ Fallback to “/” if it’s not in the map
  const { heading, image } = routeConfig[pathname] || routeConfig['/']

    return (
      <section
        className="
    relative
    w-full                     /* full width always */
   /* Mobile: 40vh tall but at least 200px */
    h-[40vh] min-h-[200px]

    /* Tablet: 60vh tall but at least 300px */
    sm:h-[60vh] sm:min-h-[300px]

    /* Desktop: full screen but never below 400px */
    md:h-screen md:min-h-[400px]

    bg-cover bg-no-repeat
    flex items-center justify-center
    before:content-['']
    before:absolute before:inset-0 before:bg-black/50
  "
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white mt-0">
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold font-heading ">
           {heading}
          </h1>
          <p className="mt-4 text-base sm:text-lg md:text-xl font-heading">
            Where You Come First — Since 2024
          </p>
        </div>
      </section>
    );
  }
  

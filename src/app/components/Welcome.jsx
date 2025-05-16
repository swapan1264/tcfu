
export default function WelcomeMessage() {
  return (
    <>
      <h2 className="text-2xl md:text-5xl font-extrabold text-center my-16 px-4 text-pink font-heading ">
        Welcome to Treasured Care for you
      </h2>

      <section className="bg-pink max-w-6xl mx-4 lg:mx-auto rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Left “cut-out” panel */}
        <div className="flex-1 relative flex items-start justify-center lg:justify-start p-8 lg:p-16">
          <div
            className="
            w-64 h-80 sm:w-96 sm:h-96 
            bg-white 
            rounded-t-none 
            rounded-bl-[10rem] rounded-br-[10rem] 
            overflow-hidden 
            -mt-16 
            shadow-lg
            
          "
          >
            <img
              src="./amosley.jpg"
              alt="Adelaide Mosley"
              className="object-cover w-full h-full p-4 pt-0 rounded-t-none 
            rounded-bl-[10rem] rounded-br-[10rem] "
            />
          </div>
        </div>

        {/* Right text panel */}
        <div className="flex-1 p-8 pt-0 lg:p-16 text-white flex flex-col justify-between">
          <div>
            <p className="mt-0 text-lg sm:text-xl font-extrabold max-w-prose leading-relaxed font-heading">
              Welcome to Treasured Care For You – a place where care goes beyond
              the task, and every individual is seen, heard, and supported with
              dignity.
            </p>

            <p className="mt-4 text-base sm:text-lg leading-relaxed font-heading">
              My name is Adelaide Mosley, and it&apos;s both an honour and a
              privilege to serve as the Director of Treasured Care For You. With
              a long-standing career in nursing and years of hands-on experience
              as both a Registered Nurse and a support worker, I&apos;ve witnessed
              firsthand the difference that genuine, person-centred care can
              make in someone&apos;s life.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed font-heading">
              This organisation was built from the ground up with a deep
              understanding of what quality suppoprt truly looks like - not just
              from a clinical perspective, but from a human one. We are here not
              just to provide services, but to build trusted relationships,
              foster independence, and create an environment where every
              indivual feels safe repected, and empowered.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed font-heading">
              Whether you&apos;re with us through the NDIS or seeking aged care
              support, know that you are at the heart of everything we do. Our
              dedicated team shares my passion and commitment to compassionate,
              professional care - and we&apos;re here to support you every step of
              the way.
            </p>
            <p className="mt-4 text-base sm:text-lg leading-relaxed font-heading">
              Thank you for choosing Treasured Care For You. We look forward to
              walking alongside you on your journey
            </p>
          </div>

          <div className="mt-4">
            <p className="text-xl font-semibold">Warm Regards,</p>
              {/* Signature image here */}
            <img
              src="/sign.jpg"
              alt="Adelaide Mosley Signature"
              className="mt-2 w-48 md:w-72 h-auto"
            />
            {/* <p className="mt-2 text-2xl font-handwriting">Adelaide Mosley</p>
            <p className="mt-1 text-base uppercase tracking-wide">
              Director &amp; Founder
            </p>
            <p className="text-sm text-white mt-1">Treasured Care For You</p> */}
          </div>
        </div>
      </section>
    </>
  );
}

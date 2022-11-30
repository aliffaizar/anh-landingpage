import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-farm bg-no-repeat bg-center bg-cover z-0 scroll-m-16 scroll-smooth"
    >
      <div className="h-full min-h-[350px] bg-white/90">
        <div className="container py-10 flex items-center">
          <div className="grid lg:grid-cols-2 gap-10 py-10 min-h-[500px]">
            <div className="p-10">
              <h1 className="text-center text-3xl font-bold uppercase text-gray-600 mb-5">
                About Us
              </h1>
              <p className="text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Ducimus in maxime dolor necessitatibus accusantium dignissimos
                minus, at dolorem modi unde ut quidem amet impedit sint eos eius
                itaque omnis doloremque!
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                magni neque nisi adipisci cumque exercitationem laudantium, ea
                animi voluptas repellat vitae sunt, dolores culpa ullam?
              </p>
            </div>
            <div className="relative flex items-center justify-center lg:justify-start">
              <img
                src="/images/bg01.jpg"
                className="w-[300px] h-[275px] lg:w-[600px] lg:h-[400px] absolute -translate-x-5 -translate-y-5 object-cover object-center"
              />
              <div className=" bg-green-500/70 w-[300px] h-[275px] lg:w-[600px] lg:h-[400px] "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

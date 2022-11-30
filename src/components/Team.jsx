import React from "react";
import bram from "../assets/bram.jpg";

const Team = () => {
  return (
    <div className="w-full bg-gray-300">
      <div className="container py-14 space-y-10">
        <h3 className="text-center text-3xl font-bold uppercase text-gray-600">
          Our Team
        </h3>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="flex flex-col items-center p-5">
            <img
              className="w-[400px] rounded object-cover object-center"
              src={bram}
              alt=""
            />
            <p className="uppercase text-center font-bold text-gray-500 mt-3">
              chief marketing officer
            </p>
            <p className="capitalize font-semibold text-balck text-2xl text-center">
              fikri zainur
            </p>
          </div>
          <div className="flex flex-col items-center p-5">
            <img
              className="w-[400px] rounded object-cover object-center"
              src={bram}
              alt=""
            />
            <p className="uppercase text-center font-bold text-gray-500 mt-3">
              Chief executive Officer
            </p>
            <p className="capitalize font-semibold text-balck text-2xl text-center">
              hamdan taufik fikri
            </p>
          </div>
          <div className="flex flex-col items-center p-5">
            <img
              className="w-[400px] rounded object-cover object-center"
              src={bram}
              alt=""
            />
            <p className="uppercase text-center font-bold text-gray-500 mt-3">
              Chief finance Officer
            </p>
            <p className="capitalize font-semibold text-balck text-2xl text-center">
              reza mustofa zahri
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;

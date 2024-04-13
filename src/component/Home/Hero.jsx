import React from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
function Hero() {
  return (
    <div className="relative w-full h-screen">
      <div
        className="relative w-full h-full bg-cover bg-center filter brightness-140"
        style={{ backgroundImage: `url(/images/images4.jpg)` }}
      >
        <div className="absolute  bottom-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div>
            <p className="rounded-xl border-2 text-white bg-transparent mb-2">
              Announcing our release for Academix
            </p>
          </div>
          <h1 className="text-white text-3xl font-bold">
            Empowering Minds, Enriching Futures
          </h1>
          <p className="text-white text-lg mt-2">
            Learn to code from the best teachers
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

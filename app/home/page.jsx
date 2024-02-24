"use client";

import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import Features_one from "@/components/Features_one";
import Features_two from "@/components/Features_two";
import Features_three from "@/components/Features_three";
import Nothing from "@/components/Nothing";
import "animate.css";

const Home = () => {
  return (
    <div className="bg-slate-900 font-Raleway">
      <Navbar />
      <Landing />

      <Features_one />
      <Features_two />
      <Features_three />
      <Nothing />
    </div>
  );
};
export default Home;

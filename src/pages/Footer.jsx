import React from "react";
import { FiGithub } from "react-icons/fi";
import { GiChickenOven, GiFruitBowl } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";
import { MdFastfood } from "react-icons/md";
import { SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  w-full px-4 md:px-12 py-8 gap-8">
      <section className="flex flex-col md:mx-11  gap-4">
        <div>
          <MdFastfood className="w-[50px] h-[50px] text-black" />
          <h1 className="text-4xl font-semibold text-slate-800">Taste Revolution</h1>
        </div>
        <div className="flex flex-col gap-2 text-slate-600">
          <div className="flex items-center gap-2 hover:underline cursor-pointer transition-all">
            <span>Vegetables</span> <LuLeafyGreen />
          </div>
          <div className="flex items-center gap-2 hover:underline cursor-pointer transition-all">
            <span>Non-veg</span> <GiChickenOven />
          </div>
          <div className="flex items-center gap-2 hover:underline cursor-pointer transition-all">
            <span>Fruits</span> <GiFruitBowl />
          </div>
        </div>
      </section>
      <section className="flex flex-col md:mx-11 gap-6 items-start md:items-end">
        <h1 className="text-5xl font-bold text-slate-800 lg:text-7xl">
          Let's talk
        </h1>
        <form className="flex gap-2 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-slate-400 rounded-lg flex-1 md:flex-none"
          />
          <button className="px-6 py-2 border border-slate-400 rounded-lg bg-slate-200 hover:bg-slate-400 transition-colors">
            Subscribe
          </button>
        </form>
      </section>
      <section className="col-span-1 md:col-span-2 border-t-2 mx-0 md:mx-11 border-dotted border-slate-400 pt-8">
        <div className="flex flex-col md:flex-row justify-between text-slate-600 gap-4 md:gap-0">
          <article className="flex flex-wrap gap-4 md:gap-6">
            <span className="hover:underline cursor-pointer transition-all">
              Cookies policy
            </span>
            <span className="hover:underline cursor-pointer transition-all">
              Legal terms
            </span>
            <span className="hover:underline cursor-pointer transition-all">
              Privacy policy
            </span>
          </article>
          <article className="flex flex-wrap gap-4 md:gap-9">
            <span className="hover:underline cursor-pointer text-3xl transition-all">
            <FiGithub />
            </span>
            <span className="hover:underline cursor-pointer text-3xl transition-all">
            <SlSocialLinkedin />
            </span>
            <span className="hover:underline cursor-pointer text-3xl transition-all">
            <SlSocialYoutube />
            </span>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Footer;

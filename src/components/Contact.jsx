import React from "react";
import { LuMail, LuPhone, LuGithub, LuLinkedin } from "react-icons/lu";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center min-h-screen p-6 container mx-auto pt-20">
      {/* Contact Information */}
      <div className="md:w-1/2 text-left text-white">
        <h1 className="text-6xl  font-header font-black mb-15">CONTACTS</h1>
        <div className="space-y-4 ">
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/20" />
          <div className="flex items-center space-x-4">
            <span className="text-3xl">
              <LuMail />
            </span>
            <p className="text-xl">sample@gmail.com</p>
          </div>
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/20" />
          <div className="flex items-center space-x-4">
            <span className="text-3xl">
              <LuPhone />
            </span>
            <p className="text-xl">+63 976 333 0294</p>
          </div>
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/20" />
          <div className="flex items-center space-x-4">
            <span className="text-3xl">
              <LuGithub />
            </span>
            <a
              className="text-xl"
              href="https://github.com/Wadahupy"
              target="_blank"
            >
              Wadahupy
            </a>
          </div>
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/20" />
          <div className="flex items-center space-x-4">
            <span className="text-3xl">
              <LuLinkedin />
            </span>
            <a
              className="text-xl"
              href="https://www.linkedin.com/in/denzel-quilatan-90aab6331/"
              target="_blank"
            >
              Denzel Quilatan
            </a>
          </div>
          <hr className="my-5 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/20" />
        </div>
      </div>
      {/* Contact Form */}
      <div className="md:w-2/5 md:h-[500px] bg-zinc-900 text-white p-6 rounded-lg shadow-lg mt-6 md:mt-0 md:ml-10">
        <h2 className="text-3xl font-bold mb-4 text-center">Message me</h2>
        <form>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            placeholder="Enter your email..."
            className="w-full p-2 rounded bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-bg-white/20"
          />
          <label className="block mt-4 mb-2">Message</label>
          <textarea
            placeholder="Write your message..."
            className="w-full p-2 rounded bg-zinc-900 border border-zinc-700 text-white  focus:outline-none focus:ring-2 focus:ring-bg-white/20 h-[200px]"
          ></textarea>
          <button
            type="submit"
            className="w-full mt-4 p-2 bg-red-500 hover:bg-red-600 rounded-xl text-white font-semibold transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

"use client";

import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const techTags = [
    {
      label: "C#",
      colorClass: "text-green-500 font-semibold",
      style: { backgroundColor: "rgba(169, 247, 169, 0.16)" },
      icon: "/Csharp.svg",
    },
    {
      label: "React",
      colorClass: "text-blue-200 font-semibold",
      style: { backgroundColor: "rgba(144, 205, 244, 0.16)" },
      icon: "/react.svg",
    },
    {
      label: "CSS",
      colorClass: "text-blue-400 font-semibold",
      style: { backgroundColor: "rgba(154, 230, 180, 0.16)" },
      icon: "/css.svg",
    },
    {
      label: "Javascript",
      colorClass: "text-yellow-600 font-semibold",
      style: { backgroundColor: "rgba(126, 141, 39, 0.16)" },
      icon: "/javascript.svg",
    },
    {
      label: "ASP.NET",
      colorClass: "text-violet-600 font-semibold",
      style: { backgroundColor: "rgba(216, 143, 188, 0.16)" },
      icon: "/aspnet.svg",
    },
    {
      label: "HTML",
      colorClass: "text-orange-600 font-semibold",
      style: { backgroundColor: "rgba(240, 212, 122, 0.16)" },
      icon: "/html.svg",
    },
    {
      label: "Excel",
      colorClass: "text-emerald-500 font-semibold",
      style: { backgroundColor: "rgba(126, 241, 166, 0.16)" },
      icon: "/excel.svg",
    },
    {
      label: "Python",
      colorClass: "text-yellow-300 font-semibold",
      style: { backgroundColor: "rgba(245, 213, 155, 0.16)" },
      icon: "/python.svg",
    },
    {
      label: "Power BI",
      colorClass: "text-yellow-300 font-semibold",
      style: { backgroundColor: "rgba(248, 246, 138, 0.16)" },
      icon: "/powerbi.svg",
    },
    {
      label: "Azure",
      colorClass: "text-blue-400 font-semibold",
      style: { backgroundColor: "rgba(145, 194, 240, 0.16)" },
      icon: "/azure.svg",
    },
    {
      label: "SSRS",
      colorClass: "text-red-500 font-semibold",
      style: { backgroundColor: "rgba(245, 171, 171, 0.16)" },
      icon: "/ssrs.svg",
    },
    {
      label: "Power Apps",
      colorClass: "text-fuchsia-200 font-semibold",
      style: { backgroundColor: "rgba(234, 182, 241, 0.16)" },
      icon: "/powerapp.svg",
    },
    {
      label: "Power Automate",
      colorClass: "text-blue-400 font-semibold",
      style: { backgroundColor: "rgba(217, 182, 241, 0.16)" },
      icon: "/powerautomate.svg",
    },
    {
      label: "Sharepoint",
      colorClass: "text-teal-500 font-semibold",
      style: { backgroundColor: "rgba(197, 252, 222, 0.16)" },
      icon: "/sharepoint.svg",
    },
  ];

  const projects = [
    {
      title: "Custom Web Applications & Ecommerce Websites",
      image: "/webapp.jpeg",
      tags: ["React", "CSS", "HTML", "Javascript"],
    },
    {
      title: "Business Intelligence & Data Analytics Dashboards",
      image: "/data.jpeg",
      tags: ["Power BI", "Excel", "SSRS"],
    },
    {
      title: "Azure Cloud & Microsoft 365 Solutions",
      image: "/azure.jpeg",
      tags: ["Azure", "Power Apps", "Power Automate", "Sharepoint"],
    },
    {
      title: "Backend Systems & API Integrations",
      image: "/api_1.jpeg",
      tags: ["C#", "Python", "ASP.NET"],
    },
    
  ];

  return (
    <>
      <main className="bg-black text-white font-sans">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between py-2 border-b border-zinc-800">
            <Link
              href="/"
              className="text-white text-4xl font-semibold flex items-center"
            >
              <span className="text-gray-500">{"{"}</span>
              <span className="mx-1">L</span>
              <span className="text-gray-500">{"}"}</span>
            </Link>
          </div>
          {/* Hero Section */}
          <section className="flex mx-auto justify-center flex-col md:flex-row items-center space-y-6 md:space-y-0">
            
            <div className="md:mt-15 space-y-6 mt-6">
              {/* <Image
                src="https://svgsilh.com/svg/26432.svg"
                alt="Hero Icon"
                width={80}
                height={80}
                className="mx-auto mb-4"
              /> */}
              <p className="text-2xl md:text-3xl font-semibold max-w-3xl text-green-400">
                Hey there!, I&apos;m-
              </p>
              <h1 className="text-4xl md:text-8xl font-bold">Le Nguyen.</h1>
              <h2 className="text-2xl md:text-3xl font-semibold max-w-3xl">
                Solution Architect.
                <span className="text-gray-400">
                  {" "}
                  A full-stack developer with an interest in providing data
                  solutions.
                </span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg">
                <span className="inline-flex items-center justify-center space-x-2 mt-2">
                  <span>💄</span>
                  <span>
                    Senior App Specialist at{" "}
                    <a
                      href="https://www.shiseido.com.vn/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-red-400 hover:underline"
                    >
                      Shiseido Cosmetics
                    </a>
                  </span>
                </span>
                <br />
                <span className="inline-flex items-center justify-center space-x-2 mt-2">
                  <span>☕</span>
                  <span>
                    Software Engineer at{" "}
                    <a
                      href="https://www.starbucks.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-green-400 hover:underline"
                    >
                      Starbucks
                    </a>
                  </span>
                </span>
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                <a
                  href="https://linkedin.com/in/ngoc-le-nguyen-114b121ba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 px-6 py-2 rounded-sm flex items-center space-x-2 bg-white/8 hover:bg-white/20 transition"
                >
                  <FaLinkedin />
                  <span className="text-white font-semibold">LinkedIn</span>
                </a>
                <a
                  href="mailto:ngocle1412@gmail.com"
                  className="text-green-400 px-6 py-2 rounded-sm flex items-center space-x-2 bg-white/8 hover:bg-white/20 transition"
                >
                  <FaEnvelope />
                  <span className="text-white font-semibold">Email</span>
                </a>
              </div>
            </div>
            <div className="mt-10">
              <Image
                src="/portrait_3.jpg"
                width={340}
                height={340}
                unoptimized 
                alt="Luis"
                className="w-85 aspect-square rounded-full object-cover shadow-lg md:ml-10 border-1 border-white"
              />
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 ">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-white">
                  ⚡ My Services
                </h2>
              </div>

              <div className="columns-1 md:columns-2 gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group break-inside-avoid mb-8 block"
                  >
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="transition duration-300 group-hover:scale-105 rounded-t-xl object-cover"
                      />
                    </div>
                    <div className="bg-zinc-900 p-5 rounded-b-xl">
                      <h3 className="text-white text-xl font-semibold mb-3">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, idx) => {
                          const tagConfig = techTags.find(
                            (t) => t.label === tag
                          );

                          const className = `flex gap-1 items-center text-sm px-2 py-1 rounded ${
                            tagConfig
                              ? tagConfig.colorClass
                              : "bg-zinc-800 text-gray-300"
                          }`;

                          const style = tagConfig?.style || {};

                          return (
                            <div key={idx} className={className} style={style}>
                              <Image
                                src={tagConfig?.icon || "/react.svg"}
                                alt={tag}
                                width={15}
                                height={15}
                                className="transition duration-300 group-hover:scale-105 rounded-t-xl object-cover"
                              />
                              <span >
                                {tag}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="pt-5 pb-30 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              🚀 Keep In Touch.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              I&apos;m currently specializing in
              <span className="text-[#3CCF91] font-medium">
                {" "}
                Data BI and App Development
              </span>
              .<br />
              Feel free to get in touch and talk more about your requirements.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-zinc-700 text-white px-5 py-3 rounded-lg hover:bg-zinc-800 transition"
              >
                <svg
                  className="w-5 h-5 fill-[#3CCF91]"
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 
        480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 
        416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 
        96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 
        38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 
        0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 
        30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                  />
                </svg>
                LinkedIn
              </a>

              <a
                href="mailto:youremail@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-zinc-700 text-white px-5 py-3 rounded-lg hover:bg-zinc-800 transition"
              >
                <svg
                  className="w-5 h-5 fill-[#3CCF91]"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M502.3 190.8c3.9-3.1 9.7-.2 
        9.7 4.7V400c0 26.5-21.5 48-48 
        48H48c-26.5 0-48-21.5-48-48V195.6c0-5 
        5.7-7.8 9.7-4.7 22.4 17.4 52.1 
        39.5 154.1 113.6 21.1 15.4 56.7 
        47.8 92.2 47.6 35.7.3 72-32.8 
        92.3-47.6 102-74.1 131.6-96.3 
        154-113.7zM256 320c23.2.4 56.6-29.2 
        73.4-41.4 132.7-96.3 142.8-104.7 
        173.4-128.7 5.8-4.5 9.2-11.5 
        9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 
        64 0 85.5 0 112v19c0 7.4 3.4 
        14.3 9.2 18.9 30.6 23.9 40.7 
        32.4 173.4 128.7 16.8 12.2 50.2 
        41.8 73.4 41.4z"
                  />
                </svg>
                Email
              </a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

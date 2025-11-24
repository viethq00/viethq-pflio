"use client";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Socials from "@/components/Social";
import Stats from "@/components/Stats";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Engineer</span>
            <h1 className="h1 mb-6">
              Hello I am <br />{" "}
              <span className="text-accent">Ha Quoc Viet</span>
            </h1>
            <p className="max-w-[500px] mb-4 text-white/80 ">
              I am a fullstack developer based in Vietnam, specializing in
              building and developing web applications from frontend to backend.
              I am passionate about creating innovative digital solutions that
              provide exceptional user experiences and exceed client
              expectations.
            </p>

            <p className="max-w-[700px] text-xl text-orange-300 my-6">
              &quot;How you do anything is how you do everything.&quot;
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/CV_HaQuocViet_SeniorSE.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="CV_HaQuocViet_SeniorSE.pdf"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

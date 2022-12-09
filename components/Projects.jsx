import React from "react";
import PropertyImg from "../public/assets/projects/property.jpg";
import NetflixImg from "../public/assets/projects/netflix.jpg";
import CryptoImg from "../public/assets/projects/crypto.jpg";
import TwitchImg from "../public/assets/projects/twitch.jpg";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&#39;ve Build </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={PropertyImg}
            projectUrl="/property"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={CryptoImg}
            projectUrl="/crypto"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={NetflixImg}
            projectUrl="/netflix"
          />
          <ProjectItem
            title="Twitch Clone"
            backgroundImg={TwitchImg}
            projectUrl="/twitch"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

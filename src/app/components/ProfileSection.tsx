import React from "react";
import Image from "next/image";

const ProfileSection = () => {
  return (
    <div
      className="
        flex flex-col items-center
        p-8 
        bg-gradient-to-b from-primary/20 to-base-200 
        border-b border-base-300
        lg:justify-start
        justify-center
        flex-1 lg:flex-none
      "
    >
      
      <div className="avatar">
        <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-xl overflow-hidden">
          <Image
            src="/sariko1.png"
            width={400}
            height={400}
            alt="Profil"
            className="object-cover w-full h-full"
            unoptimized
            quality={100}
            priority
            sizes="200px"
          />
        </div>
      </div>

      <h2 className="mt-5 text-xl font-bold text-base-content uppercase tracking-wide text-center">
        RATSIMBASON
      </h2>
      <p className="text-base text-base-content/70 font-medium text-center">
        Faly Tiana Arsène (20 ans)
      </p>
      <p className="text-base text-base-content/70 font-medium text-center">
        <a
          href="mailto:arsenefaly1@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:underline hover:text-primary/80 transition-colors duration-200"
        >
          arsenefaly1@gmail.com
        </a>
      </p>
      <p className="text-base text-base-content/70 font-medium text-center">
        034 54 292 33
      </p>
      <p className="text-md text-primary font-semibold mt-2 text-center">
        Développeur FullStack JS
      </p>
    </div>
  );
};

export default ProfileSection;

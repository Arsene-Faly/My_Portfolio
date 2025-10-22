import React from "react";
import { ChevronLeft } from "lucide-react";
import ProfileSection from "./ProfileSection";
import Navigation from "./Navigation";

const Sidebar = () => {
  return (
    <div className="drawer-side z-40">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>

      <aside className="bg-base-200 w-80 lg:w-72 min-h-full flex flex-col shadow-xl">
        {/* === Profil === */}
        <ProfileSection />

        {/* === Navigation === */}
        <Navigation />

        {/* === Bouton Fermer (Mobile uniquement) === */}
        <div className="p-4 border-t border-base-300 lg:hidden">
          <label
            htmlFor="my-drawer"
            className="btn btn-outline btn-block flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Fermer
          </label>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;

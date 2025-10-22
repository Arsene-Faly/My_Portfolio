import React from "react";
import { ChevronRight } from "lucide-react";
import Sidebar from "./Sidebar";

type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex min-h-screen bg-base-100">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />

        {/* === Contenu principal === */}
        <div className="drawer-content flex flex-col">
          {/* Bouton pour ouvrir sur mobile */}
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost lg:hidden m-2 self-start"
          >
            <ChevronRight className="w-5 h-5" />
          </label>

          <main className="p-4">{children}</main>
        </div>

        {/* === Sidebar === */}
        <Sidebar />
      </div>
    </div>
  );
};

export default Wrapper;

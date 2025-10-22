"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Code,
  Briefcase,
  FolderGit2,
  Mail,
  Facebook,
  Github,
} from "lucide-react";

const Navigation = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Accueil", icon: Home },
    { href: "/skills", label: "Compétences", icon: Code },
    { href: "/experiences", label: "Expériences", icon: Briefcase },
    { href: "/projets", label: "Projets", icon: FolderGit2 },
    { href: "/contacts", label: "Contact", icon: Mail },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=100094079679530",
      icon: Facebook,
      label: "Facebook",
    },
    { href: "https://github.com/Arsene-Faly", icon: Github, label: "GitHub" },
    {
      href: "mailto:arsenefaly1@gmail.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full">
      {/* === Navigation principale === */}
      <nav className="flex flex-col gap-2 px-6 py-4">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`
                flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200
                ${
                  isActive
                    ? "bg-primary text-primary-content shadow-sm"
                    : "hover:bg-base-300"
                }
              `}
            >
              <Icon
                className={`w-5 h-5 transition-transform ${
                  isActive ? "scale-110" : "scale-100"
                }`}
              />
              <span className="font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* === Liens sociaux === */}
      <div className="flex justify-center gap-4 p-4 border-t border-base-300 mt-2">
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <Link
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 rounded-full hover:bg-base-300 transition-all duration-200"
          >
            <Icon className="w-5 h-5 text-base-content hover:text-primary transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;

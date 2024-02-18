"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabsHeader, Tab } from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  HomeIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { HiAcademicCap } from "react-icons/hi2";
import { MdDesignServices } from "react-icons/md";
import { FaMapMarked } from "react-icons/fa";
import ToggleButton from "./ToggleButton";

export function SideNavbar() {
  const data = [
    {
      label: "",
      value: "/",
      icon: HomeIcon,
      desc: "",
    },
    {
      label: "",
      value: "services",
      icon: MdDesignServices,
    },
    {
      label: "",
      value: "work",
      icon: Square3Stack3DIcon,
    },
    {
      label: "",
      value: "education",
      icon: HiAcademicCap,
      desc: "",
    },
    {
      label: "",
      value: "contact",
      icon: PhoneIcon,
      desc: "",
    },
    {
      label: "",
      value: "map",
      icon: FaMapMarked,
      desc: "",
    },
  ];
  return (
    <>
      <div className="fixed right-4 lg:right-10 z-50 hidden md:block">
        
        <Tabs value="/" orientation="vertical">
          <div className="grid place-items-center h-screen">
            <TabsHeader
              indicatorProps={{
                className:
                  "border-b-2 border-gray-900 dark:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]",
              }}
              className="w-14 gap-2 opacity-100"
            >
              {data.map(({ label, value, icon }) => (
                <Link key={icon} href={`#${value}`}>
                  <Tab value={value} className="place-items-start p-3">
                    <div className="flex items-center gap-2">
                      {React.createElement(icon, { className: "w-6 h-8" })}

                      {label}
                    </div>
                  </Tab>
                </Link>
              ))}
            </TabsHeader>
          </div>
        </Tabs>
      </div>
      {/* mobile tab */}

      <div className="fixed bottom-0 md:hidden z-50">
        <Tabs value="/">
          <div className="mx-auto grid place-items-center w-screen">
            <div className="bg-blue-gray-500 rounded-t-lg">
              <TabsHeader
                indicatorProps={{
                  className:
                    "border-b-2 border-gray-900 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]",
                }}
                className="opacity-100 flex justify-center w-full rounded-b-none"
              >
                {data.map(({ label, value, icon }) => (
                  <Link key={icon} href={`#${value}`}>
                    <Tab value={value} className="place-items-start p-3">
                      <div className="flex items-center gap-2">
                        {React.createElement(icon, {
                          className: "w-6 h-6",
                        })}
                        {label}
                      </div>
                    </Tab>
                  </Link>
                ))}
              </TabsHeader>
            </div>
          </div>
        </Tabs>
      </div>
    </>
  );
}

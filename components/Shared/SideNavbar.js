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
import { FaRegListAlt } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
export function SideNavbar() {
  const [resTab, setResTab] = useState(true);
  const smallDevice = useMediaQuery({
    query: "(min-width: 900px)",
  });
  useEffect(() => {
    setResTab(smallDevice);
  }, [smallDevice]);
  console.log(smallDevice);
  const data = [
    {
      label: "",
      value: "",
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
      value: "settings",
      icon: Cog6ToothIcon,
      desc: "",
    },
  ];
  return (
    <>
      <div className="fixed top-1/3 right-10 z-50 hidden md:block">
        <Tabs value="" orientation="vertical">
          <TabsHeader className="w-14 gap-2">
            {data.map(({ label, value, icon }) => (
              <Link key={icon} href={`#${value}`}>
                <Tab value={value} className="place-items-start">
                  <div className="flex items-center gap-2">
                    {React.createElement(icon, { className: "w-6 h-8" })}

                    {label}
                  </div>
                </Tab>
              </Link>
            ))}
          </TabsHeader>
        </Tabs>
      </div>
      {/* mobile tab */}

      <div className="fixed bottom-0 left-1/4 md:hidden z-50">
        <Tabs value="">
          <TabsHeader className="bg-blue-gray-400">
            {data.map(({ label, value, icon }) => (
              <Link key={icon} href={`#${value}`}>
                <Tab value={value} className="place-items-start">
                  <div className="flex items-center gap-2">
                    {React.createElement(icon, { className: "w-6 h-8 text-blue-900" })}
                    {label}
                  </div>
                </Tab>
              </Link>
            ))}
          </TabsHeader>
        </Tabs>
      </div>
    </>
  );
}

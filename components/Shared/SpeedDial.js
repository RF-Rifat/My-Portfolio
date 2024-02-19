"use client";
import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
  Typography,
} from "@material-tailwind/react";
import {
  PlusIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export function SpeedDialWithTextOutside() {
  const labelProps = {
    variant: "small",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal dark:text-white",
  };

  return (
    <div className="relative w-full">
      <div className="fixed top-10 right-10">
        <SpeedDial placement="right">
          <SpeedDialHandler className="b" color="blue">
            <IconButton size="lg" className="rounded-full">
              <Cog6ToothIcon
                className="h-5 w-5 transition-transform group-hover:rotate-45 animate-spin hover:animate-none"
                style={{
                  animation: "spin 1.5s linear infinite",
                }}
              />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent className="flex-row rounded-full border border-blue-gray-50 bg-white shadow-xl shadow-black/10">
            <SpeedDialAction className="bg-blue-gray-50">
              <HomeIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50">
              <CogIcon className="h-5 w-5" />
            </SpeedDialAction>
            <SpeedDialAction className="bg-blue-gray-50">
              <Square3Stack3DIcon className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}

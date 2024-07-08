import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import {
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineMessage,
  AiOutlineSchedule,
  AiOutlineUser,
} from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
type SidebarProps = {};
const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineHome className="mr-2 text-lg" /> Home
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineMessage className="mr-2 text-lg" /> Messages
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineOfficeBuilding className="mr-2 text-lg" /> Company
              Profile
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineUser className="mr-2 text-lg" /> All Aplications
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <HiOutlineClipboardDocumentList className="mr-2 text-lg" /> Job
              Listings
            </Button>
            <Button
              variant={"ghost"}
              className="w-full justify-start rounded-none hover:text-primary"
            >
              <AiOutlineSchedule className="mr-2 text-lg" /> My Schedule
            </Button>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <div className="space-y-3">
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
              >
                <BsGear className="mr-2 text-lg" /> Settings
              </Button>
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary text-red-500 hover:text-red-200"
              >
                <AiOutlineLogout className="mr-2 text-lg" /> Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

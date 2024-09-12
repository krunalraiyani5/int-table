import React, { useState } from "react";
import { FaQuestionCircle, FaCog, FaUser } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { BsBuilding, BsGrid } from "react-icons/bs";
import {
  PiDeviceTabletSpeakerDuotone,
  PiDeviceTabletSpeakerFill,
} from "react-icons/pi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex bg-white shadow-md">
      <div
        className={`${
          isOpen ? "w-60" : "w-20"
        } h-screen transition-all duration-300 p-2 flex flex-col justify-between`}
      >
        <div className="space-y-4">
          <div className="flex ml-4">
            <IoIosMenu
              onClick={toggleSidebar}
              className="cursor-pointer text-gray-600 ml-1"
              size={26}
            />
          </div>

          <div
            className={`flex items-center space-x-2 gap-1 ${
              isOpen ? "justify-start" : "justify-center"
            } p-2.5 px-4 rounded-lg cursor-pointer`}
            title="Grid"
          >
            <img
              src="https://p1.hiclipart.com/preview/216/859/684/world-cartoon-symbol-internet-blue-circle-line-area-logo-sphere-png-clipart.jpg"
              alt="logo"
              className="rounded-full max-w-[30px]"
            />
            {isOpen && (
              <span
                className={`transition-opacity duration-300 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                Grid
              </span>
            )}
          </div>
          <hr />
          <div className="space-y-4">
            <div
              className={`flex items-center space-x-2 gap-1 ${
                isOpen ? "justify-start" : "justify-center"
              } bg-green-100 p-2.5 px-4 rounded-lg cursor-pointer`}
              title="Building"
            >
              <PiDeviceTabletSpeakerFill size={24} className="text-green-500" />
              {isOpen && (
                <span
                  className={`transition-opacity duration-300 ${
                    isOpen
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                >
                  Building
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div
            className={`flex items-center space-x-2 ${
              isOpen ? "justify-start" : "justify-center"
            } p-3 cursor-pointer`}
            title="Settings"
          >
            <FaCog size={24} className="text-gray-400" />
            {isOpen && (
              <span
                className={`transition-opacity duration-300 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                Settings
              </span>
            )}
          </div>

          <div
            className={`flex items-center space-x-2 ${
              isOpen ? "justify-start" : "justify-center"
            } p-3 cursor-pointer`}
            title="Help"
          >
            <FaQuestionCircle size={24} className="text-gray-400" />
            {isOpen && (
              <span
                className={`transition-opacity duration-300 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                Help
              </span>
            )}
          </div>

          <div
            className={`flex items-center space-x-2 ${
              isOpen ? "justify-start" : "justify-center"
            } p-3 cursor-pointer`}
            title="User"
          >
            <FaUser size={24} className="text-gray-400" />
            {isOpen && (
              <span
                className={`transition-opacity duration-300 ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                User
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

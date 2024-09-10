import React from "react";
import Select from "react-select";
import { IoIosArrowDown } from "react-icons/io";

// Custom styling for react-select
const customStyles = {
  container: (provided) => ({
    ...provided,
    flex: 1,
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
  }),
  multiValue: (provided) => ({
    ...provided,
    borderRadius: "25px",
    backgroundColor: "#e5e7eb",
    color: "#adb5bd",
    height: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px",
    minWidth: "24px",
    marginRight: "-19px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#adb5bd",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#ef4444",
    ":hover": {
      backgroundColor: "#fef2f2",
      color: "#dc2626",
    },
  }),
};

const Filter = () => {
  // Options for react-select
  const propertyOptions = [
    { value: "skyline", label: "Skyline Luxury Hotel" },
    { value: "other", label: "Other Property" },
  ];

  const planTypeOptions = [
    { value: "budget", label: "Budget" },
    { value: "premium", label: "Premium" },
  ];

  const planYearOptions = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
  ];

  return (
    <div className="flex justify-between space-x-4">
      <div className="flex items-center w-full gap-3">
        <div className="w-[300px]">
          <Select
            options={propertyOptions}
            isMulti
            placeholder="Select Property"
            styles={customStyles}
            className="flex-1"
          />
        </div>
        <div className="max-w-[200px]">
          <Select
            options={planTypeOptions}
            placeholder="Select Plan Type"
            styles={customStyles}
            className="flex-1"
          />
        </div>
        <div className="w-[300px]">
          <Select
            options={planYearOptions}
            isMulti
            placeholder="Select Plan Year"
            styles={customStyles}
            className="flex-1"
          />
        </div>
      </div>
      <div className="flex justify-end gap-3 items-center w-full">
        <button className="flex justify-between items-center gap-2 bg-[#212b36] text-white px-4 py-2 rounded-md">
          <span>Bulk Actions</span>
          <span>
            <IoIosArrowDown />
          </span>
        </button>
        <button className="bg-[#212b36] text-white px-4 py-2 rounded-md">
          + New Plan
        </button>
      </div>
    </div>
  );
};

export default Filter;

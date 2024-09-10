import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCog, FaFilter, FaSyncAlt, FaTrashAlt } from "react-icons/fa";
import { GrHistory } from "react-icons/gr";
import { IoMdSettings } from "react-icons/io";
import { MdContentCopy, MdOutlineSettings } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbChartArrows } from "react-icons/tb";

const Table = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/66408211-bf72-4517-b2e4-174b65eda2a7"
        );
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-lg">
      <h4 className="p-4 pb-0">
        <span className="font-semibold">{data.length}</span> results founds
      </h4>
      {loading ? (
        <div className="p-4">Loading...</div>
      ) : (
        <div className="p-4 shadow-md rounded-lg overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead className="bg-[#f9fafb]">
              <tr>
                <th className="p-2 border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-medium text-sm">
                      <input type="checkbox" name="Property" id="property" />
                      <label htmlFor="property">Property</label>
                    </div>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </th>
                <th className="p-2 border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-medium text-sm">
                      <p>Year</p>
                    </div>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </th>
                <th className="py-2 border-t">
                  <div>
                    <div className="px-2 mb-2 text-start border-b font-medium text-sm pb-2">
                      Plan level
                    </div>
                    <div className="px-2 flex items-center justify-between border-r">
                      <div className="flex items-center gap-2 font-medium text-sm">
                        <p>Plan name</p>
                      </div>
                      <div>
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                  </div>
                </th>
                <th className="py-2 border-t">
                  <div>
                    <div className="px-2 mb-2 text-start border-b font-medium text-sm pb-2">
                      &nbsp;
                    </div>
                    <div className="px-2 flex items-center justify-between border-r">
                      <div className="flex items-center gap-2 font-medium text-sm whitespace-nowrap">
                        <p>Plan created by</p>
                      </div>
                      <div>
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                  </div>
                </th>
                <th className="py-2 border-t">
                  <div>
                    <div className="px-2 mb-2 text-start border-b font-medium text-sm pb-2">
                      &nbsp;
                    </div>
                    <div className="px-2 flex items-center justify-between border-r">
                      <div className="flex items-center gap-2 font-medium text-sm whitespace-nowrap">
                        <p>Start date</p>
                      </div>
                      <div>
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                  </div>
                </th>
                <th className="py-2 border-t">
                  <div>
                    <div className="px-2 mb-2 text-start border-b font-medium text-sm pb-2">
                      &nbsp;
                    </div>
                    <div className="px-2 flex items-center justify-between border-r">
                      <div className="flex items-center gap-2 font-medium text-sm whitespace-nowrap">
                        <p>End date</p>
                      </div>
                      <div>
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                  </div>
                </th>
                <th className="py-2 border-t">
                  <div>
                    <div className="px-2 mb-2 text-start border-b font-medium text-sm pb-2">
                      Version level
                    </div>
                    <div className="px-2 flex items-center justify-between">
                      <div className="flex items-center gap-2 font-medium text-sm whitespace-nowrap">
                        <p>Version name</p>
                      </div>
                      <div>
                        <BsThreeDotsVertical />
                      </div>
                    </div>
                  </div>
                </th>
                <th className="p-2 border">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-medium text-sm">
                      <p>Read only</p>
                    </div>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </th>
                <th className="p-2 border">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 font-medium text-sm">
                      <p>Rev auto refresh</p>
                    </div>
                    <div>
                      <BsThreeDotsVertical />
                    </div>
                  </div>
                </th>
                <th className="p-2 border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 font-medium text-sm">
                      <p>Actions</p>
                    </div>
                  </div>
                </th>
              </tr>
              <tr className="bg-[#f9fafb]">
                <td className="p-2 border">
                  <div className="flex items-center text-gray-500 gap-3">
                    <input type="text" className="border rounded w-full" />
                    <FaFilter />
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="flex items-center text-gray-500 gap-3">
                    <input type="text" className="border rounded w-full" />
                    <FaFilter />
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="flex items-center text-gray-500 gap-3">
                    <input type="text" className="border rounded w-full" />
                    <FaFilter />
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="flex items-center text-gray-500 gap-3">
                    <input type="text" className="border rounded w-full" />
                    <FaFilter />
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="flex items-center text-gray-500 gap-3">
                    <input type="text" className="border rounded w-full" />
                    <FaFilter />
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="flex items-center text-gray-500 gap-3">
                    <input type="text" className="border rounded w-full" />
                    <FaFilter />
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="flex items-center text-gray-500 gap-3">
                    <input type="text" className="border rounded w-full" />
                    <FaFilter />
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="flex items-center text-gray-500 gap-3">
                    <input type="text" className="border w-[50px] rounded" />
                    <FaFilter />
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="flex items-center text-gray-500 gap-3">
                    <input type="text" className="border w-[50px] rounded" />
                    <FaFilter />
                  </div>
                </td>
                <td className="p-2 border">
                  <div className="flex items-center text-gray-500 gap-3">
                    <input type="text" className="border w-[100px] rounded" />
                    <FaFilter />
                  </div>
                </td>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">
                    <div className="flex items-center gap-2 whitespace-nowrap">
                      <input type="checkbox" />
                      {row.property}
                    </div>
                  </td>
                  <td className="p-2">{row.year}</td>
                  <td className="p-2">{row.planLevel}</td>
                  <td className="p-2">{row.planCreatedBy}</td>
                  <td className="p-2">{row.startDate}</td>
                  <td className="p-2">{row.endDate}</td>
                  <td className="p-2 text-blue-500 cursor-pointer">
                    {row.versionName}
                  </td>
                  <td className="p-2 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="p-2">
                    <div className="flex items-center gap-3 h-full">
                      <MdContentCopy className="text-gray-600 cursor-pointer" />
                      <TbChartArrows className="text-gray-600 cursor-pointer" />
                      <GrHistory className="text-gray-600 cursor-pointer" />
                      <MdOutlineSettings className="text-gray-600 cursor-pointer" />
                      <RiDeleteBin6Line className="text-red-600 cursor-pointer" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 flex justify-end gap-8 items-center">
            <span className="text-gray-600">Rows per page: {rowsPerPage}</span>
            <span className="text-gray-600">
              {indexOfFirstRow + 1}-{indexOfLastRow} of {data.length}
            </span>
            <div className="flex space-x-2">
              <button
                className="p-1 text-blue-500"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                ❮
              </button>
              <button
                className="p-1 text-blue-500"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;

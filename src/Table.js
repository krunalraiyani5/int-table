import React, { useEffect, useState } from "react";
import {
  BsThreeDotsVertical,
  BsPencil,
  BsTrash,
  BsFilter,
} from "react-icons/bs"; // Import additional icons
import { AgGridReact } from "ag-grid-react"; // AG Grid React component
import "ag-grid-community/styles/ag-grid.css"; // AG Grid core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Quartz theme
import { MdContentCopy, MdOutlineSettings } from "react-icons/md";
import { TbChartArrows } from "react-icons/tb";
import { GrHistory } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";

const AGGridTable = () => {
  const [rowData, setRowData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columnDefs = [
    {
      headerCheckboxSelection: true,
      checkboxSelection: true,
      headerName: "Property",
      field: "property",
      cellRendererFramework: (params) => (
        <div className="flex items-center gap-2">
          <input type="checkbox" checked={params.value} readOnly />
          {params.value}
        </div>
      ),
      filter: true,
    },
    {
      headerName: "Year",
      field: "year",
      filter: true,
    },
    {
      headerName: "Plan level",
      children: [
        {
          headerName: "Plan level",
          field: "planLevel",
          filter: true,
        },
        {
          headerName: "Plan created by",
          field: "planCreatedBy",
          filter: true,
        },
        {
          headerName: "Start date",
          field: "startDate",
          filter: true,
        },
        {
          headerName: "End date",
          field: "endDate",
          filter: true,
        },
      ],
    },
    {
      headerName: "Version level",
      children: [
        {
          headerName: "Version name",
          field: "versionName",
          filter: true,
          cellRenderer: Link,
        },
      ],
    },
    {
      headerName: "Read only",
      field: "readOnly",
      cellRendererFramework: (params) => (
        <input type="checkbox" checked={params.value} readOnly />
      ),
    },
    {
      headerName: "Rev auto refresh",
      field: "revAutoRefresh",
      cellRendererFramework: (params) => (
        <input type="checkbox" checked={params.value} readOnly />
      ),
    },
    {
      headerName: "Actions",
      field: "action",
      cellRenderer: Actions,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://mocki.io/v1/66408211-bf72-4517-b2e4-174b65eda2a7"
        );
        const result = await response.json();

        setRowData(result);
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
        <span className="font-semibold">{rowData.length}</span> results found
      </h4>
      {loading ? (
        <div className="p-4">Loading...</div>
      ) : (
        <div
          className="ag-theme-quartz"
          style={{ height: "70vh", width: "100%" }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{
              resizable: true,
              sortable: true,
              filter: "agTextColumnFilter",
              floatingFilter: true,
              flex: 1,
            }}
            pagination={true}
            paginationPageSize={20}
          />
        </div>
      )}
    </div>
  );
};

export default AGGridTable;

const Actions = () => {
  return (
    <div className="flex items-center gap-3 h-full">
      <MdContentCopy className="text-gray-600 cursor-pointer" />
      <TbChartArrows className="text-gray-600 cursor-pointer" />
      <GrHistory className="text-gray-600 cursor-pointer" />
      <MdOutlineSettings className="text-gray-600 cursor-pointer" />
      <RiDeleteBin6Line className="text-red-600 cursor-pointer" />
    </div>
  );
};

const Link = (params) => {
  return (
    <div className="flex items-center">
      <a
        href={params.value}
        target="_blank"
        className="text-blue-600 underline"
      >
        {params.value}
      </a>
    </div>
  );
};

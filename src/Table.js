"use strict";
import React, { useEffect, useState } from "react";
import {
  BsThreeDotsVertical,
  BsPencil,
  BsTrash,
  BsFilter,
} from "react-icons/bs"; // Import additional icons
import { AgGridReact } from "ag-grid-community/react"; // AG Grid React component
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { MdContentCopy, MdOutlineSettings } from "react-icons/md";
import { TbChartArrows } from "react-icons/tb";
import { GrHistory } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ModuleRegistry } from "ag-grid-community/core";
import { ColumnsToolPanelModule } from "ag-grid-enterprise/column-tool-panel";
import { FiltersToolPanelModule } from "ag-grid-enterprise/filter-tool-panel";
import { MenuModule } from "ag-grid-enterprise/menu";
import { RowGroupingModule } from "ag-grid-enterprise/row-grouping";
import { SetFilterModule } from "ag-grid-enterprise/set-filter";
import { ClientSideRowModelModule } from "ag-grid-community/client-side-row-model";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import ReadMoreIcon from "@mui/icons-material/ReadMore";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  MenuModule,
  RowGroupingModule,
  SetFilterModule,
]);
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
    },
    {
      headerName: "Year",
      field: "year",
    },
    {
      headerName: "Plan level",
      children: [
        {
          headerName: "Plan level",
          field: "planLevel",
        },
        {
          headerName: "Plan created by",
          field: "planCreatedBy",
        },
        {
          headerName: "Start date",
          field: "startDate",
        },
        {
          headerName: "End date",
          field: "endDate",
        },
      ],
    },
    {
      headerName: "Version level",
      children: [
        {
          headerName: "Version name",
          field: "versionName",
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
      <h4 className="p-4 pb-0 text-[#637381] text-sm leading-6 font-normal">
        <span className="text-[#212B36] text-sm leading-6 font-normal">
          {rowData.length}
        </span>{" "}
        results found
      </h4>
      {loading ? (
        <div className="p-4">Loading...</div>
      ) : (
        <div
          className="ag-theme-quartz m-4"
          style={{ height: "70vh", width: "100%" }}
        >
          <AgGridReact
            rowData={rowData}
            columnDefs={columnDefs}
            defaultColDef={{
              resizable: true,
              filter: true,
              floatingFilter: true,
              flex: 1,
            }}
            sideBar={true}
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
    <div className="flex items-center gap-2 h-full">
      <CopyAllIcon className="text-[#212B36]" />
      <ReadMoreIcon className="text-[#212B36]" />
      <HistoryIcon className="text-[#212B36]" />
      <SettingsIcon className="text-[#212B36]" />

      <DeleteIcon className="text-[#FF5630] size-small w-6 h-6" />
    </div>
  );
};

const Link = (params) => {
  return (
    <div className="flex items-center">
      sds
      <a
        href={params.value}
        target="_blank"
        className="underline text-xs leading-[18px] text-[#1877F2]"
      >
        dfdf {params.value}
      </a>
    </div>
  );
};

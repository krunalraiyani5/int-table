"use strict";

import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  StrictMode,
} from "react";
import { createRoot } from "react-dom/client";
import { AgGridReact } from "@ag-grid-community/react";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ModuleRegistry } from "@ag-grid-community/core";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { MdContentCopy, MdOutlineSettings } from "react-icons/md";
import { TbChartArrows } from "react-icons/tb";
import { GrHistory } from "react-icons/gr";
import { RiDeleteBin6Line } from "react-icons/ri";
ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  MenuModule,
  SetFilterModule,
]);

const Table = () => {
  const gridRef = useRef();
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: "70vh", width: "100%" }), []);
  const [rowData, setRowData] = useState();
  const [loading, setLoading] = useState(false);
  const [columnDefs, setColumnDefs] = useState([
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
      maxWidth: 100,
    },
    {
      headerName: "Rev auto refresh",
      field: "revAutoRefresh",
      cellRendererFramework: (params) => (
        <input type="checkbox" checked={params.value} readOnly />
      ),
      maxWidth: 170,
    },
    {
      headerName: "Actions",
      field: "action",
      cellRenderer: Actions,
    },
  ]);
  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 180,
      floatingFilter: true,
    };
  }, []);

  const onGridReady = useCallback((params) => {
    setLoading(true);
    fetch("https://mocki.io/v1/66408211-bf72-4517-b2e4-174b65eda2a7")
      .then((resp) => resp.json())
      .then((data) => {
        setRowData(data);
      });
    setLoading(false);
  }, []);

  return (
    <div className="bg-white rounded-lg">
      <h4 className="p-4 pb-0">
        <span className="font-semibold">{rowData?.length}</span> results found
      </h4>
      {loading ? (
        <div className="p-4">Loading...</div>
      ) : (
        <div style={containerStyle}>
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div style={gridStyle} className={"ag-theme-quartz p-4"}>
              <AgGridReact
                ref={gridRef}
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDef}
                onGridReady={onGridReady}
                pagination={true}
                paginationPageSize={20}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;

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

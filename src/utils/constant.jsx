import { Typography } from "@mui/material";
import { io } from "socket.io-client";

export const HEADER_HEIGHT = "80px";
export const DRAWER_WIDTH_OPEN = 250;
export const DRAWER_WIDTH_CLOSED = 60;
export const BASE_URL = "http://192.168.68.117:4000";
export const SOCKET = io(BASE_URL);
// Role IDs following a pattern for different categories
const ROLES_LIST = {
  SuperAdmin: 1000, // Super Administrator
  Admin: 1100, // Administrator
  Office1: 2100, // Custom Office 1 (Management)
  Office2: 2200, // Custom Office 2 (Management)
  Office3: 2300, // Custom Office 3 (Management)
  Cashier: 3100, // Cashier role (Operations)
};

export default ROLES_LIST;

export const ASSESSMENT_ROLL_COLUMN = [
  {
    field: "fname",
    headerName: "PROPERTY OWNER",
    editable: false,
    flex: 1,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const fname = params.row?.fname;
      const mname = params.row?.mname;
      const lname = params.row?.lname;
      return (
        <span>
          {fname} {mname} {lname}
        </span>
      );
    },
  },
  {
    field: "PID",
    headerName: "PROPERTY INDEX NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    flex: 1,
  },
  {
    field: "ArpNo",
    headerName: "ARP NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    flex: 1,
  },
  {
    field: "Address",
    headerName: "OWNED ADDRESS",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    flex: 1,
  },
  {
    field: "",
    headerName: "KIND",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    flex: 1,
    renderCell: (params, i) => {
      const boundaries = Array.isArray(params.row.Boundaries)
        ? params.row.Boundaries
        : [];

      return (
        <span>
          {boundaries?.map((obj, i) => {
            return (
              <span key={i}>
                {obj?.active && obj?.boundaryType}{" "}
                {boundaries?.length > 0 ? "/" : ""}
              </span>
            );
          })}
        </span>
      );
    },
  },
  {
    field: "Class",
    headerName: "CLASS",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = params.row.classification;
      return <span>{classification[0].actualUse}</span>;
    },
    flex: 1,
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION OF PROPERTY",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    flex: 1,

    renderCell: (params, i) => {
      const block = params.row.BLOCK;
      const brgy = params.row.Brgy;
      return (
        <span>
          {block} {brgy}
        </span>
      );
    },
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
    renderCell: (params, i) => {
      const classification = params.row.classification;
      return <span>{classification[0].assessedVal}</span>;
    },
    flex: 1,
  },
  {
    field: "TAXABILITY",
    headerName: "TAXABILITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    flex: 1,
  },
  {
    field: "Effectivity",
    headerName: "EFFECTIVITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
    flex: 1,
  },
];

export const CLASSIFICATION_COLUMN = [
  {
    field: "classification",
    headerName: "Classification",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "area",
    headerName: "Area",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "marketValue",
    headerName: "Market Value",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "actualUse",
    headerName: "Actual Use",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "level",
    headerName: "Level",
    flex: 1,
    editable: true,
    headerClassName: "data-grid-header",
  },
  {
    field: "assessedValue",
    headerName: "Assessed Value",
    editable: true,
    headerClassName: "data-grid-header",
    flex: 1,
  },
];

export const CLASSIFICATION_DEFAULT = {
  classification: "",
  area: "",
  marketValue: "",
  actualUse: "",
  level: "",
  assessedValue: "",
};

export const ASSESSOR_TAB_LINKS = [
  {
    to: "/",
    label: "Assessment Roll",
  },
  {
    to: "/cancels",
    label: "Canscels",
  },
];

export const COMPUTED_COLUMN = [
  {
    field: "ComputationDate",
    headerName: "DATE",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "PropertyOwner",
    headerName: "PROPERTY OWNER NAME",
    width: 320,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION",
    width: 320,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "PINno",
    headerName: "PIN NUMBER",
    width: 220,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "ARPno",
    headerName: "ARP No.",
    width: 270,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 220,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "Amount",
    headerName: "AMOUNT",
    width: 220,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "ComputedBy",
    headerName: "COMPUTED BY:",
    width: 220,
    editable: false,
    headerClassName: "data-grid-header",
  },
];

export const LANDTAX_TAB_LINKS = [
  {
    to: "/landtax-division",
    label: "Assessment Roll",
  },
  {
    to: "/computed",
    label: "Computed",
  },
  {
    to: "/lpaidlist",
    label: "Paid List",
  },
];

export const CASH_TAB_LINKS = [
  {
    to: "/cash-division",
    label: "Pending",
  },
  {
    to: "/paidlist",
    label: "Paid List",
  },
];

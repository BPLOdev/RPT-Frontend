export const HEADER_HEIGHT = "80px";
export const DRAWER_WIDTH_OPEN = 200;
export const DRAWER_WIDTH_CLOSED = 60;
export const BASE_URL = "http://192.168.68.117:4000";

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
    field: "PropertyOwner",
    headerName: "PROPERTY OWNER",
    width: 300,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "PropertyIndexNo",
    headerName: "PROPERTY INDEX NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "ARPno",
    headerName: "ARP NO.",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "OwnedAddress",
    headerName: "OWNED ADDRESS",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "Kind",
    headerName: "KIND",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "Class",
    headerName: "CLASS",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "LocationOfProperty",
    headerName: "LOCATION OF PROPERTY",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "AssessedValue",
    headerName: "ASSESSED VALUE",
    width: 200,
    editable: false,
    headerClassName: "data-grid-header",
  },
  {
    field: "Taxability",
    headerName: "TAXABILITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
  },
  {
    field: "Effectivity",
    headerName: "EFFECTIVITY",
    width: 200,
    editable: false,
    align: "center",
    headerAlign: "center",
    headerClassName: "data-grid-header",
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

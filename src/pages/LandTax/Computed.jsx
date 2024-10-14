import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Tab from "../../components/Tab";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import Computation from "./Computation";
import { COMPUTED_COLUMN, LANDTAX_TAB_LINKS } from "../../utils/constant";
import { CreateNewFolderOutlined } from "@mui/icons-material";

const rows = [
  {
    id: 1,
    PropertyOwner: "MELANIE CAPULONG ALIDIO",
    PropertyIndexNo: "18-968",
    ARPno: "03-0044-04479",
    OwnedAddress: "Washingtin St.",
    Kind: "L",
    Class: "R",
    LocationOfProperty: "San Cristobal",
    AssessedValue: "31,320.00",
    Taxability: "T",
    Effectivity: "2024",
  },
  {
    id: 2,
    PropertyOwner: "MELANIE CAPULONG ALIDIO",
    PropertyIndexNo: "18-968",
    ARPno: "03-0044-04479",
    OwnedAddress: "Washingtin St.",
    Kind: "L",
    Class: "R",
    LocationOfProperty: "San Cristobal",
    AssessedValue: "31,320.00",
    Taxability: "T",
    Effectivity: "2024",
  },
];

function Computed() {
  const [taxdecModalOpen, setTaxdecModalOpen] = useState(false);
  const [openComputation, setOpenComputation] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null); // State to hold clicked row data

  const handleButtonClick = () => {
    setTaxdecModalOpen(true);
  };

  const handleCellDoubleClick = (params) => {
    setSelectedRow(params.row); // Capture the double-clicked row data
    setOpenComputation(true); // Open RPTview when a cell is double-clicked
  };

  return (
    <>
      <Box sx={{ p: 2, boxSizing: "border-box" }}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            mb: 2,
          }}
        >
          <Stack>
            <Typography variant="h6" fontWeight={600}>
              LANDTAX OFFICE
            </Typography>
            <Typography variant="body2">
              Office of the Revenue Commissioner
            </Typography>
          </Stack>
        </Box>

        <Box height={`calc(100vh - ${246}px)`} width="100%">
          <DataGrid
            rows={rows}
            columns={COMPUTED_COLUMN}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[10]}
            disableRowSelectionOnClick
            onCellDoubleClick={handleCellDoubleClick}
            sx={{
              ".data-grid-header": {
                bgcolor: "primary.main",
                color: "#fff",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontWeight: "bold", // Make header title bold
              },
              "& .MuiDataGrid-cell": {
                borderRight: "1px solid rgba(224, 224, 224, 1)", // Right border for each cell
              },
              "& .MuiDataGrid-row": {
                "&:last-child .MuiDataGrid-cell": {
                  borderBottom: "none", // Remove bottom border from last row
                },
              },
            }}
          />
        </Box>
      </Box>

      <Computation
        open={openComputation} // Ensure this state is passed as the open prop
        handleClose={() => setOpenComputation(false)}
        row={selectedRow}
        Title={<>REAL PROPERTY TAX ORDER OF PAYMENT</>}
        actionButton={
          <>
            <Button variant="outlined">GENERATE PAYMENT ORDER</Button>
          </>
        }
      />
    </>
  );
}

export default Computed;

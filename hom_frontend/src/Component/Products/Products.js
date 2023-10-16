import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import upload_icon from "../../Assets/icons/upload-icon.svg";
import download_icon from "../../Assets/icons/download-icon.svg";
import printer_icon from "../../Assets/icons/printer-icon.svg";
import search_icon from "../../Assets/icons/search-icon.svg";
import "./Products.css";

const columns = [
  // { field: 'id', headerName: 'Order No.', width: 90 },
  { field: "image", headerName: "Image", width: 90 },
  { field: "product", headerName: "Product Name", width: 200 },
  {
    field: "sku",
    headerName: "SKU",
    width: 100,
  },
  {
    field: "weight",
    headerName: "Weight",
    width: 90,
  },
  {
    field: "category",
    headerName: "Category",
    width: 90,
  },
  {
    field: "price",
    headerName: "Price",
    width: 85,
  },
  {
    field: "stock",
    headerName: "Stock",
    description: "This column ",
    sortable: false,
    width: 80,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "expiryDate",
    headerName: "Expiry Date",
    width: 110,
  },
  {
    field: "status",
    headerName: "Status",
    width: 110,
  },
  {
    field: "action",
    headerName: "Action",
    width: 110,
  },
];

const rows = [
  { id: 1, name: "Snow", firstName: "Jon", age: 35 },
  {
    id: 2,
    name: "Lannister",
    firstName: "Cersei",
    email: "hassanalichaudhry97@gmail.com",
    phoneNo: "03333333555",
    address: "2526 block town lahore pakistan",
    age: 42,
  },
  {
    id: 3,
    name: "Lannister",
    firstName: "Jaime",
    email: "hassanalichaudhry97@gmail.com",
    phoneNo: "03333333555",
    address: "2526 block town lahore pakistan",
    age: 45,
  },
  {
    id: 4,
    name: "Stark",
    firstName: "Arya",
    email: "hassanalichaudhry97@gmail.com",
    phoneNo: "03333333555",
    address: "2526 block town lahore pakistan",
    age: 16,
  },
  {
    id: 5,
    name: "Targaryen",
    firstName: "Daenerys",
    email: "hassanalichaudhry97@gmail.com",
    phoneNo: "03333333555",
    address: "2526 block town lahore pakistan",
    age: null,
  },
  {
    id: 6,
    name: "Melisandre",
    firstName: null,
    email: "hassanalichaudhry97@gmail.com",
    phoneNo: "03333333555",
    address: "2526 block town lahore pakistan",
    age: 150,
  },
  {
    id: 7,
    name: "Clifford",
    firstName: "Ferrara",
    email: "hassanalichaudhry97@gmail.com",
    phoneNo: "03333333555",
    address: "2526 block town lahore pakistan",
    age: 44,
  },
  {
    id: 8,
    name: "Frances",
    firstName: "Rossini",
    email: "hassanalichaudhry97@gmail.com",
    phoneNo: "03333333555",
    address: "2526 block town lahore pakistan",
    age: 36,
  },
  {
    id: 9,
    name: "Roxie",
    firstName: "Harvey",
    email: "hassanalichaudhry97@gmail.com",
    phoneNo: "03333333555",
    address: "2526 block town lahore pakistan",
    age: 65,
  },
];
const style = {
  "& .MuiOutlinedInput-input": {
    height:"2vh"
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "#E4F1FF",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight: "600",
  },
  "& .MuiDataGrid-virtualScroller": {
    backgroundColor: "white",
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "white",
  },
};

const Products = () => {
  return (
    <div style={{ backgroundColor: "#F6F4FC", width: "auto" }}>
      <Box
        sx={{ backgroundColor: "white", borderRadius: "2vh", padding: "15px" }}
      >
        <Typography variant="h4" sx={{ textAlign: "left" }}>
          Products
        </Typography>
      </Box>
      <Box sx={{ marginTop: "2vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center",
            backgroundColor: "white",
            borderRadius: "2vh 2vh 0vh 0vh",
            padding: "7px 15px 0px 15px",
          }}
        >
        <div style={{padding: "11px"}}>
          <div style={{ display: "flex" }}>
            <Typography variant="h5" sx={{ fontWeight: "500" }}>
              All Items
            </Typography>
            <div className="items-added" style={{}}>
              <Typography>
                <b>30 Items Added</b>
              </Typography>
            </div>
          </div>
          <div>
            <div style={{display:"flex"}}>
              <Typography sx={{color:"#9EA1A7",  fontWeight:500}}>Last updated on: </Typography>
              <Typography sx={{fontWeight:600, marginLeft:"5px"}}>May 24, 2023 12:22 PM</Typography>
            </div>
          </div>
          </div>
          <div>
            <TextField 
            sx={style}
              className="product-search-field"
              placeholder="Search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img
                      src={search_icon}
                      style={{ width: "24px", height: "24px" }}
                    />
                  </InputAdornment>
                ),
              }}
            />

            <Button className="printer-btn grey-border">
              <img src={printer_icon} />
            </Button>
            <Button className="download-btn grey-border">
              <img src={download_icon} />
            </Button>
            <Button
              className="bulk-upload-btn"
              variant="contained"
              sx={{
                padding:"9px",
                marginLeft:"5px",
                marginRight: "10px",
                color: "#092646",
                fontWeight: "600",
                backgroundColor: "#E9ECF9",
                textTransform: "capitalize",
              }}
            >
              <img src={upload_icon} /> Bulk Upload
            </Button>

            <Button
              className="add-new-btn"
              variant="contained"
              sx={{
                padding:"9px",
                fontWeight: "600",
                backgroundColor: "#092646",
                textTransform: "capitalize",
              }}
            >
              <AddIcon /> Add New
            </Button>
          </div>
        </div>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            sx={style}
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </div>
      </Box>
    </div>
  );
};

export default Products;

import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import React from "react";
import search_icon from "../../Assets/icons/search-icon.svg";

const style = {
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor:"#E4F1FF"
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    fontWeight:"600"
  }
}

const columns = [
  { field: 'id', headerName: 'Order No.', width: 90 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  {
    field: 'phoneNo',
    headerName: 'Phone No.',
    width: 90,
  },
  {
    field: 'address',
    headerName: 'Address',
    width: 90,
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 90,
  },
  {
    field: 'date',
    headerName: 'Date',
    width: 90,
  },
  {
    field: 'orderStatus',
    headerName: 'Order Status',
    description: 'This column ',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 90,
  },
];

const rows = [
  { id: 1, name: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, name: 'Lannister', firstName: 'Cersei',email:"hassanalichaudhry97@gmail.com", phoneNo:"03333333555",address:"2526 block town lahore pakistan",age: 42 },
  { id: 3, name: 'Lannister', firstName: 'Jaime',email:"hassanalichaudhry97@gmail.com",phoneNo:"03333333555",address:"2526 block town lahore pakistan", age: 45 },
  { id: 4, name: 'Stark', firstName: 'Arya',email:"hassanalichaudhry97@gmail.com", phoneNo:"03333333555",address:"2526 block town lahore pakistan",age: 16 },
  { id: 5, name: 'Targaryen', firstName: 'Daenerys', email:"hassanalichaudhry97@gmail.com",phoneNo:"03333333555",address:"2526 block town lahore pakistan",age: null },
  { id: 6, name: 'Melisandre', firstName: null, email:"hassanalichaudhry97@gmail.com",phoneNo:"03333333555",address:"2526 block town lahore pakistan",age: 150 },
  { id: 7, name: 'Clifford', firstName: 'Ferrara',email:"hassanalichaudhry97@gmail.com", phoneNo:"03333333555",address:"2526 block town lahore pakistan",age: 44 },
  { id: 8, name: 'Frances', firstName: 'Rossini', email:"hassanalichaudhry97@gmail.com",phoneNo:"03333333555",address:"2526 block town lahore pakistan",age: 36 },
  { id: 9, name: 'Roxie', firstName: 'Harvey', email:"hassanalichaudhry97@gmail.com",phoneNo:"03333333555",address:"2526 block town lahore pakistan",age: 65 },
];
const Dashboard = () => {
  return (
    <Box sx={{ 
      // height: "100vh",
      backgroundColor: "#F6F4FC", width:"auto"}}>
      <Grid container spacing={1}>
        <Grid item lg={6} md={6} sm={6}>
          <Typography>Total Sale</Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={6}>
          <Typography>Store Statistics </Typography>
        </Grid>
      </Grid>
      <Box>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "white",
            borderRadius: "2vh",
          }}
        >
          <div>
            <Typography variant="h4">Recent Orders</Typography>
          </div>
          <div>
            <TextField
              sx={{ backgroundImage: { search_icon } }}
              label="Search"
            />
            <Button variant="contained">Show All</Button>
          </div>
        </div>
        <div style={{ height: 400, width: '100%' }}>
      <DataGrid sx={style}
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
    </Box>
  );
};

export default Dashboard;

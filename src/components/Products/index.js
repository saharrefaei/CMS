import styledReact from "styled-components";
import * as React from "react";

import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { DataGrid } from '@mui/x-data-grid';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ProductChart from './components/ProductChart'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));


function GetUsers() {
  const [users, setusers] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [Price, setPrice] = useState(()=>{
    let localData = localStorage.getItem('price')
    if(localData){
      return localData
    }
    return ''
  });

  const [Date, setDate] = useState(()=>{
    let localData = localStorage.getItem('Date')
    if(localData){
      return localData
    }
    return ''
  });
  
  const [Name, setName] = useState(()=>{
    let localData = localStorage.getItem('Name')
    if(localData){
      return localData
    }
    return ''
  });
  const [useridentication, setuseridentication] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fir-75f9a-default-rtdb.firebaseio.com/Products.json"
        );
        const data = await response.json();
  
        if (data && typeof data === 'object') {
          setusers(Object.entries(data));
        } else if (Array.isArray(data) && data.length === 1) {
          setusers([data]);
        } else {
          setusers([]);
        }
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [refresh]);
  
  const RemoveHandler = async (userId) => {
    try {
      const response = await fetch(
        `https://fir-75f9a-default-rtdb.firebaseio.com/Products/${userId}.json`,
        {
          method: "DELETE",
        }
      );
  
      if (response.ok) {
  
        setrefresh((prev) => !prev, () => {
        });
      } else {
        console.error(`Failed to delete user. Name: ${response.Name}`);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  
  
  const EditHandler = async () => {
    console.log(useridentication, "useridentication");

    const datas = {
        Price,
      Date,
      Name,
    };
    await fetch(
      `https://fir-75f9a-default-rtdb.firebaseio.com/Products/${useridentication}.json`,
      {
        method: "PUT",
        body: JSON.stringify(datas),
      }
    ).then((response) => console.log(response));

    setrefresh((prev) => !prev);
  };


  useEffect(()=>{
    localStorage.setItem('price',Price )

  },[Price])
  
  useEffect(()=>{
    localStorage.setItem('Date',Date )
    
  },[Date])
  useEffect(()=>{
    localStorage.setItem('Name',Name )
    
  },[Name])



  const columns = [
    { field: 'id', headerName: 'user name', width: 200 },
    {
      field: 'ProductName',
      headerName: 'ProductName',
      width: 250,
      editable: true,
    },
    {
      field: 'Price',
      headerName: 'Price',
      width: 200,
      editable: true,
    },
    {
      field: 'date',
      headerName: 'date',
      width: 200,
      editable: true,
    
    },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <div>
          <DeleteForeverIcon style={{paddingRight:'10px' , color:'#ff0000'}}
            onClick={() => {
              RemoveHandler(params.row.id);
            }}
          />
          <DriveFileRenameOutlineIcon
           style={{ color:'#24d05a'}}
            className="BorderColorIcon"
            onClick={() => {
              handleOpen();
              setuseridentication(params.row.id);
            }}
          />
        </div>
      ),
    },
  ];
  
  const rows = users.map((user, index) => ({
    id: user[0],
    ProductName: user[1].Name,
    Price:user[1].Price,
    date: user[1].Date,
  
  }));


  return (
    <GetUsersContainer>
  <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Yoho you want to edit infos !
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <IputItems>
              <Box sx={{ width: 500, maxWidth: "100%" }}>
                <TextField
                  fullWidth
                  label={Price}
                  id="fullWidth"
                  className="Input"
                  value={Price}
                  onChange={(event) => setPrice(event.target.value)}
                />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  label="Date"
                  id="fullWidth"
                  className="Input"
                  value={Date}
                  onChange={(event) => setDate(event.target.value)}
                />
              </Box>
              <Box
                sx={{
                  width: 500,
                  maxWidth: "100%",
                }}
              >
                <TextField
                  fullWidth
                  label="Name"
                  id="fullWidth"
                  className="Input"
                  value={Name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Box>
            </IputItems>
          </Typography>

          <Button
            variant="outlined"
            size="medium"
            className="BackMainPage"
            onClick={() => { 
                 EditHandler()
                handleClose()}
          
            }
          >
            edit
          </Button>
        </Box>
      </Modal>

      <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={8}
        direction="row"
        justifyContent="center"
        alignItems="center"
        marginTop='5%'
      >
    

        <Grid item xs={12}>
        <Item style={{ margin: "0px", paddingLeft: "2rem" }}>
          <ProductChart chartData={users} />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </GetUsersContainer>
  );
}

export default GetUsers;

const GetUsersContainer = styledReact.div`
display: flex;
flex-direction: column;
align-items: center;
width: 70rem;

  .BackMainPage {
    margin-top: 15%;
  }
  .BorderColorIcon {
    margin-left: 15%;
  }
`;
const IputItems = styledReact.form`
  .Input {
    margin-bottom: 5%;
  }
`;

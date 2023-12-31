import styled from "styled-components";
import * as React from "react";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { DataGrid } from '@mui/x-data-grid';
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

function GetUsers() {
  const [users, setusers] = useState([]);
  const [refresh, setrefresh] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [Title, setTitle] = useState("");
  const [Date, setDate] = useState("");
  const [Status, setStatus] = useState("");
  const [useridentication, setuseridentication] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fir-75f9a-default-rtdb.firebaseio.com/Users.json"
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
        `https://fir-75f9a-default-rtdb.firebaseio.com/Users/${userId}.json`,
        {
          method: "DELETE",
        }
      );
  
      if (response.ok) {
        console.log("User deleted successfully");
  
        setrefresh((prev) => !prev, () => {
          console.log("Refreshed");
        });
      } else {
        console.error(`Failed to delete user. Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  
  
  const EditHandler = async () => {
    console.log(useridentication, "useridentication");

    const datas = {
        Title,
      Date,
      Status,
    };
    await fetch(
      `https://fir-75f9a-default-rtdb.firebaseio.com/Users/${useridentication}.json`,
      {
        method: "PUT",
        body: JSON.stringify(datas),
      }
    ).then((response) => console.log(response));

    setrefresh((prev) => !prev);
  };



  const columns = [
    { field: 'id', headerName: 'user name', width: 200 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 250,
      editable: true,
    },
    {
      field: 'joindate',
      headerName: 'join date',
      width: 200,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'email',
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
    joindate: user[1].Date,
    firstName: user[1].Title,
    email:  user[1].Status,
  
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
            Yoho you want to edit user details !
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <IputItems>
              <Box sx={{ width: 500, maxWidth: "100%" }}>
                <TextField
                  fullWidth
                  label={Title}
                  id="fullWidth"
                  className="Input"
                  value={Title}
                  onChange={(event) => setTitle(event.target.value)}
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
                  label="Status"
                  id="fullWidth"
                  className="Input"
                  value={Status}
                  onChange={(event) => setStatus(event.target.value)}
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
    </GetUsersContainer>
  );
}

export default GetUsers;

const GetUsersContainer = styled.div`
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
const IputItems = styled.form`
  .Input {
    margin-bottom: 5%;
  }
`;

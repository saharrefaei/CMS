import * as React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import AnnouncementIcon from '@mui/icons-material/Announcement';
function AddProduct() {
    const [Price , setPrice] = useState('')
    const [Date , setDate] = useState('')
    const [Name , setName] = useState('')

    function  SubmitFireBase (event){
      
      event.preventDefault();

        const datas ={
          Price,
          Date,
          Name
        }
        fetch('https://fir-75f9a-default-rtdb.firebaseio.com/Products.json ', {
            method :'POST',
            body:JSON.stringify(datas)
        }).then(response=>console.log(response))
    }

    
  return (
    <IputItems  onSubmit={SubmitFireBase}>
      <p className='Name'>Add your Product <AnnouncementIcon  style={{color:"#ff9600" }} /></p>
      <Box sx={{ width: 500, maxWidth: "100%" }}>
        <TextField
          fullWidth
          label="Product Price"
          id="fullWidth"
          className="Input"
          value={Price}
          onChange={(event)=>setPrice(event.target.value)}
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
          onChange={(event)=>setDate(event.target.value)}
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
        onChange={(event)=>setName(event.target.value)}
        />
        

      </Box>

      <Button 
  type="submit"
  variant="contained" 
      endIcon={<SendIcon />}
      >
        Send it to me
      </Button>

 
    </IputItems>
  );
}

export default AddProduct;

const IputItems = styled.form`
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
.Name{
  font-size: large;
  margin-bottom: 5%;

}
  .Input {
  
    margin-bottom: 10%;
  }
  .ShowDB{
    margin-left: 14.5rem;

  }
`;

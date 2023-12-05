import * as React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
function InputFireBase() {
    const [Title , setTitle] = useState('')
    const [Date , setDate] = useState('')
    const [Status , setStatus] = useState('')

    function  SubmitFireBase (event){
      
      event.preventDefault();

        const datas ={
          Title,
          Date,
          Status
        }
        fetch('https://fir-75f9a-default-rtdb.firebaseio.com/Users.json ', {
            method :'POST',
            body:JSON.stringify(datas)
        }).then(response=>console.log(response))
    }

    
  return (
    <IputItems  onSubmit={SubmitFireBase}>
      <p  className='status'>  <PersonAddIcon  style={{color:"#00abff" }}/> Add user </p >
      <Box sx={{ width: 500, maxWidth: "100%" }}>
        <TextField
          fullWidth
          label="name"
          id="fullWidth"
          className="Input"
          value={Title}
          onChange={(event)=>setTitle(event.target.value)}
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
        label="email" 
        id="fullWidth" 
        className="Input"  
        value={Status}
        onChange={(event)=>setStatus(event.target.value)}
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

export default InputFireBase;

const IputItems = styled.form`
align-items: center;
justify-content: center;
display: flex;
flex-direction: column;
.status{
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

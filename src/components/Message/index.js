import * as React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Message } from "@material-ui/icons";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import Diversity3Icon from '@mui/icons-material/Diversity3';
function MessagePage() {
    const [Price , setPrice] = useState('')
    
    const [Name , setName] = useState('')

    function  SubmitFireBase (event){
      
      event.preventDefault();

        const datas ={
          Price,
          Name
        }
        fetch('https://fir-75f9a-default-rtdb.firebaseio.com/Products.json ', {
            method :'POST',
            body:JSON.stringify(datas)
        }).then(response=>console.log(response))
    }

    
  return (
    <IputItems  onSubmit={SubmitFireBase}>
      <p className='Name'> <DirectionsRunIcon  style={{color:"#3f5efb" }} /> Hi , you are able to send message to the admin , admin able to see your message and answer your text <Diversity3Icon style={{color:"#fb3d7b" }} /></p>
      <Box sx={{ width: 500, maxWidth: "100%" }} className='Box'>
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
       className='Box'
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

export default MessagePage;

const IputItems = styled.form`

    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
.Name{
  font-size: large;
  margin-bottom:10%;

}
  .Input {
 
    margin-bottom: 10%;
  }
  .ShowDB{
    margin-left: 14.5rem;

  }
`;

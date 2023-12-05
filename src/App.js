import React from 'react';
import './App.css';
import { useLocation, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InputFireBase from './components/AddUser/index'
import Users from './components/Users/index'
import MainPage from './components/MainPage';
import TopBar from './components/TopBar/TopBar'
import Sidebar from './components/SideBar/sideBar';
import styled from "styled-components";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddProduct from './components/AddProducts/index'
import Products from './components/Products/index'
import MessagePage from './components/Message/index'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>


        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid  xs={2}> 
             <Sidebar/>

        </Grid>

        <Grid  xs={10}>
          <RightCountainer>
          <Routes >
                <Route path="" element={<Navigate to={'/MainPage'} />} />
                <Route path={"/MainPage"} element={<MainPage />} />
                <Route path={"/InputFireBase"} element={<InputFireBase />} />
                <Route path={"/UsersInDB"} element={<Users />} />
                <Route path={"/AddProduct"} element={<AddProduct />} />
                <Route path={"/Product"} element={<Products />} />
                <Route path={"/Message"} element={<MessagePage />} />
                <Route
                path="*"
                element={
                    <div>
                        <h2>Page not found</h2>
                    </div>
                }
            />
        </Routes>
        </RightCountainer>
        </Grid>
        </Grid>
        </Box>

     
      </header>
    </div>
  );
}

export default App;


const RightCountainer = styled.div`
  padding :8rem 5rem
  
`;
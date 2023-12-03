import React from 'react';
import './App.css';
import { useLocation, BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import InputFireBase from './components/inputPage/index'
import Users from './components/Users/index'
import MainPage from './components/MainPage';
import TopBar from './components/TopBar/TopBar'
import Sidebar from './components/SideBar/sideBar';
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar/>
        <RightCountainer>
      <Sidebar/>
      <Routes>
                <Route path="" element={<Navigate to={'/MainPage'} />} />


                <Route path={"/MainPage"} element={<MainPage />} />
                <Route path={"/InputFireBase"} element={<InputFireBase />} />

                <Route path={"/UsersInDB"} element={<Users />} />
                
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
      </header>
    </div>
  );
}

export default App;


const RightCountainer = styled.div`
display : flex ;
margin-top:10%;
`;
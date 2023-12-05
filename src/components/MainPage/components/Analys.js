import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import NewMembers from "./NewMembers";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styledReact from "styled-components";
import Chart from './Chart'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={8}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={4} style={{ display: "grid", justifyContent: "start" }}>
          <Item style={{ margin: "0px", paddingLeft: "2rem" }}>
            <h2 style={{ paddingRight: "11rem" , color:'#0808c6',marginLeft:'-10%'  }}>Revanue</h2>
            <RevanuePrice>
              <h2>$2376</h2> <p style={{ paddingLeft: "6rem" , color:'#fd1d1d'}}>-11.4</p>{" "}
              <ArrowDownwardIcon
                color="warning"
                style={{ paddingLeft: "6px" }}
              />
            </RevanuePrice>
            <p style={{ marginLeft:'-13%' ,color:'#604f4f' }}>compare this month</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
        <Item style={{ margin: "0px", paddingLeft: "2rem" }}>
            <h2 style={{ paddingRight: "11rem", color:'#0808c6',marginLeft:'-13%' }}>sales</h2>
            <RevanuePrice>
              <h2>$2376</h2> <p style={{ paddingLeft: "6rem", color:'#fd1d1d' }}>-35.4</p>
              <ArrowDownwardIcon
                color="warning"
                style={{ paddingLeft: "6px" }}
              />
            </RevanuePrice>
            <p style={{ marginLeft:'-13%' ,color:'#604f4f' }}>compare this month</p>
          </Item>
        </Grid>
        <Grid item xs={4}>
        <Item style={{ margin: "0px", paddingLeft: "2rem" }}>
            <h2 style={{ paddingRight: "11rem" , color:'#0808c6',marginLeft:'-13%' }}>costs</h2>
            <RevanuePrice>
              <h2>$2376</h2> <p style={{ paddingLeft: "6rem", color:'green' }}>-0.6</p>
              <ArrowUpwardIcon
                color="success"
                style={{ paddingLeft: "6px" }}
              />
            </RevanuePrice>
            <p style={{ marginLeft:'-13%',color:'#604f4f'  }}>compare this month</p>
          </Item>
        </Grid>
        <Grid item xs={12}>
        <Item style={{ margin: "0px", paddingLeft: "2rem" }}>
          <Chart/>
          
          </Item>
        </Grid>
        <Grid item xs={12}>
        <Item style={{ margin: "0px", paddingLeft: "2rem" }}>
<NewMembers/>     
 </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

const RevanuePrice = styledReact.div`
display: flex;
align-items: center;

`;

import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import Avatar from '@mui/material/Avatar';
import { useState,  } from 'react';
import {  deepPurple } from '@mui/material/colors';

const ODD_OPACITY = 0.2;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: theme.palette.grey[200],
    '&:hover, &.Mui-hovered': {
      backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&.Mui-selected': {
      backgroundColor: alpha(
        theme.palette.primary.main,
        ODD_OPACITY + theme.palette.action.selectedOpacity,
      ),
      '&:hover, &.Mui-hovered': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          ODD_OPACITY +
            theme.palette.action.selectedOpacity +
            theme.palette.action.hoverOpacity,
        ),
        '@media (hover: none)': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            ODD_OPACITY + theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  },
}));

export default function StripedGrid() {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({ rows: [] });
  const [users, setUsers] = useState([]);
console.log(users,'users');
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://fir-75f9a-default-rtdb.firebaseio.com/Users.json'
        );
        const result = await response.json();

        if (result && typeof result === 'object') {
          setUsers(Object.entries(result));
        } else if (Array.isArray(result) && result.length === 1) {
          setUsers([result]);
        } else {
          setUsers([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      field: 'Avatar',
      headerName: 'Avatar',
      width: 200,
      renderCell: (params) => (
        <Avatar alt={`Avatar ${params.row.id}`}  sx={{ bgcolor: deepPurple[500] }} src="/static/images/avatar/1.jpg" />
      ),
    },
    { field: 'id', headerName: 'ID', width: 200 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 250,
      editable: true,
    },
    {
      field: 'email',
      headerName: 'email',
      width: 250,
      editable: true,
    },
    {
      field: 'joindate',
      headerName: 'joindate',
      width: 100,
      editable: true,
    },
  ];

  const rows = users.map((user, index) => ({
    id: index + 1,
    Avatar: <Avatar alt={`Avatar ${index + 1}`} sx={{ bgcolor: deepPurple[500] }} src="/static/images/avatar/1.jpg" />,
    joindate: user[1].Date,
    firstName: user[1].Title,
    email: user[1].Status,
  }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <StripedDataGrid
        loading={loading}
        rows={rows}
        columns={columns}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
        }
      />
    </div>
  );
}

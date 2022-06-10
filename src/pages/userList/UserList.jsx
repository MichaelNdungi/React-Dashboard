import React, { useState } from 'react';

import "./userList.css";
import {userRows} from "../../dummyData";

import { DataGrid } from '@mui/x-data-grid';
import { MdOutlineDelete } from  "react-icons/md";
import { Link } from "react-router-dom";



export default function UserList() {

  const[data, setData] = useState(userRows);
  
  const handleDelete = (id)=>{
    setData(data.filter((item) => item.id !==id));

  }
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 130, rendeCell:(params)=>{
      return(
        <div className="userListUser">
          <img className="userListImg"src={params.row.avatar} alt=""/>
          {params.row.username}
        </div>
      )
    }
   },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 120,
    },
    {
      field:"action",
      headerName:"Action",
      width:150,
      renderCell:(params)=>{
        return(
          <>
          <Link to={"/user/" +params.row.id}>
          <button className="userListEdit">Edit</button>
          </Link>
          <MdOutlineDelete className="userListDelete" onClick={()=>handleDelete(params.row.id)}/>
          </>
        )
      }
    }
  ];
  
 

  return (
    <div className="userList" >
      
      <DataGrid 
      disableSelectionOnClick 
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />  
    </div>
  );
}






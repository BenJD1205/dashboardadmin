import React, {useState} from 'react'
import './datatable.scss';
import {userColumns, userRows} from '../../datatablesource';
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom';
  
const Datatable = () => {

    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field:"action",
            headerName:"Action",
            width:200,
            renderCell:(params)=>{
                return(
                    <div className="cellAction">
                        <Link to="/users/123" style={{textDecoration:'none'}}>
                            <div className="viewButton">View</div>
                        </Link>
                        <Link to="/" style={{textDecoration:'none'}}>
                            <div 
                                className="deleteButton"
                                onClick={() => handleDelete(params.row.id)}
                            >
                                Delete
                            </div>
                        </Link>
                    </div> 
                )
            }
        }
    ]

  return (
    <div className="datatable">
        <div className="datatableTitle">
            Add New User
            <Link to="/users/new" className="link">
                Add New
            </Link>
        </div>
        <DataGrid
            className="datagrid"
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    </div>
  )
}

export default Datatable
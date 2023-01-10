import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

const EditableTable = ({ rows, edit, deleteElement }) => (
    <div style={ { height: '77vh', width: '100%' }}>
        <DataGrid rows={rows} columns={columns(deleteElement)} onCellEditCommit={edit} />
    </div>
);

const columns = (deleteElement) => {
    return [
        {field: 'id', headerName: 'ID', width: 100, editable: false},
        {field: 'name', headerName: 'Name of Set', width: 300, editable: true},
        {field: 'category', headerName: 'Category', width: 100, editable: true},
        {field: 'theme', headerName: 'Theme', width: 130, editable: true},
        {field: 'serial', headerName: 'Serial Number', width: 120, editable: true},
        {field: 'year', headerName: 'Year', type: 'number', width: 80, editable: true},
        {field: 'pieces', headerName: 'Pieces', type: 'number', width: 80, editable: true},
        {field: 'condition', headerName: 'Condition:', width: 100, editable: true},
        {field: 'price', headerName: 'Price (€)', type: 'number', width: 80, editable: true},
        //{field: 'imgUrl', headerName: 'Image URL:', width: 150, editable: true},
        //{field: 'imgAlt', headerName: 'Image title:', width: 150, editable: true},
        {field: 'delete', headerName: 'Delete',
            renderCell: (params) => (
                <strong>
                    <Button
                            variant='contained'
                            color='error'
                            size='small'
                            style={{ marginLeft: 16 }}
                            id='deleteButton'
                            onClick={ (e) => deleteElement(e, params) }
                        >
                            Delete
                        </Button>
                </strong>
            ),
        }
    ];
}

export default EditableTable;
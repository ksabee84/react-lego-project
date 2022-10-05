import React, { useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { width } from '@mui/system';

const SearchField = () => {

    const [legoItemsData, setLegoItemsData ] = useState([]);

    const fetchItems = () => {
        fetch('http://localhost:8080/api/v1/react-lego-project/items')
        .then((result) => result.json())
        .then((data) => setLegoItemsData(data))
        .catch((error) => {
            console.log('Data cannot be loaded: ', error);
        });
    };

    fetchItems();

    const itemName = legoItemsData.map((item) => item.name);

    return (
        <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={itemName}
        sx={{ width: 8/10 }}
        renderInput={(params) => <TextField {...params} label="Type to search" />}
        />
    );
}

export default SearchField;
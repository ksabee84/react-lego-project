import React, { useState, useEffect} from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import EditableTable from '../../components/EditableTable';
import MenuElement from '../../components/MenuElement';
import './admin.css';

const AdminInterface = () => {

    const [legoItems, setLegoItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState([]);
    const [isRenderDetail, setIsRenderDetail] = useState(false);

    const fetchItems = () => {
        fetch('http://localhost:8080/api/v1/react-lego-project/items')
        .then((result) => result.json())
        .then((data) => setLegoItems(data))
        .catch((error) => {
            console.log('Data cannot be loaded: ', error);
        });
    };

    const updateItemData = async (body, id) => {
        const response = await fetch(`http://localhost:8080/api/v1/react-lego-project/items/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    };

    const editSaved = (valueChange) => {
        const legoItemsKeys = Object.keys(legoItems);

        const reqBody = {
            [valueChange.field]: valueChange.value,
        };

        updateItemData(reqBody, valueChange.id);
    };

    const deleteItem = async (itemId) => {
        const response = await fetch(`http://localhost:8080/api/v1/react-lego-project/items/${itemId}`, {
            method: 'DELETE',
        });
        console.log('response is: ', response);

        if(response.status === 200) {
            const item = legoItems.find((item) => item.id === parseInt(item.id));
            const index = legoItems.indexOf(item);
            const newItemArray = [...legoItems];
            newItemArray.splice(index, 1);
            setLegoItems(newItemArray);
        }
    };

    const detailedRendering = () => {
        if(selectedItem) {
            return(
                <EditableTable
                rows={legoItems}
                edit={editSaved}
                deleteElement={(e, params) => deleteItem(params.id)}
                />)
        }
    };

    return(
        <div className='mainDiv'>
            <MenuElement className='menu' />
            <Container className='buttonsContainer'>
                <Button
                    className='itemDataButtons'
                    size='big'
                    variant='contained'
                    onClick={ fetchItems } >
                        Show All Sets
                </Button>
                <Button
                    className='itemDataButtons'
                    size='big'
                    variant='contained'
                    //onClick={ addNewItem }
                    >
                        Add a New Set
                </Button>
            </Container>
            {
                isRenderDetail && detailedRendering()
            }
            <EditableTable
                rows={legoItems}
                edit={editSaved}
                deleteElement={(e, params) => deleteItem(params.id).then( () => {fetchItems()})}
                id='editableTable'
                className='editable'
            /> 
        </div>
    );
};

export default AdminInterface;
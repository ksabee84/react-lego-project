import React, { useState, useEffect } from "react";
import PropTypes, { number, string } from 'prop-types';
import { Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AlertComponent from "./AlertComponent";
import TextField from '@mui/material/TextField';
import CartBadgeComponent from './CartBadgeComponent';
import SelectedItemsComponent from './SelectedItemsComponent';

const LegosElement = () => {
    const [selectedItem, setSelectedItem] = useState({});
    const [selected, setSelected] = useState(false);
    const [legoItemsData, setLegoItemsData] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [countItems, setCountItems] = useState(0);

    const badgeData = countItems;
    let selectedItemsData = [];

    useEffect(() => {
        fetch('http://localhost:8080/api/v1/react-lego-project/items')
        .then((result) => result.json())
        .then((data) => {
            setLegoItemsData(data);
        })
        .catch((error) => {
            console.log('Data cannot be loaded: ', error);
        })
    }, [countItems, selectedItem, selected]);

    const getItemById = (id) => {
        fetch(`http://localhost:8080/api/v1/react-lego-project/items/${id}`)
        .then((result) => result.status === 200 ? result.json() : result.text())
        .then((data) => {
            setSelectedItem(data);
            //selectedItem.id;
        })
        .catch((error) => {
            console.log('Data cannot be loaded: ', error);
        });
    };

    const handleItemClick = (id) => {
        getItemById(id);
        setCountItems(countItems+1);
        setSelected(true);
        selectedItemsData.push(selectedItem);

        console.log(id);
        console.log(countItems);
        console.log(selectedItemsData);
        console.log(selected, selectedItem.id);
    }

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredItems = legoItemsData.filter((item) => {
        return item.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return(
        <div className="mainDiv">
            <div className="searchField">
                <TextField
                    sx={{
                        width: '60vw',
                        bgcolor: 'beige' ,
                        marginRight: '10vw',
                        borderRadius: '5px'
                    }}
                    onChange={onSearchChange}
                    label="Type to search"
                />
                
                <CartBadgeComponent badgeContent={badgeData} />
                { countItems > 0 && <SelectedItemsComponent content={ selectedItem.name } /> }
            </div>
        
            <div className="contentDiv">
            {
                legoItemsData.length > 0 ? filteredItems.map((item) => (
                    <div className="itemCardsDiv">
                        <Card className="card">
                            <div className="imgDiv">
                            <CardMedia className="cardImg"
                                component="img"
                                alt={item.imgAlt}
                                height= "auto"
                                width = "15vw"
                                display = "cover"
                                image={item.imgUrl}
                            />
                            </div>
                            <CardContent className='cardContent'>
                                <div className='itemNameDiv'>
                                    <Typography gutterBottom variant="h1" component="div" className ='itemName' key={item.name}>
                                        { item?.name }
                                    </Typography>
                                    <Typography variant="h2" color="text.secondary" className='itemImgText'>
                                        { item?.category } { item?.theme }
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" className='itemImgText'>
                                        { item?.serial }
                                    </Typography>
                                </div>
                                <Typography variant="body2" className='itemText'>
                                        <p>Year: { item.year }</p>
                                        <p>Pieces: { item.pieces }</p>
                                        <p>Condition: { item.condition }</p>
                                        <p>Price: { item.price } €</p>
                                </Typography>
                            </CardContent>
                            <CardActions className='itemCardActions'>
                                <Button
                                    size='large'
                                    variant='contained'
                                    className='itemsButton'
                                    selected={selectedItem.id === parseInt(item.id)}
                                    onClick={() => handleItemClick(item.id)}
                                    key={item.id}>
                                    Add to Basket
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                ))
                :
                <div className="alertDiv">
                    <AlertComponent />
                </div>
            }
            </div>
        </div>
    )
}

LegosElement.propTypes = {
    id: number,
    name: string,
    category: string,
    theme: string,
    serial: string,
    year: number,
    pieces: number,
    condition: PropTypes.oneOf(['new', 'used']),
    price: number,
    imgUrl: string,
    imgAlt: string
}

export default LegosElement;
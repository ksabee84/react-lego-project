import React, { useState } from "react";
import PropTypes, { number, string } from 'prop-types';
import SearchField from "./SearchField";
import { Card, CardMedia, CardContent, CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AlertComponent from "./AlertComponent";

const LegosElement = ({
    id,
    name,
    category,
    theme,
    serial,
    year,
    pieces,
    condition,
    price,
    imgUrl,
    imgAlt
}) => {
    const [selectedIndex, setSelectedIndex] = useState(1);
    const [legoItemsData, setLegoItemsData] = useState([]);

    const fetchItems = () => {
        fetch('http://localhost:8080/api/v1/react-lego-project/items')
        .then((result) => result.json())
        .then((data) => setLegoItemsData(data))
        .catch((error) => {
            console.log('Data cannot be loaded: ', error);
        });
    };

    fetchItems();

    const item = (id) => {
        legoItemsData.find((item) => item.id === parseInt(id));
    };

    const handleItemClick = (e, index) => {
        setSelectedIndex(index);
        console.log(item.id);
    };

    return(
        <div className="mainDiv">
            <div className="searchField">
                <SearchField />
            </div>
            <div className="contentDiv">
            {
                legoItemsData.length > 0 ? legoItemsData.map((item) => (
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
                                    <Typography gutterBottom variant="h6" component="div" className ='itemName' key={item.name}>
                                        { item?.name } 
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" className='itemImgText'>
                                        { item?.category } { item?.theme } { item?.serial }
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
                                    selected={selectedIndex === parseInt(item.id)}
                                    onChange={(e) => console.log('data', legoItemsData)}
                                    onClick={(e) => handleItemClick(e, item.id)}
                                    key={item.itemName}>
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
    id: number.isRequired,
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
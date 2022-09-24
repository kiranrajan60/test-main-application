import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "../CardData/Cards.css";

const Cards = (props) => {
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.image}
                    alt="green iguana"
                />
                <CardContent>
                    <h3 className="card-header-main">{props.name}</h3>
                    <p className="card-data">{props.description}</p>
                </CardContent>
            </Card>
        </div>
    )
}

export default Cards;
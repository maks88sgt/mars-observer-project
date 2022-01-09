import {Card, CardActions, CardContent, Typography, Button} from "@mui/material";
import React from "react";
import curiosity from '../../assets/curiosity.jpg';

export const CuriosityCard = () => {
    return <Card sx={{width: 275, m: 5}}>
        <CardContent>
            <Typography variant="h5" component="div">
                Curiosity
            </Typography>
            <Typography variant="body2">
                is a car-sized Mars rover. It's mission began in 2011 and continues now.
            </Typography>
        </CardContent>
        <img src={curiosity} width="200" height="200"/>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
}

import {Card, CardActions, CardContent, Typography, Button} from "@mui/material";
import React from "react";
import spirit from '../../assets/spirit.jpg';

export const SpiritCard = () => {
    return <Card sx={{width: 275, m: 5}}>
        <CardContent>
            <Typography variant="h5" component="div">
                Spirit
            </Typography>
            <Typography variant="body2">
                is a Mars robotic rover, active from 2004 to 2010.
            </Typography>
        </CardContent>
        <img src={spirit} width="200" height="200"/>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
}

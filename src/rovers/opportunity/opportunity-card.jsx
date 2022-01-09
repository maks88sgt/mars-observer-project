import {Card, CardActions, CardContent, Box, Typography, Button, CardMedia} from "@mui/material";
import React from "react";
import opportunity from '../../assets/opportunity.png';

export const OpportunityCard = () => {
    return <Card sx={{width: 275, m: 5}}>
        <CardContent>
            <Typography variant="h5" component="div">
                Opportunity
            </Typography>
            <Typography variant="body2">
                is a robotic rover that was active on Mars from 2004 until mid-2018.
            </Typography>
        </CardContent>
        <img src={opportunity} width="200" height="200"/>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </Card>
}

import React from 'react';
import {Box} from "@mui/material";
import {RoverCard} from "./rover-card";

export const Rovers = () => {
    const roversList = ['Opportunity', 'Spirit', 'Curiosity']
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-around'
                }}
            >
                {roversList.map((rover) => <RoverCard roverName={rover}/>)}
            </Box>
        </>
    );
}

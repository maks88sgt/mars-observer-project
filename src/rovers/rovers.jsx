import React from 'react';
import {Box} from "@mui/material";
import {OpportunityCard} from "./opportunity/opportunity-card";
import {CuriosityCard} from "./curiosity/curiosity-card";
import {SpiritCard} from "./spirit/spirit-card";

export const Rovers = () => {
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
                <OpportunityCard/>
                <SpiritCard/>
                <CuriosityCard/>
            </Box>
        </>
    );
}

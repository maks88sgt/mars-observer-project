import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {Container, Box, Typography, IconButton} from "@mui/material";
import {useState} from "react";
import {SearchDrawer} from "./search-drawer/search-drawer";

export function Search() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Box>
            <SearchDrawer setIsOpen={setIsOpen} isOpen={isOpen}/>
            <Container>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={()=>setIsOpen(true)}
                    edge="start"
                    sx={{m: 2, ...(isOpen && {display: 'none'}), width: '40px'}}
                >
                    <FontAwesomeIcon icon={faChevronRight}/>
                </IconButton>
                <Box sx={{
                    width: isOpen ? 2 / 3 : 1,
                    marginLeft: isOpen ? '33%' : 0,
                }}>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                        enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                        imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                        Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                        Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                        adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                        nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                        leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                        feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                        consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                        sapien faucibus et molestie ac.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

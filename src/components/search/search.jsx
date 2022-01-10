import React from 'react';
import ruLocale from 'date-fns/locale/ru';
import enLocale from 'date-fns/locale/en-US';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {AVAILABLE_ROVERS_LIST} from "../../constants/rovers";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    ToggleButton,
    ToggleButtonGroup
} from "@mui/material";
import {useState} from "react";
import {AVAILABLE_ROVERS_CAMERAS} from "../../constants/roversCameras";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import {useTranslation} from "react-i18next";

const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export function Search() {
    const [open, setOpen] = useState(false);
    const [rover, setRover] = useState(AVAILABLE_ROVERS_LIST[0]);
    const [currentCamera, setCurrentCamera] = useState(AVAILABLE_ROVERS_CAMERAS[rover][0]);
    const availableCameras = AVAILABLE_ROVERS_CAMERAS[rover];

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const {t, i18n} = useTranslation('translation');

    const localeMap = {
        en: enLocale,
        ru: ruLocale
    };

    const maskMap = {
        en: '__/__/____',
        ru: '__.__.____',
    };

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{m: 2, ...(open && {display: 'none'}), width: '40px'}}
            >
                <FontAwesomeIcon icon={faChevronRight}/>
            </IconButton>
            <Drawer
                sx={{
                    width: 1 / 3,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 1 / 3,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <FontAwesomeIcon icon={faChevronLeft}/>
                    </IconButton>
                </DrawerHeader>
                <Box sx={
                    {
                        width: 4/5,
                        display: "flex",
                        flexDirection: 'row',
                        justifyContent: "space-around",
                        my: 1,
                        mx: 'auto'
                    }
                }>
                    <ToggleButtonGroup
                        value={rover}
                        exclusive
                        onChange={(event, newRover) => {
                            setRover(newRover);
                        }}
                        color="primary"
                        fullWidth
                    >
                        {AVAILABLE_ROVERS_LIST.map((roverName) => {
                            return <ToggleButton value={roverName}>{roverName}</ToggleButton>
                        })}
                    </ToggleButtonGroup>
                </Box>
                <Box sx={
                    {
                        width: 4/5,
                        display: "flex",
                        justifyContent: "center",
                        my: 1,
                        mx: 'auto'
                    }
                }>
                    <FormControl fullWidth>
                        <InputLabel id="camera-select-label">Camera</InputLabel>
                        <Select
                            labelId="camera-select-label"
                            id="camera-select"
                            value={currentCamera}
                            label="Camera"
                            onChange={(event) =>
                                setCurrentCamera(event.target.value)}
                        >
                            {availableCameras.map((camera) => <MenuItem value={camera}>{camera}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={
                    {
                        width: 4/5,
                        display: "flex",
                        justifyContent: "center",
                        my: 1,
                        mx: 'auto'
                    }
                }>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[i18n.language]}>
                        <DatePicker
                            label="Start date"
                            value={startDate}
                            onChange={(newValue) => {
                                setStartDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            minDate={new Date('01/01/2004')}
                            maxDate={new Date('01/01/2010')}
                        />
                        <DatePicker
                            label="End date"
                            value={endDate}
                            onChange={(newValue) => {
                                setEndDate(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            minDate={new Date('01/01/2004')}
                            maxDate={new Date('01/01/2010')}
                        />
                    </LocalizationProvider>
                </Box>
                <Box sx={
                    {
                        width: 4/5,
                        display: "flex",
                        justifyContent: "center",
                        my: 1,
                        mx: 'auto'
                    }
                }>
                    <Button fullWidth variant="contained">
                        Search
                    </Button>
                </Box>
            </Drawer>
            <Main open={open}>
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
            </Main>
        </Box>
    );
}

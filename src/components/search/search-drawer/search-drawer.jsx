import IconButton from "@mui/material/IconButton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
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
import {AVAILABLE_ROVERS_LIST} from "../../../constants/rovers";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Drawer from "@mui/material/Drawer";
import React from "react";
import {AVAILABLE_ROVERS_CAMERAS} from "../../../constants/roversCameras";
import {useTranslation} from "react-i18next";
import enLocale from "date-fns/locale/en-US";
import ruLocale from "date-fns/locale/ru";
import {useDispatch, useSelector} from "react-redux";
import {currentCamera, currentRover, endDate, startDate} from "../../../state/slices/searchSlice";
import {useGetRoverMetaInfoQuery} from "../../../state/api/roverApi";

export const SearchDrawer = ({isOpen, setIsOpen}) => {
    const dispatch = useDispatch();
    const rover = useSelector((state) => state.search.currentRover);
    const camera = useSelector((state) => state.search.currentCamera);
    const start = useSelector((state) => state.search.start);
    const end = useSelector((state) => state.search.end);
    const availableCameras = AVAILABLE_ROVERS_CAMERAS[rover];

    const { data, error, isLoading } = useGetRoverMetaInfoQuery(rover);

    console.log('>>>>>>>>>>', data);

    const {t, i18n} = useTranslation('translation', {keyPrefix: `Search`});

    const localeMap = {
        en: enLocale,
        ru: ruLocale
    };

    return <Drawer
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
        open={isOpen}
    >
        <Box sx={
            {
                display: 'flex',
                justifyContent: "flex-end",
                my: 1,
                mr: 1
            }
        }>
            <IconButton onClick={() => setIsOpen(false)} sx={{width: '40px'}}>
                <FontAwesomeIcon icon={faChevronLeft}/>
            </IconButton>
        </Box>
        <Box sx={
            {
                width: 4 / 5,
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
                    dispatch(currentRover(newRover))
                }}
                color="primary"
                fullWidth
            >
                {AVAILABLE_ROVERS_LIST.map((roverName) => {
                    return <ToggleButton key={roverName} value={roverName}>{roverName}</ToggleButton>
                })}
            </ToggleButtonGroup>
        </Box>
        <Box sx={
            {
                width: 4 / 5,
                display: "flex",
                justifyContent: "center",
                my: 1,
                mx: 'auto'
            }
        }>
            <FormControl fullWidth>
                <InputLabel id="camera-select-label">{t('Camera')}</InputLabel>
                <Select
                    labelId="camera-select-label"
                    id="camera-select"
                    value={camera}
                    label={t('Camera')}
                    onChange={(event) =>
                        dispatch(currentCamera(event.target.value))}
                >
                    {availableCameras.map((camera) => <MenuItem key={camera} value={camera}>{t(camera)}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
        <Box sx={
            {
                width: 4 / 5,
                display: "flex",
                justifyContent: "center",
                my: 1,
                mx: 'auto'
            }
        }>
            <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeMap[i18n.language]}>
                <DatePicker
                    label={t('Start')}
                    value={start}
                    onChange={(newValue) => {
                        dispatch(startDate(newValue));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    minDate={new Date('01/01/2004')}
                    maxDate={new Date('01/01/2010')}
                />
                <DatePicker
                    label={t('End')}
                    value={end}
                    onChange={(newValue) => {
                        dispatch(endDate(newValue));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    minDate={new Date('01/01/2004')}
                    maxDate={new Date('01/01/2010')}
                />
            </LocalizationProvider>
        </Box>
        <Box sx={
            {
                width: 4 / 5,
                display: "flex",
                justifyContent: "center",
                my: 1,
                mx: 'auto'
            }
        }>
            <Button fullWidth variant="contained">
                {(t('Search'))}
            </Button>
        </Box>
    </Drawer>
}

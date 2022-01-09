import {Card, CardActions, CardContent, Typography, Button} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";

export const RoverCard = ({roverName}) => {
    const {t} = useTranslation('translation', { keyPrefix: `Rovers.${roverName}` });
    return <Card sx={{width: 275, height: 390, m: 5}}>
        <CardContent>
            <Typography variant="h5" component="div">
                {t('Name')}
            </Typography>
            <Typography variant="body2">
                {t('Description')}
            </Typography>
        </CardContent>
        <img src={require(`../../assets/${roverName}.jpg`)} width="200" height="200"/>
        <CardActions>
            <Button size="small">{t('Learn more')}</Button>
        </CardActions>
    </Card>
}

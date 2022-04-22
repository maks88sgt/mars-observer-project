import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const RoverCard = ({ roverName }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: `Rovers.${roverName}`,
  });
  return (
    <Card
      sx={{
        width: 275,
        height: 390,
        m: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h5">{t("Name")}</Typography>
        <Typography variant="caption" textAlign={"center"}>
          {t("Description")}
        </Typography>
      </CardContent>
      <img
        src={require(`../../assets/${roverName}.jpg`)}
        width="200"
        height="200"
        alt={`${roverName} photo`}
      />
      <CardActions>
        <Button size="small">{t("Learn more")}</Button>
      </CardActions>
    </Card>
  );
};

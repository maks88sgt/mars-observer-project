import {
  Button,
  Card,
  CardActions,
  CardContent,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { WIKI_LINKS } from "../../constants/wikiLinks";

export const RoverCard = ({ roverName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation("translation", {
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
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <iframe
          src={WIKI_LINKS[i18n.language][roverName.toLowerCase()]}
          width={"80%"}
          height={"80%"}
        ></iframe>
      </Modal>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography variant="h5" textAlign={"center"}>
          {t("Name")}
        </Typography>
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
        <Button
          size="small"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          {t("Learn more")}
        </Button>
      </CardActions>
    </Card>
  );
};

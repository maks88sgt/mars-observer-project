import React from "react";
import { Box } from "@mui/material";
import { RoverCard } from "./rover-card";
import { AVAILABLE_ROVERS_LIST } from "../../constants/rovers";

export const Rovers = () => {
  const roversList = AVAILABLE_ROVERS_LIST;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "red"
        }}
      >
        {roversList.map((rover) => (
          <RoverCard roverName={rover} key={rover} />
        ))}
      </Box>
    </>
  );
};

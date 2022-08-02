import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Button,
  IconButton,
  ImageList,
  ImageListItem,
  Modal,
} from "@mui/material";
import { SearchDrawer } from "./search-drawer/search-drawer";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Error } from "../error/error";

export function Search() {
  const { t } = useTranslation("translation", { keyPrefix: "Search" });

  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const photos = useSelector((state) => state.photos.photos);
  const camera = useSelector((state) => state.search.currentCamera);
  const error = useSelector((state) => state.photos.error);
  const filteredPhotos = photos
    ? photos.filter((item) => item.camera.name === camera)
    : [];
  const [displayedPhotos, setDisplayedPhotos] = useState(9);

  useEffect(() => {
    setDisplayedPhotos(9);
  }, [photos]);

  return error ? (
    <Error error={error} />
  ) : (
    <>
      <SearchDrawer setIsOpen={setDrawerIsOpen} isOpen={drawerIsOpen} />
      <Modal
        open={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={modalImageSrc} alt={"from Mars"} height={"90%"} />
      </Modal>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setDrawerIsOpen(true)}
          edge="start"
          sx={{ m: 2, width: "40px" }}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </IconButton>
        <Box
          sx={{
            width: drawerIsOpen ? 2 / 3 : 1,
            marginLeft: drawerIsOpen ? "33%" : 0,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!photos ? (
            t("First time")
          ) : photos.length ? (
            <div>
              {t("All photos", { photosNumber: photos.length })}
              {t("Camera photos", { filteredPhotos: filteredPhotos.length })}
              {t("Displayed photos", {
                displayedPhotos:
                  displayedPhotos <= filteredPhotos.length
                    ? displayedPhotos
                    : filteredPhotos.length,
              })}
            </div>
          ) : (
            <div>{t("No photos", { photosNumber: photos.length })}</div>
          )}
        </Box>
      </Box>
      <Box
        sx={{
          width: drawerIsOpen ? 2 / 3 : 1,
          marginLeft: drawerIsOpen ? "33%" : 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "14px",
        }}
      >
        <ImageList sx={{ width: "100%", height: "100%" }} cols={3} gap={3}>
          {filteredPhotos.slice(0, displayedPhotos).map((item) => (
            <ImageListItem key={item.img_src}>
              <img
                src={`https${item.img_src.slice(item.img_src.indexOf(":"))}?height=300px&fit=crop&auto=format`}
                srcSet={`https${item.img_src.slice(item.img_src.indexOf(":"))}?fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                onClick={() => {
                  setModalIsOpen(true);
                  setModalImageSrc(item.img_src);
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
        {filteredPhotos.length && displayedPhotos < filteredPhotos.length ? (
          <Button
            onClick={() => setDisplayedPhotos(displayedPhotos + 9)}
            variant={"contained"}
          >
            {t("Load more")}
          </Button>
        ) : null}
      </Box>
    </>
  );
}

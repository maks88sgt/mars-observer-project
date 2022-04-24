import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Button,
  Container,
  IconButton,
  ImageList,
  ImageListItem,
  Modal,
} from "@mui/material";
import { SearchDrawer } from "./search-drawer/search-drawer";
import { useSelector } from "react-redux";

export function Search() {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const photos = useSelector((state) => state.photos.photos);
  const camera = useSelector((state) => state.search.currentCamera);
  const filteredPhotos = photos.filter((item) => item.camera.name === camera);
  const [displayedPhotos, setDisplayedPhotos] = useState(9);

  useEffect(() => {
    setDisplayedPhotos(9);
  }, [photos]);

  return (
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
        <img src={modalImageSrc} alt={"photo"} height={"90%"} />
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
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {photos.length ? (
            <div>{`${photos.length} photos founded for current date`}</div>
          ) : null}
          {filteredPhotos.length ? (
            <div>
              {`${filteredPhotos.length} photos founded for current camera`}
            </div>
          ) : null}
          {filteredPhotos.length ? (
            <div>
              {`${
                displayedPhotos <= filteredPhotos.length
                  ? displayedPhotos
                  : filteredPhotos.length
              } displayed`}
            </div>
          ) : null}
          : "No photos for such parameters, create new or try another query"}
        </Box>
      </Box>
      <Container>
        <Box
          sx={{
            width: drawerIsOpen ? 2 / 3 : 1,
            marginLeft: drawerIsOpen ? "33%" : 0,
          }}
        >
          <ImageList sx={{ width: "100%", height: "100%" }} cols={3} gap={3}>
            {filteredPhotos.slice(0, displayedPhotos).map((item, index) => (
              <ImageListItem key={item.img_src}>
                <img
                  src={`${item.img_src}?height=300px&fit=crop&auto=format`}
                  srcSet={`${item.img_src}?fit=crop&auto=format&dpr=2 2x`}
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
              Show more
            </Button>
          ) : null}
        </Box>
      </Container>
    </>
  );
}

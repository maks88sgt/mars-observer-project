import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "About",
  });
  return (
    <Box
      sx={{
        display: "flex",
        m: "0 auto",
        mt: "12px",
        flexDirection: "column",
        justifyContent: "center",
        width: "50%",
        gap: "12px",
        textAlign: "justify",
      }}
    >
      <div>{t("First")}</div>
      <div>{t("Second")}</div>
      <div>{t("Third")}</div>
      <div>{t("Fourth")}</div>
    </Box>
  );
};

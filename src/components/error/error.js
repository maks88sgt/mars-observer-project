import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Error = ({ error }) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "Error",
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
      <div>{t("User message")}</div>
      <div>{t("Error code", { code: error.code })}</div>
      <div>{t("Error message", { message: error.message })}</div>
    </Box>
  );
};

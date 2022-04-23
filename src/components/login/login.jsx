import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { currentApiKey, currentUserName } from "../../state/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { t } = useTranslation("translation", { keyPrefix: "Login" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState(false);

  return (
    <Container
      maxWidth={"lg"}
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-around",
        width: 1 / 2,
        my: 1,
        textAlign: "justify",
      }}
    >
      <div>
        <p>
          {t("ApiKey Info")}
          <a href={`https://api.nasa.gov/`} target={`_blank`}>
            https://api.nasa.gov/
          </a>
          {". "}
        </p>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-around",
          rowGap: 1,
          mb: 1,
        }}
      >
        <TextField
          id="outlined-basic"
          value={userName}
          label={t("Name")}
          onChange={(event) => setUserName(event.target.value)}
          variant="outlined"
          autoComplete="off"
          sx={{ width: 1 }}
        />
        <TextField
          id="outlined-basic"
          value={apiKey}
          label={t("ApiKey")}
          variant="outlined"
          autoComplete="off"
          required={true}
          error={error}
          onChange={(event) => {
            if (error) {
              setError(false);
            }
            setApiKey(event.target.value);
          }}
          sx={{ width: 1 }}
        />
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={<Typography variant="caption">{t("Save")}</Typography>}
        />

        <Button
          variant="contained"
          onClick={() => {
            if (apiKey && apiKey.length === 40) {
              dispatch(currentUserName(userName));
              dispatch(currentApiKey(apiKey));
              localStorage.setItem("apiKey", apiKey);
              navigate("/rovers");
            } else {
              setError(true);
            }
          }}
        >
          {t("Login")}
        </Button>
      </Box>
      <p>{t("DemoKey Info")}</p>
    </Container>
  );
};

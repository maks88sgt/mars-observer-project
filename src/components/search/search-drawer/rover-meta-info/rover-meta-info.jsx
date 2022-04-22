import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export const RoverMetaInfo = ({ data, error, isLoading }) => {
  const { t, i18n } = useTranslation("translation", { keyPrefix: "Metainfo" });

  const rows = [
    {
      field: t("launch"),
      value: new Date(data?.photo_manifest?.launch_date).toLocaleDateString(
        i18n.language
      ),
    },
    {
      field: t("landing"),
      value: new Date(data?.photo_manifest?.landing_date).toLocaleDateString(
        i18n.language
      ),
    },
    {
      field: t("maxPhotoDate"),
      value: new Date(data?.photo_manifest?.max_date).toLocaleDateString(
        i18n.language
      ),
    },
    { field: t("status"), value: t(data?.photo_manifest?.status) },
    { field: t("photosCount"), value: data?.photo_manifest?.total_photos },
  ];

  return (
    <Table>
      <TableBody>
        {!isLoading &&
          !error &&
          rows.map((row) => {
            return (
              <TableRow
                key={row.field}
                sx={{ borderBottom: "none", height: "10px" }}
              >
                <TableCell
                  scope="row"
                  sx={{ borderBottom: "none", height: "10px !important" }}
                >
                  <Typography variant="caption">{row.field}</Typography>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: "none", height: "10px !important" }}
                >
                  <Typography variant="caption">{row.value}</Typography>
                </TableCell>
              </TableRow>
            );
          })}
      </TableBody>
    </Table>
  );
};

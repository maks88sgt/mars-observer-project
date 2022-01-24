import {Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";

export const RoverMetaInfo = ({data, error, isLoading}) => {

    const rows = [
        {field: 'Launch date from Earth: ', value: new Date(data?.photo_manifest?.launch_date).toLocaleDateString('ru-RU')},
        {field: 'Landing on Mars: ', value: data?.photo_manifest?.landing_date},
        {field: 'Maximum available date for photo: ', value: data?.photo_manifest?.max_date},
        {field: 'Mission status: ', value: data?.photo_manifest?.status},
        {field: 'Number of available photos: ', value: data?.photo_manifest?.total_photos},
    ];

    return (
        <Table>
            <TableBody>
                {!isLoading && !error && rows.map((row) => {
                    return (<TableRow key={row.field} sx={{borderBottom: "none", height: '10px' }}>
                        <TableCell scope="row" sx={{borderBottom: "none", height: '10px !important' }}>
                            <Typography variant="caption">
                                {row.field}
                            </Typography>
                        </TableCell>
                        <TableCell align="right" sx={{borderBottom: "none", height: '10px !important' }}>
                            <Typography variant="caption">
                                {row.value}
                            </Typography>
                        </TableCell>
                    </TableRow>);
                })}
            </TableBody>
        </Table>);
}

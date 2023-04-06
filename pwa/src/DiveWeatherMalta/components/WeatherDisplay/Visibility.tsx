import React from "react"
import {
    Card,
    CardHeader,
    // IconButton,
    Typography,
} from "@mui/material"
import {
    useDWMSelect,
    selectDWM,
} from "../../"
// import {Icon} from "../../../@listingslab"

export default function Visibility(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {forecast} = dwm
    if (!forecast) return null
    return <>
        <Card sx={{}}>
            <CardHeader 
                title={<Typography variant="button">
                            Visibility
                        </Typography>}
                subheader={<></>}
                action={<></>}
            />
        </Card>
    </>
}

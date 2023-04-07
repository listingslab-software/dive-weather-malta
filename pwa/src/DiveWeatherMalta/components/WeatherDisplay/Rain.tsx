import React from "react"
import {
    CardHeader,
    IconButton,
} from "@mui/material"
import {
    useDWMSelect,
    selectDWM,
} from "../../"
import {Font} from "../Font"
import {Icon} from "../../../@listingslab"

export default function Rain(props: any) {
    const dwm = useDWMSelect(selectDWM)
    const {forecast} = dwm
    if (!forecast) return null
    return <>
            <CardHeader 
                title={<Font color="white">
                        Rain
                        </Font>}
                subheader={<></>}
                action={<>
                        <IconButton color="inherit">
                            <Icon icon="fullscreen" />
                        </IconButton>
                        </>}
            />
    </>
}

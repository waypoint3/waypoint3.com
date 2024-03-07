"use client";

import {TextField} from "@mui/material";

export default function ContactForm() {
    return (
        <form>
            <div className={"flex flex-col gap-3"}>
                <TextField label={"Name"} />
                <TextField label={"Email address"} />
                <TextField label={"Your comments"} multiline rows={4}/>
            </div>
        </form>
    )
}
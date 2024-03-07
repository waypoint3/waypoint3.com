"use client";

import {TextField, Button, Alert} from "@mui/material";
import {Form, SubmitHandler, useForm} from "react-hook-form";
import React, {useState} from "react";
import {BarLoader, SyncLoader} from "react-spinners";
import Link from "next/link";

type Inputs = {
    name: string
    emailAddress: string
    comments: string
}

function InputGroup({children}: {children: React.ReactNode}) {
    return (
        <div className={"flex flex-col gap-3"}>
            {children}
        </div>
    )
}
function FormInput({children}: {children: React.ReactNode}) {
    return (
        <div className={"flex flex-col gap-1"}>
            {children}
        </div>
    )
}

function ValidationError({children}: {children: React.ReactNode}) {
    return (
        <span className={"text-red-500 px-1 flex items-center gap-1"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
            {children}
        </span>
    )
}
export default function ContactForm() {
    const {
        register,
        control,
        formState: { errors },
    } = useForm<Inputs>()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [sent, setSent] = useState(false);

    if (sent) {
        return (
            <Alert severity={"success"}>
                Thank you, your comments have been sent to our team.
            </Alert>
        )
    } else {
        return (
            <Form
                action={"/api/contact"}
                onSubmit={() => setLoading(true)}
                onSuccess={() => {
                    setSent(true);
                    setLoading(false)
                }}
                onError={() => {
                    setError(true);
                    setLoading(false);
                }}
                control={control}
                className={`${loading ? 'opacity-75' : ''}`}
            >
                {error &&
                    <Alert severity={"error"} className={"mb-3"}>
                        There was a problem sending your comments. Please try again later or
                        contact us via <Link href={"mailto:help@waypoint3.com"} className={"text-red-500"}>help@waypoint3.com</Link>
                    </Alert>
                }
                <InputGroup>
                    <FormInput>
                        <TextField {...register("name", {required: true})} label={"Name"} aria-invalid={errors.name ? "true" : "false"} />
                        {errors.name && <ValidationError>Your name is required</ValidationError>}
                    </FormInput>
                    <FormInput>
                        <TextField type={"email"} {...register("emailAddress", {required: true})} label={"Email address"} aria-invalid={errors.emailAddress ? "true" : "false"} />
                        {errors.emailAddress && <ValidationError>Your email address is required</ValidationError>}
                    </FormInput>
                    <FormInput>
                        <TextField {...register("comments", {required: true})} label={"Your comments"} multiline rows={4}  aria-invalid={errors.comments ? "true" : "false"}/>
                        {errors.comments && <ValidationError>Please provide some comments</ValidationError>}
                    </FormInput>
                    <Button variant={"contained"} type={"submit"}>
                        {loading ? (
                            <span className={"my-3"}>
                            <BarLoader color={"white"}/>
                        </span>
                        ) : (
                            <>Submit</>
                        )}
                    </Button>
                </InputGroup>
            </Form>
        )
    }
}
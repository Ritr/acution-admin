"use client";
import {
    useMutation
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import Form from "../ui/form";
export default function Page() {
    const mutation = useMutation({
        mutationFn: (data) => {
            return fetch("/api/member", {
                method: "POST",
                body: JSON.stringify(data),
            });
        },
    });
    const handleFinishUpload = (e) => {
        console.log(e);
    }
    const updateFiles = (e) => {
        console.log(e);
        setFiles(e);
    }
    const removeFile = (e) => {
        console.log(e);
    }
    const [files, setFiles] = useState([]);

    const handleSubmit = async (event) => {

        // mutation.mutate({
        //     email,
        //     countryAndRegion,
        //     code,
        //     phone,
        //     englishName,
        //     englishSurname,
        //     chineseName,
        //     chineseSurname,
        //     password,
        //     status,
        //     promotion: promotion === "1" ? true : false,
        //     reasonForBanning
        // });
    };
    useEffect(() => {
        if (mutation.isSuccess) {
            mutation.data.json().then((res) => {
                toast.success(res.msg);
            });
        }
        if (mutation.isError) {
            mutation.data.json().then((res) => {
                toast.error(res.error);
            });
        }
    }, [mutation.isSuccess, mutation.isError, mutation.data]);
    return (
        <div>
            <ToastContainer autoClose={2000} position="top-center" />
            <Form></Form>
        </div>
    )
}
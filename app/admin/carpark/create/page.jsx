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
            return fetch("/api/carpark", {
                method: "POST",
                body: JSON.stringify(data),
            });
        },
    });
    const handleSubmit = async (params) => {
        mutation.mutate(params);
    };
    useEffect(() => {
        if (mutation.isSuccess) {
            mutation.data.json().then((res) => {
                if (res.error) {
                    toast.error(res.error);
                } else {
                    toast.success(res.msg);
                    setTimeout(() => {
                        window.location.href = "/admin/carpark"
                    }, 1000);
                }
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
            <Form onOk={handleSubmit} loading={mutation.isPending}></Form>
        </div>
    )
}
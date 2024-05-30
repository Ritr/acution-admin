"use client";
import {
    useMutation
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Form from "../ui/form";
export default function Page({ defaultProperty }) {
    const mutation = useMutation({
        mutationFn: (data) => {
            data._id = defaultProperty._id;
            return fetch("/api/carpark/" + defaultProperty._id, {
                method: "PUT",
                body: JSON.stringify(data)
            });
        },
    });
    const handleSubmit = (params) => {
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
            <Form onOk={handleSubmit} defaultProperty={defaultProperty} loading={mutation.isPending}></Form>
        </div>
    )
}
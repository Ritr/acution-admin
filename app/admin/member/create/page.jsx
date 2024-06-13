"use client";
import { useEffect } from "react";
import {
    useMutation
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import Form from "../ui/form";
const Page = () => {
    const mutation = useMutation({
        mutationFn: (data) => {
            return fetch("/api/member", {
                method: "POST",
                body: JSON.stringify(data)
            });
        },
    });
    useEffect(() => {
        if (mutation.isSuccess) {
            mutation.data.json().then((res) => {
                if (res.error) {
                    toast.error(res.error);
                    return;
                }
                toast.success(res.msg);
            });
        }
        if (mutation.isError) {
            mutation.data.json().then((res) => {
                toast.error(res.error);
            });
        }
    }, [mutation.isSuccess, mutation.isError, mutation.data]);
    const submit = (data) => {
        mutation.mutate(data);
    };
    return (
        <>
            <ToastContainer autoClose={2000} position="top-center" />
            <Form submit={submit} loading={mutation.isPending}></Form>
        </>

    );
};
export default Page;
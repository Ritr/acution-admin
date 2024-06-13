"use client";
import {
    useMutation
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import Form from "../ui/form";

export default function Page({ defaultMember }) {
    const mutation = useMutation({
        mutationFn: (data) => {
            data._id = defaultMember._id;
            return fetch("/api/member/" + defaultMember._id, {
                method: "PUT",
                body: JSON.stringify(data)
            });
        },
    });
    const submit = (data) => {
        mutation.mutate(data);
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
            <Form defaultMember={defaultMember} submit={submit} loading={mutation.isPending}></Form>
        </div>
    )
}
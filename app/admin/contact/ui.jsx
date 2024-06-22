"use client";
import { Button, Tabs, Tab } from "@nextui-org/react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";

import {
    useMutation
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Page = ({ contact }) => {
    console.log(contact);
    const { register, handleSubmit, watch } = useForm({
        defaultValues: contact
    });
    const formData = watch();
    const mutation = useMutation({
        mutationFn: async (data) => {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data)
            });
            return await res.json();
        },
    });
    const onSubmit = (data) => {
        mutation.mutate(data);
    }
    useEffect(() => {
        if (mutation.isSuccess) {
            if (mutation.data.error) {
                toast.error(mutation.data.error);
                return;
            }
            if (mutation.data.msg) {
                toast.success(mutation.data.msg);
                return;
            }
        }
        if (mutation.isError) {
            toast.error("Error");
        }
    }, [mutation.data]);
    return (
        <div>
            <ToastContainer autoClose={2000} position="top-center" />
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="pb-2">
                    <Label>Traditional chinese address</Label>
                    <Input required {...register("traditionalChineseAddress")}></Input>
                </div>
                <div className="pb-2">
                    <Label>Simplified chinese address</Label>
                    <Input required {...register("simplifiedChineseAddress")}></Input>
                </div>
                <div className="pb-2">
                    <Label>English chinese address</Label>
                    <Input required {...register("englishAddress")}></Input>
                </div>
                <div className="pb-2">
                    <Label>Phone</Label>
                    <Input required {...register("phone")}></Input>
                </div>
                <div className="pb-2">
                    <Label>Email</Label>
                    <Input type="email" required {...register("email")}></Input>
                </div>
                <Button isLoading={mutation.isPending} type="submit" color="primary" className="mt-10">Save</Button>
            </form>

        </div>
    )
}
export default Page;
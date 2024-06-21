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
const Page = ({ tagline }) => {
    const { register, handleSubmit, watch } = useForm({
        defaultValues: tagline
    });
    const formData = watch();
    const mutation = useMutation({
        mutationFn: async (data) => {
            const res = await fetch("/api/tagline", {
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
                <Tabs className="w-full [&>div]:w-full">
                    <Tab key="TraditionalChinese" title="Traditional Chinese">
                        <div className="pb-2">
                            <Label>Traditional chinese title</Label>
                            <Input required {...register("traditionalChineseTitle")}></Input>
                        </div>
                        <div className="pb-2">
                            <Label>Traditional chinese text</Label>
                            <Textarea rows="5" required {...register("traditionalChineseText")}></Textarea>
                        </div>
                    </Tab>
                    <Tab key="SimplifiedChinese" title="Simplified Chinese">
                        <div className="pb-2">
                            <Label>Simplified chinese title</Label>
                            <Input required {...register("traditionalChineseTitle")}></Input>
                        </div>
                        <div className="pb-2">
                            <Label>Simplified chinese text</Label>
                            <Textarea rows="5" required {...register("traditionalChineseText")}></Textarea>
                        </div>
                    </Tab>
                    <Tab key="English" title="English">
                        <div className="pb-2">
                            <Label>English title</Label>
                            <Input required {...register("englishTitle")}></Input>
                        </div>
                        <div className="pb-2">
                            <Label>English text</Label>
                            <Textarea rows="5" required {...register("englishText")}></Textarea>
                        </div>
                    </Tab>
                </Tabs>

                <Button isLoading={mutation.isPending} type="submit" color="primary" className="mt-10">Save</Button>
            </form>

        </div>
    )
}
export default Page;
"use client";
import Quill from "@/components/Quill";
import { Button, Tabs, Tab } from "@nextui-org/react";

import {
    useMutation
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Page = ({ policy }) => {
    const [traditionalChinesContent, setTraditionalChinesContent] = useState(policy.traditionalChinesContent);
    const [simplifiedChinesContent, setSimplifiedChinesContent] = useState(policy.simplifiedChinesContent);
    const [englishContent, setEnglishContent] = useState(policy.englishContent);
    const mutation = useMutation({
        mutationFn: async () => {
            const res = await fetch("/api/policy", {
                method: "POST",
                body: JSON.stringify({
                    traditionalChinesContent,
                    simplifiedChinesContent,
                    englishContent,
                })
            });
            return await res.json();
        },
    });
    const save = () => {
        if (!traditionalChinesContent) {
            toast.error("Traditional Chinese content is required");
            return;
        }
        if (!simplifiedChinesContent) {
            toast.error("Simplified Chinese content is required");
            return;
        }
        if (!englishContent) {
            toast.error("English content is required");
            return;
        }
        mutation.mutate();
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
            <Tabs className="w-full [&>div]:w-full">
                <Tab key="TraditionalChines" title="Traditional Chinese">
                    <Quill value={traditionalChinesContent} onChange={setTraditionalChinesContent} className="h-[400px]" />
                </Tab>
                <Tab key="SimplifiedChinese" title="Simplified Chinese">
                    <Quill value={simplifiedChinesContent} onChange={setSimplifiedChinesContent} className="h-[400px]" />
                </Tab>
                <Tab key="English" title="English">
                    <Quill value={englishContent} onChange={setEnglishContent} className="h-[400px]" />
                </Tab>
            </Tabs>
            <Button isLoading={mutation.isPending} onClick={save} color="primary" className="mt-10">Save</Button>

        </div>
    )
}
export default Page;
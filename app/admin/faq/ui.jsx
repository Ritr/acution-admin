"use client";
import Quill from "@/components/Quill";
import { Button, Tabs, Tab } from "@nextui-org/react";

import {
    useMutation
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Page = ({ faq }) => {
    const [traditionalChineseContent, setTraditionalChineseContent] = useState(faq.traditionalChineseContent);
    const [simplifiedChineseContent, setSimplifiedChinesContent] = useState(faq.simplifiedChineseContent);
    const [englishContent, setEnglishContent] = useState(faq.englishContent);
    const mutation = useMutation({
        mutationFn: async () => {
            const res = await fetch("/api/faq", {
                method: "POST",
                body: JSON.stringify({
                    traditionalChineseContent,
                    simplifiedChineseContent,
                    englishContent,
                })
            });
            return await res.json();
        },
    });
    const save = () => {
        if (!traditionalChineseContent || traditionalChineseContent === "<p><br></p>") {
            toast.error("Traditional Chinese content is required");
            return;
        }
        if (!simplifiedChineseContent || simplifiedChineseContent === "<p><br></p>") {
            toast.error("Simplified Chinese content is required");
            return;
        }
        if (!englishContent || englishContent === "<p><br></p>") {
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
                    <Quill value={traditionalChineseContent} onChange={setTraditionalChineseContent} className="h-[600px]" />
                </Tab>
                <Tab key="SimplifiedChinese" title="Simplified Chinese">
                    <Quill value={simplifiedChineseContent} onChange={setSimplifiedChinesContent} className="h-[600px]" />
                </Tab>
                <Tab key="English" title="English">
                    <Quill value={englishContent} onChange={setEnglishContent} className="h-[600px]" />
                </Tab>
            </Tabs>
            <Button isLoading={mutation.isPending} onClick={save} color="primary" className="mt-10">Save</Button>

        </div>
    )
}
export default Page;
"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    useMutation
} from "@tanstack/react-query";
import { Textarea } from "@/components/ui/textarea";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import codeList from "@/utils/code";

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
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const countryAndRegion = formData.get("countryAndRegion");
        let code = null;
        codeList.find((item) => {
            if (item.en === countryAndRegion) {
                code = item.code;
            }
        });
        const status = formData.get("status");
        const phone = formData.get("phone");
        const englishName = formData.get("englishName");
        const englishSurname = formData.get("englishSurname");
        const chineseName = formData.get("chineseName");
        const chineseSurname = formData.get("chineseSurname");
        const promotion = formData.get("promotion");
        const reasonForBanning = formData.get("reasonForBanning");
        mutation.mutate({
            email,
            countryAndRegion,
            code,
            phone,
            englishName,
            englishSurname,
            chineseName,
            chineseSurname,
            status,
            promotion,
            reasonForBanning
        });
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
            <form action="" onSubmit={handleSubmit}>
                <div className="pb-2">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" name="email" placeholder="Email" required defaultValue={defaultMember.email} />
                </div>

                <div className="pb-2">
                    <Label htmlFor="englishName">English name</Label>
                    <Input id="englishName" name="englishName" placeholder="English name" required defaultValue={defaultMember.englishName} />
                </div>
                <div className="pb-2">
                    <Label htmlFor="englishSurname">English surname</Label>
                    <Input id="englishSurname" name="englishSurname" placeholder="English surname" required defaultValue={defaultMember.englishSurname} />
                </div>
                <div className="pb-2">
                    <Label htmlFor="chineseName">Chinese name</Label>
                    <Input id="chineseName" name="chineseName" placeholder="Chinese name" required defaultValue={defaultMember.chineseName} />
                </div>
                <div className="pb-2">
                    <Label htmlFor="chineseSurname">Chinese surname</Label>
                    <Input id="chineseSurname" name="chineseSurname" placeholder="Chinese surname" required defaultValue={defaultMember.chineseSurname} />
                </div>
                <div className="pb-2">
                    <Label htmlFor="phone">Phone</Label>
                    <div className="flex gap-4">
                        <Select id="countryAndRegion" name="countryAndRegion" required defaultValue={defaultMember.countryAndRegion} >
                            <SelectTrigger>
                                <SelectValue placeholder="Select countryAndRegion code" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    codeList.map((item, index) => {
                                        return (
                                            <SelectItem key={index} value={item.en}>{item.en}{item.code}</SelectItem>
                                        )
                                    })
                                }
                            </SelectContent>
                        </Select>
                        <Input
                            id="phone"
                            name="phone"
                            placeholder=""
                            required
                            pattern="[0-9]*"
                            defaultValue={defaultMember.phone}
                        /> </div>
                </div>
                <div className="pb-2">
                    <Label htmlFor="promotion">Promotion recevial</Label>
                    <Select id="promotion" name="promotion" defaultValue={defaultMember.promotion}>
                        <SelectTrigger>
                            <SelectValue placeholder="Promotion recevial" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value={true}>yes</SelectItem>
                            <SelectItem value={false}>no</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="pb-2">
                    <Label htmlFor="status">Status</Label>
                    <Select id="status" name="status" required defaultValue={defaultMember.status}>
                        <SelectTrigger>
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Activated">Activated</SelectItem>
                            <SelectItem value="Deactivated">Deactivated</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="pb-2">
                    <Label htmlFor="reasonForBanning">Reason for banning</Label>
                    <Textarea id="reasonForBanning" name="reasonForBanning" placeholder="Reason for banning" defaultValue={defaultMember.reasonForBanning}></Textarea>
                </div>

                <div>
                    <Button className="w-full" type="submit" disabled={mutation.isPending} >Submit</Button>
                </div>
            </form>
        </div>
    )
}
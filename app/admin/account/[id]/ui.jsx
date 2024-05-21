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
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
export default function Page({ defaultAccount }) {
    console.log(defaultAccount);
    const mutation = useMutation({
        mutationFn: (data) => {
            data._id = defaultAccount._id;
            return fetch("/api/account/" + defaultAccount._id, {
                method: "PUT",
                body: JSON.stringify(data)
            });
        },
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get("email");
        const name = formData.get("name");
        const status = formData.get("status");
        const permissions = formData.get("permissions");
        mutation.mutate({
            email: email,
            name: name,
            status: status,
            permissions: permissions
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
                    <Input type="email" id="email" name="email" placeholder="Email" defaultValue={defaultAccount.email} required />
                </div>

                <div className="pb-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Name" required defaultValue={defaultAccount.name} />
                </div>
                <div className="pb-2">
                    <Label htmlFor="permissions">Permissions</Label>
                    <Select id="permissions" name="permissions" required defaultValue={defaultAccount.permissions}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select permissions" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="yes">yes</SelectItem>
                            <SelectItem value="no">no</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="pb-2">
                    <Label htmlFor="status">Status</Label>
                    <Select id="status" name="status" defaultValue={defaultAccount.status} required>
                        <SelectTrigger>
                            <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Activated">Activated</SelectItem>
                            <SelectItem value="Disabled">Disabled</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div>
                    <Button className="w-full" type="submit" disabled={mutation.isPending} >Submit</Button>
                </div>
            </form>
        </div>
    )
}
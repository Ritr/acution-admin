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
export default function Page() {
    const mutation = useMutation({
        mutationFn: (data) => {
            return fetch("/api/account", {
                method: "POST",
                body: JSON.stringify(data),
            });
        },
    });
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const password = formData.get("password");
        const password2 = formData.get("password2");
        const email = formData.get("email");
        const name = formData.get("name");
        const status = formData.get("status");
        const permissions = formData.get("permissions");
        if (password !== password2) {
            toast.warn("密碼不一致");
            return;
        }
        mutation.mutate({
            email: email,
            name: name,
            password: password,
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
                    <Input type="email" id="email" name="email" placeholder="Email" required />
                </div>

                <div className="pb-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Name" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" name="password" placeholder="Password" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="password2">Confirm Password</Label>
                    <Input id="password2" name="password2" placeholder="Password" required />
                </div>
                <div className="pb-2">
                    <Label htmlFor="permissions">Permissions</Label>
                    <Select id="permissions" name="permissions" required>
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
                    <Select id="status" name="status" defaultValue="Activated" required>
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
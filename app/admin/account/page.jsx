"use client";
import { useEffect, useState } from "react";
import {
    Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Spinner
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import Link from "next/link";
import {
    useMutation
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
export default function Page() {
    const [list, setList] = useState([]);
    const mutation = useMutation({
        mutationFn: () => {
            return fetch("/api/account");
        },
    });
    const removeMutation = useMutation({
        mutationFn: (id) => {
            return fetch("/api/account/" + id, {
                method: "DELETE"
            });
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            mutation.data.json().then((res) => {
                setList(res);
            });
        }
        if (mutation.isError) {
            mutation.data.json().then((res) => {
                toast.error(res.error);
            });
        }
    }, [mutation.isSuccess, mutation.isError, mutation.data]);

    useEffect(() => {
        if (removeMutation.isSuccess) {
            removeMutation.data.json().then((res) => {
                toast.success(res.msg);
            });
            mutation.mutate();
        }
        if (removeMutation.isError) {
            removeMutation.data.json().then((res) => {
                toast.error(res.error);
            });
        }
    }, [removeMutation.isSuccess, removeMutation.isError]);
    useEffect(() => {
        mutation.mutate();
    }, []);
    return (
        <div>
            <ToastContainer autoClose={2000} position="top-center" />
            <Link asChild href="/admin/account/create">
                <Button variant="outline">Create</Button>
            </Link>
            <div className="border rounded-md mt-2">
                <Table>
                    <TableHeader>
                        <TableColumn>
                            Email
                        </TableColumn>
                        <TableColumn>
                            Name
                        </TableColumn>
                        <TableColumn>
                            Permissions
                        </TableColumn>
                        <TableColumn>
                            Status
                        </TableColumn>
                        <TableColumn>
                            Actions
                        </TableColumn>
                    </TableHeader>
                    <TableBody className="relative min-h-24" loadingContent={<Spinner label="Loading..." />} isLoading={(mutation.isPending || removeMutation.isPending)}>
                        {list.map((account) => (
                            <TableRow key={account._id}>
                                <TableCell>{account.email}</TableCell>
                                <TableCell>{account.name}</TableCell>
                                <TableCell>{account.permissions}</TableCell>
                                <TableCell>{account.status}</TableCell>
                                <TableCell>
                                    <Button variant="outline" className="mr-2 py-1 px-2 text-xs h-7">
                                        <a href={"/admin/account/" + account._id} className="w-full">Edit</a>
                                    </Button>
                                    <AlertDialog>
                                        <AlertDialogTrigger>
                                            <Button variant="destructive" className="py-1 px-2 text-xs h-7">
                                                Delete
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Confirms whether to delete.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                <AlertDialogAction onClick={() => { removeMutation.mutate(account._id) }}>Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
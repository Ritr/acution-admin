"use client";
import { useEffect, useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Pagination, Spinner } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
    useMutation
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
export default function Page() {
    const [list, setList] = useState([]);
    // const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const mutation = useMutation({
        mutationFn: (currentPage = 1) => {
            return fetch("/api/member?page=" + currentPage);
        },
    });

    useEffect(() => {
        if (mutation.isSuccess) {
            mutation.data.json().then((res) => {
                setList(res.users);
                const totalPages = Math.ceil(res.totalCount / 10);
                setTotalPages(totalPages);
            });
        }
        if (mutation.isError) {
            mutation.data.json().then((res) => {
                toast.error(res.error);
            });
        }
    }, [mutation.isSuccess, mutation.isError, mutation.data]);

    useEffect(() => {
        mutation.mutate(currentPage);
    }, [currentPage]);
    return (
        <div>
            <ToastContainer autoClose={2000} position="top-center" />
            <Link asChild href="/admin/member/create">
                <Button variant="outline">Create</Button>
            </Link>
            <div>
                <Table className="mt-2" radius="sm">
                    <TableHeader>
                        {/* <TableColumn>
                                ID
                            </TableColumn> */}
                        <TableColumn>
                            Email
                        </TableColumn>
                        <TableColumn>
                            English name
                        </TableColumn>
                        <TableColumn>
                            English surname
                        </TableColumn>
                        <TableColumn>
                            Chinese name
                        </TableColumn>
                        <TableColumn>
                            Chinese surname
                        </TableColumn>
                        <TableColumn>
                            Phone
                        </TableColumn>
                        <TableColumn>
                            Code
                        </TableColumn>
                        <TableColumn>
                            Status
                        </TableColumn>
                        <TableColumn>
                            Reason for banning
                        </TableColumn>
                        <TableColumn>
                            Promotion recevial
                        </TableColumn>
                        <TableColumn>
                            Financial proof
                        </TableColumn>
                        <TableColumn>
                            Actions
                        </TableColumn>
                    </TableHeader>
                    <TableBody className="relative min-h-24" loadingContent={<Spinner label="Loading..." />} isLoading={mutation.isPending}>
                        {list.map((account) => (
                            <TableRow key={account._id}>
                                <TableCell>{account.email}</TableCell>
                                <TableCell>{account.englishName}</TableCell>
                                <TableCell>{account.englishSurname}</TableCell>
                                <TableCell>{account.chineseName}</TableCell>
                                <TableCell>{account.chineseSurname}</TableCell>
                                <TableCell>{account.phone}</TableCell>
                                <TableCell>{account.status}</TableCell>
                                <TableCell>{account.reasonForBanning}</TableCell>
                                <TableCell>{account.FinancialProof}</TableCell>
                                <TableCell>{account.promotion ? "yes" : "no"}</TableCell>
                                <TableCell>{account.code}</TableCell>
                                <TableCell>
                                    <Button variant="outline" className="mr-2 py-1 px-2 text-xs h-7">
                                        <a href={"/admin/member/" + account._id} className="w-full">Edit</a>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Pagination className="mt-4" total={totalPages} initialPage={1} radius="sm" onChange={(page) => { setCurrentPage(page) }} />
            </div>
        </div>
    )
}
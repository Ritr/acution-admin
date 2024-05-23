"use client";
import { useEffect, useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Pagination, Spinner } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
    useMutation
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
export default function Page() {
    const [list, setList] = useState([]);
    // const [totalCount, setTotalCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortDescriptor, setSortDescriptor] = useState([]);
    const mutation = useMutation({
        mutationFn: () => {
            return fetch("/api/member?page=" + currentPage + "&searchQuery=" + searchQuery);
        },
    });
    const search = () => {
        if (currentPage === 1) {
            mutation.mutate();
        } else {
            setCurrentPage(1);
        }
    }
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
        mutation.mutate();
    }, [currentPage]);
    useEffect(() => {
        console.log("sortDescriptor", sortDescriptor);
    }, [ sortDescriptor]);
    return (
        <div>
            <ToastContainer autoClose={2000} position="top-center" />
            <div className="flex  justify-between">
                <Link asChild href="/admin/member/create">
                    <Button>Create</Button>
                </Link>
                <div className="flex gap-4">
                    <Input className="w-48" onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }} placeholder="Search"></Input>
                    <Button onClick={search}>Search</Button>
                </div>
            </div>

            <div>
                <Table className="mt-2" radius="sm" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                    <TableHeader>
                        {/* <TableColumn>
                                ID
                            </TableColumn> */}
                        <TableColumn allowsSorting key="email">
                            Email
                        </TableColumn>
                        <TableColumn allowsSorting key="englishName">
                            English name
                        </TableColumn>
                        <TableColumn allowsSorting key="englishSurname">
                            English surname
                        </TableColumn>
                        <TableColumn allowsSorting key="chineseName">
                            Chinese name
                        </TableColumn>
                        <TableColumn allowsSorting key="chineseSurname">
                            Chinese surname
                        </TableColumn>
                        <TableColumn allowsSorting key="phone">
                            Phone
                        </TableColumn>
                        <TableColumn allowsSorting key="code">
                            Code
                        </TableColumn>
                        <TableColumn allowsSorting key="status">
                            Status
                        </TableColumn>
                        <TableColumn allowsSorting>
                            Reason for banning
                        </TableColumn>
                        <TableColumn allowsSorting key="promotion">
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
                {
                    totalPages > 0 &&
                    <Pagination className="mt-4" total={totalPages} page={currentPage} radius="sm" onChange={(page) => { setCurrentPage(page) }} />
                }
            </div>
        </div >
    )
}
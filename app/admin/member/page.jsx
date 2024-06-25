"use client";
import { useEffect, useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Pagination, Spinner, Button, Chip } from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
    useMutation
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import dayjs from "dayjs";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
export default function Page() {
    const [list, setList] = useState([]);
    // const [totalCount, setTotalCount] = useState(0);
    const [idCardStatus, setIdCardStatus] = useState(null);
    const [addressProofStatus, setAddressProofStatus] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortDescriptor, setSortDescriptor] = useState();
    async function download() {
        try {
            const response = await fetch("/api/member/download");
            const csvData = await response.text();

            const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

            // 创建一个临时链接并点击它来下载文件
            const downloadLink = document.createElement("a");
            downloadLink.setAttribute("href", URL.createObjectURL(blob));
            downloadLink.setAttribute("download", "members" + dayjs().format("YYYYMMDDHHmmss") + ".csv");
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.error("Error downloading CSV:", error);
        }
    }
    const mutation = useMutation({
        mutationFn: () => {
            let url = `/api/member?page=${currentPage}&searchQuery=${searchQuery}`;
            if (idCardStatus) {
                url += `&idCardStatus=${idCardStatus}`;
            }
            if (addressProofStatus) {
                url += `&addressProofStatus=${addressProofStatus}`;
            }
            if (sortDescriptor) {
                url += `&sortField=${sortDescriptor.column}&sortOrder=${sortDescriptor.direction === "ascending" ? 1 : -1}`;
            }
            return fetch(url);
        },
    });
    const search = () => {
        if (currentPage === 1) {
            mutation.mutate();
        } else {
            setCurrentPage(1);
        }
    }
    const getFileNameFromUrl = (url) => {
        const pathParts = url.split("/");
        return pathParts.pop();
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
    }, [currentPage, sortDescriptor]);
    return (
        <div>
            <ToastContainer autoClose={2000} position="top-center" />
            <div className="flex  justify-between">
                <Link asChild href="/admin/member/create">
                    <Button color="primary">New member</Button>
                </Link>
                <div className="flex gap-2">
                    <div className="w-60">
                        <Select onValueChange={setIdCardStatus}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select idCard status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={null}>All</SelectItem>
                                <SelectItem value="0">To be submitted</SelectItem>
                                <SelectItem value="1">To be Approved</SelectItem>
                                <SelectItem value="2">Approved</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="w-60">
                        <Select onValueChange={setAddressProofStatus}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select address proof status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={null}>All</SelectItem>
                                <SelectItem value="0">To be submitted</SelectItem>
                                <SelectItem value="1">To be Approved</SelectItem>
                                <SelectItem value="2">Approved</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <Input className="w-48" onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }} placeholder="Search"></Input>
                    <Button color="primary" onClick={search}>Search</Button>
                    <Button className="max-w-40" color="primary" onClick={download}>Download as CSV</Button>
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
                        <TableColumn allowsSorting key="promotion">
                            Promotion recevial
                        </TableColumn>
                        <TableColumn>
                            idCard status
                        </TableColumn>
                        <TableColumn>
                            Address proof status
                        </TableColumn>
                        <TableColumn allowsSorting key="status">
                            Status
                        </TableColumn>
                        <TableColumn>
                            Reason for banning
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
                                <TableCell>{account.code}</TableCell>
                                <TableCell>{account.promotion ? "Yes" : "No"}</TableCell>
                                <TableCell>
                                    {
                                        account.idCardStatus === "0" ?
                                            <Chip radius="sm" color="danger">To be submit</Chip> :
                                            account.idCardStatus === "1" ?
                                                <Chip radius="sm" color="warning">To be Approved</Chip> :
                                                <Chip radius="sm" color="success">Approved</Chip>
                                    }
                                </TableCell>
                                <TableCell>
                                    {
                                        account.addressProofStatus === "0" ?
                                            <Chip radius="sm" color="danger">To be submit</Chip> :
                                            account.addressProofStatus === "1" ?
                                                <Chip radius="sm" color="warning">To be Approved</Chip> :
                                                <Chip radius="sm" color="success">Approved</Chip>
                                    }
                                </TableCell>
                                <TableCell>
                                    {
                                        account.status === "0" ?
                                            <Chip radius="sm" color="danger">Deactivated</Chip> :
                                            <Chip radius="sm" color="success">Activated</Chip>
                                    }
                                </TableCell>
                                <TableCell>{account.reasonForBanning}</TableCell>
                                <TableCell>
                                    <Button asChild color="primary" variant="bordered" className="mr-2 py-1 px-2 text-xs h-7">
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
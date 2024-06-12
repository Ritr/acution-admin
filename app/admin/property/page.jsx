"use client";
import { useEffect, useState } from "react";
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell, Pagination, Spinner, Chip } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
    useMutation
} from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import dayjs from "dayjs";

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
export default function Page() {
    const [list, setList] = useState([]);
    // const [totalCount, setTotalCount] = useState(0);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortDescriptor, setSortDescriptor] = useState();
    async function download() {
        try {
            const response = await fetch("/api/property/download");
            const csvData = await response.text();

            const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

            // 创建一个临时链接并点击它来下载文件
            const downloadLink = document.createElement("a");
            downloadLink.setAttribute("href", URL.createObjectURL(blob));
            downloadLink.setAttribute("download", "properties" + dayjs().format("YYYYMMDDHHmmss") + ".csv");
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        } catch (error) {
            console.error("Error downloading CSV:", error);
        }
    }
    const mutation = useMutation({
        mutationFn: () => {
            let url = `/api/property?page=${currentPage}&searchQuery=${searchQuery}`;
            if (sortDescriptor) {
                url += `&sortField=${sortDescriptor.column}&sortOrder=${sortDescriptor.direction === "ascending" ? 1 : -1}`;
            }
            return fetch(url);
        },
    });
    const removeMutation = useMutation({
        mutationFn: (id) => {
            return fetch("/api/property/" + id, {
                method: "DELETE"
            });
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
                if (res.error) {
                    toast.error(res.error);
                    return;
                }
                setList(res.properties);
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
        if (removeMutation.isSuccess) {
            removeMutation.data.json().then((res) => {
                if (res.error) {
                    toast.error(res.error);
                    return;
                }
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
    }, [currentPage, sortDescriptor]);
    return (
        <div>
            <ToastContainer autoClose={2000} position="top-center" />
            <div className="flex  justify-between">
                <Link asChild href="/admin/property/create">
                    <Button>New Property</Button>
                </Link>
                <div className="flex gap-4">
                    <Input className="w-48" onChange={(e) => {
                        setSearchQuery(e.target.value);
                    }} placeholder="Search"></Input>
                    <Button onClick={search}>Search</Button>
                    <Button onClick={download}>Download as CSV</Button>
                </div>
            </div>

            <div>
                {/* ．列表欄位：ID(1,2,3...)，名字，地區1，地區2，地區3，地址、樓盤/車位、底價，拍賣開始時間，完結時間、現價、起拍價、狀態 */}
                <Table className="mt-2" radius="sm" sortDescriptor={sortDescriptor} onSortChange={setSortDescriptor}>
                    <TableHeader>
                        {/* <TableColumn>
                                ID
                            </TableColumn> */}
                        <TableColumn allowsSorting key="englishTitle">
                            Title
                        </TableColumn>
                        <TableColumn allowsSorting key="englishAddress">
                            Address
                        </TableColumn>
                        <TableColumn allowsSorting key="region">
                            region
                        </TableColumn>
                        <TableColumn allowsSorting key="startDateTime">
                            StartDateTime
                        </TableColumn>
                        <TableColumn allowsSorting key="completionDateTime">
                            CompletionDateTime
                        </TableColumn>
                        <TableColumn allowsSorting key="reservePrice">
                            Reserve Price
                        </TableColumn>
                        <TableColumn allowsSorting key="chineseName">
                            Current Price
                        </TableColumn>
                        <TableColumn allowsSorting key="startingPrice">
                            StartingPrice
                        </TableColumn>
                        <TableColumn allowsSorting key="phone">
                            Status
                        </TableColumn>
                        <TableColumn>
                            Actions
                        </TableColumn>
                    </TableHeader>
                    <TableBody className="relative min-h-24" loadingContent={<Spinner label="Loading..." />} isLoading={mutation.isPending}>
                        {list.map((property) => (
                            <TableRow key={property._id}>
                                <TableCell>{property.englishTitle}</TableCell>
                                <TableCell>{property.englishAddress}</TableCell>
                                <TableCell>{property.regionDes.englishRegion.split("---").pop()}</TableCell>
                                <TableCell>{dayjs(property.startDateTime).format("YYYY-MM-DD")}</TableCell>
                                <TableCell>{dayjs(property.completionDateTime).format("YYYY-MM-DD")}</TableCell>
                                <TableCell>{property.reservePrice}</TableCell>
                                <TableCell>{property.currentPrice}</TableCell>
                                <TableCell>{property.startingPrice.toLocaleString()}</TableCell>
                                <TableCell>
                                    {/* AboutToStart InProgress Completed Aborted Cancelled */}
                                    {
                                        property.status == "AboutToStart" ?
                                            <Chip radius="sm" color="warning">{property.status}</Chip> :
                                            property.status == "InProgress" ?
                                                <Chip radius="sm" color="success">{property.status}</Chip> :
                                                property.status == "Completed" ?
                                                    <Chip radius="sm" color="primary">{property.status}</Chip> :
                                                    property.status == "Aborted" ?
                                                        <Chip radius="sm" color="danger">{property.status}</Chip> :
                                                        <Chip radius="sm" color="success">{property.status}</Chip>
                                    }
                                </TableCell>
                                <TableCell>
                                    <Button variant="outline" className="mr-2 py-1 px-2 text-xs h-7">
                                        <a href={"/admin/property/" + property._id} className="w-full">Edit</a>
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
                                                <AlertDialogAction onClick={() => { removeMutation.mutate(property._id) }}>Continue</AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
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
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const UserPagination = ({ totalCount = 99, currentPage, onPageChange, limit = 10 }) => {
    const [activePage, setActivePage] = useState(currentPage);
    const handlePageChange = (page) => {
        setActivePage(page);
        onPageChange(page);
    };
    const totalPages = Array(Math.ceil(totalCount / limit)).fill(0);
    return (
        <Pagination className="mt-4">
            <PaginationContent>
                {
                    totalPages.map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink className="cursor-pointer">{index + 1}</PaginationLink>
                        </PaginationItem>
                    ))
                }
            </PaginationContent>
        </Pagination>
    )
}
export default UserPagination;
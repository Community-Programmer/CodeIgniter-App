import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Column<T> = {
    key: keyof T;
    title: string;
};

interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
    title: string;
}

function DataTable<T extends Record<string, any>>({ columns, data, title }: DataTableProps<T>) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(10);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [sortConfig, setSortConfig] = useState<{ key: keyof T | null; direction: "asc" | "desc" }>({ key: null, direction: "asc" });

    // Filter data based on search term
    const filteredData = data.filter((item: T) =>
        Object.values(item).some(
            (value) =>
                value && value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Sort data
    const sortedData = [...filteredData].sort((a: T, b: T) => {
        if (!sortConfig.key) return 0;
        const key = sortConfig.key;
        if (a[key] < b[key]) {
            return sortConfig.direction === "asc" ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return sortConfig.direction === "asc" ? 1 : -1;
        }
        return 0;
    });

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const handleSort = (key: keyof T) => {
        let direction: "asc" | "desc" = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>

            <div className="mb-4">
                <Input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-100">
                            {columns.map((column: Column<T>) => (
                                <th
                                    key={String(column.key)}
                                    onClick={() => handleSort(column.key)}
                                    className="cursor-pointer px-4 py-2 font-medium text-gray-700"
                                >
                                    {column.title}
                                    {sortConfig.key === column.key && (
                                        <span>{sortConfig.direction === "asc" ? " ↑" : " ↓"}</span>
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems.length > 0 ? (
                            currentItems.map((item, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                                >
                                    {columns.map((column: Column<T>) => (
                                        <td key={String(column.key)} className="px-4 py-2">
                                            {item[column.key]}
                                        </td>
                                    ))}
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan={columns.length}
                                    className="text-center px-4 py-6 text-gray-500"
                                >
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {totalPages > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => paginate(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                        <Button
                            key={number}
                            size="sm"
                            variant={currentPage === number ? "default" : "outline"}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </Button>
                    ))}

                    <Button
                        size="sm"
                        variant="outline"
                        onClick={() => paginate(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </div>
            )}
        </div>
    );
};

export default DataTable;

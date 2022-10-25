import React from "react";
import {
  Paper,
  Table as MuiTable,
  TableBody,
  TableCell as MuiTableCell,
  TableHead,
  TableRow,
  TableContainer,
} from "@mui/material";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { FC } from "react";
import { styled } from "@mui/material/styles";

const TableCell = styled(MuiTableCell)({
  padding: "3px",
  border: "0px",
});

interface TableProps {
  data: any[];
  columns: ColumnDef<any>[];
}

export const SmallTable: FC<TableProps> = ({ data, columns }) => {
  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <TableContainer
      component={Paper}
      className="w-full rounded-b-lg max-h-[105px] min-h-[105px]"
    >
      <MuiTable
        sx={{
          width: "100%",
          margin: "auto",
          borderRadius: "20px",
        }}
        stickyHeader
        aria-label="simple table"
      >
        <TableHead className="border-b border-t p-0">
          {getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableCell
                  key={header.id}
                  className="text-[9px] text-gray-500 p-0"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {getRowModel().rows.map((row, index) => (
            <TableRow
              key={row.id}
              //   className={`${index % 2 ? "bg-gray-100" : "white"}`}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell className="text-[8px] text-gray-600" key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

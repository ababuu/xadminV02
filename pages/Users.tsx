import React from "react";
import Shared from "../components/Shared";
import { Table } from "../components/Table";

type Props = {};
import { Chip } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import DeleteIcon from "@mui/icons-material/Delete";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

export const columns: ColumnDef<any, any>[] = [
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "location",
    header: "LOCATION",
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: (row: any) => {
      return (
        <Chip
          label={row.getValue()}
          size="small"
          // color={row.getValue() === "active" ? "primary" : "default"}
          className={`${
            row.getValue() === "active"
              ? "bg-green-100 text-green-500"
              : row.getValue() === "pending"
              ? "bg-orange-100 text-orange-600"
              : "bg-red-100 text-red-500"
          } h-fit`}
        />
      );
    },
  },
  {
    header: "ACTIONS",
    cell: (row: any) => {
      return (
        <div className="flex gap-2">
          <DeleteIcon className="text-[25px] text-red-400 rounded-full p-1 hover:bg-red-200 cursor-pointer" />
          <EditRoundedIcon className="text-[25px] rounded-full p-1 hover:bg-gray-200 cursor-pointer" />
        </div>
      );
    },
  },
];
const data = [
  {
    name: "John Doe",
    location: "USA",
    email: "john.doe@gmal.com",
    status: "active",
  },
  {
    name: "John Doe",
    location: "MEXICO",
    email: "john.doe@gmal.com",
    status: "pending",
  },
  {
    name: "John Doe",
    location: "CANADA",
    email: "john.doe@gmal.com",
    status: "inactive",
  },
];

export default function Users({}: Props) {
  return (
    <>
      <Shared tab="users">
        <div className="w-[95%] m-auto rounded-lg">
          <div className="flex gap-2 mb-6">
            <div className="bg-green-100 p-1 pl-4 pr-4 rounded-lg text-green-500 text-sm">
              All
            </div>
            <div className="p-1 pl-4 pr-4 rounded-lg text-sm">Verified</div>
          </div>
          <Table data={data} columns={columns} />
        </div>
      </Shared>
    </>
  );
}

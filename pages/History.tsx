import React from "react";
import Shared from "../components/Shared";
import { Table } from "../components/Table";
import { Chip } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import Tooltip from "@mui/material/Tooltip";

type Props = {};

export const columns: ColumnDef<any, any>[] = [
  {
    accessorKey: "date",
    header: "DATE",
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
  },
  {
    accessorKey: "asset",
    header: "ASSET",
  },
  {
    accessorKey: "txid",
    header: "TXID",
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: (row: any) => (
      <>
        {row.getValue() !== "pending" ? (
          <Chip
            label={row.getValue()}
            size="small"
            className={`${
              row.getValue() === "succeeded"
                ? "bg-green-100 text-green-500"
                : "bg-red-100 text-red-500"
            } h-fit`}
          />
        ) : (
          <Tooltip title="Deposit is going to expire in ~28mins">
            <Chip
              label={row.getValue()}
              size="small"
              className="bg-orange-100 text-orange-500 h-fit"
            />
          </Tooltip>
        )}
      </>
    ),
  },
];

const data = [
  {
    date: "18-08 12:34:00",
    id: 23,
    amount: 4030.03,
    asset: "ETH",
    txid: "4373847873a99w",
    status: "succeeded",
  },
  {
    date: "18-08 12:34:00",
    id: 23,
    amount: 4030.03,
    asset: "ETH",
    txid: "4373847873a99w",
    status: "failed",
  },
  {
    date: "18-08 12:34:00",
    id: 23,
    amount: 4030.03,
    asset: "ETH",
    txid: "4373847873a99w",
    status: "succeeded",
  },
  {
    date: "18-08 12:34:00",
    id: 23,
    amount: 4030.03,
    asset: "ETH",
    txid: "4373847873a99w",
    status: "pending",
  },
  {
    date: "18-08 12:34:00",
    id: 23,
    amount: 4030.03,
    asset: "ETH",
    txid: "4373847873a99w",
    status: "expired",
  },
];

export default function History({}: Props) {
  return (
    <Shared tab="history">
      {/* Main Container */}
      <div className="w-full max-w-5xl mx-auto rounded-lg p-4">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <div className="bg-green-100 px-4 py-1 rounded-lg text-green-500 text-xs md:text-sm">
            Deposit
          </div>
          <div className="px-4 py-1 rounded-lg text-xs md:text-sm hover:bg-green-100 hover:text-green-500 cursor-pointer">
            Withdraw
          </div>
        </div>

        {/* Table Wrapper for Responsive Scrolling */}
        <div className="overflow-x-auto">
          <Table data={data} columns={columns} />
        </div>
      </div>
    </Shared>
  );
}

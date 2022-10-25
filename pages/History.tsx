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
    cell: (row: any) => {
      return (
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
            <Tooltip title="Desposite is going to expire in ~28mins">
              <Chip
                label={row.getValue()}
                size="small"
                className="bg-orange-100 text-orange-500 h-fit"
              />
            </Tooltip>
          )}
        </>
      );
    },
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
    <>
      <Shared tab="history">
        <div className="w-[95%] m-auto rounded-lg">
          <div className="flex gap-2 mb-6">
            <div className="bg-green-100 p-1 pl-4 pr-4 rounded-lg text-green-500 text-sm">
              Deposite
            </div>
            <div className="p-1 pl-4 pr-4 rounded-lg text-sm">Withdraw</div>
          </div>
          <Table data={data} columns={columns} />
        </div>
      </Shared>
    </>
  );
}

import React from "react";
import Shared from "../components/Shared";
import { Table } from "../components/Table";
import { Chip } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";
import CloseIcon from "@mui/icons-material/Close";

type Props = {};
const columns: ColumnDef<any, any>[] = [
  {
    accessorKey: "date",
    header: "DATE",
  },
  {
    accessorKey: "filled",
    header: "FILLED",
  },
  {
    accessorKey: "market",
    header: "MARKET",
  },
  {
    accessorKey: "side",
    header: "SIDE",
    cell: (row: any) => {
      return (
        <Chip
          label={row.getValue()}
          size="small"
          className={`${
            row.getValue() === "Buy"
              ? "bg-green-100 text-green-500"
              : "bg-red-100 text-red-500"
          } h-fit`}
        />
      );
    },
  },
  {
    accessorKey: "price",
    header: "PRICE",
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
  },
  {
    accessorKey: "value",
    header: "VALUE",
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
            row.getValue() === "open"
              ? "bg-green-100 text-green-500"
              : row.getValue() === "failed"
              ? "bg-orange-100 text-orange-500"
              : "bg-red-100 text-red-500"
          } h-fit`}
        />
      );
    },
  },
  {
    header: "CANCEL ALL",
    cell: (row: any) => {
      return (
        <p className="text-red-500 w-fit cursor-pointer hover:bg-red-200 rounded-lg">
          Cancel <CloseIcon className="text-sm" />
        </p>
      );
    },
  },
];

const data = [
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Buy",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "open",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Sell",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "canceled",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Buy",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "open",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Sell",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "failed",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Buy",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "open",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Sell",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "canceled",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Buy",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "open",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Sell",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "failed",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Buy",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "open",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Sell",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "canceled",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Buy",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "open",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Sell",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "failed",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Buy",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "open",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Sell",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "canceled",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Buy",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "open",
    cancel: "cancel",
  },
  {
    date: "18-08 12:34:00",
    filled: "0%",
    market: "ETH/USDT",
    side: "Sell",
    price: 3433.3,
    amount: 4030.4,
    value: 4030.4,
    status: "failed",
    cancel: "cancel",
  },
];
export default function Trade({}: Props) {
  return (
    <>
      <Shared tab="trade">
        <div className="w-[95%] m-auto rounded-lg">
          <div className="flex gap-2 mb-6">
            <div className="bg-green-100 p-1 pl-4 pr-4 rounded-lg text-green-500 text-sm">
              All
            </div>
            <div className="p-1 pl-4 pr-4 rounded-lg text-sm">Open</div>
          </div>
          <Table data={data} columns={columns} />
        </div>
      </Shared>
    </>
  );
}

import React from "react";
import Shared from "../components/Shared";
import { Table } from "../components/Table";

type Props = {};
import { Chip } from "@mui/material";
import { ColumnDef } from "@tanstack/react-table";

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
    cell: (row: any) => (
      <Chip
        label={row.getValue()}
        size="small"
        className={`${
          row.getValue() === "Buy"
            ? "bg-green-100 text-green-500"
            : "bg-red-100 text-red-500"
        } h-fit`}
      />
    ),
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
    cell: (row: any) => (
      <Chip
        label={row.getValue()}
        size="small"
        className={`${
          row.getValue() === "open"
            ? "bg-green-100 text-green-500"
            : row.getValue() === "failed"
            ? "bg-orange-100 text-orange-500"
            : "bg-red-100 text-red-500"
        } h-fit`}
      />
    ),
  },
  {
    header: "CANCEL ALL",
    cell: () => (
      <p className="text-red-500 w-fit cursor-pointer hover:bg-red-200 rounded-lg">
        Cancel
      </p>
    ),
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
];

export default function Liquidity({}: Props) {
  return (
    <Shared tab="users">
      <div className="w-[95%] m-auto rounded-lg">
        {/* Responsive Filter Buttons */}
        <div className="flex justify-center md:justify-end lg:justify-end mb-2">
          <div className="flex gap-2 overflow-x-auto md:overflow-visible whitespace-nowrap">
            {["All", "1D", "1W", "1M", "1Y"].map((filter, idx) => (
              <div
                key={idx}
                className="border rounded-xl w-fit p-1 px-4 text-xs sm:text-sm md:text-base bg-[#14EA83] text-white hover:bg-[#14EA83] hover:text-white cursor-pointer"
              >
                {filter}
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs md:text-sm mb-2">Transactions</p>

        {/* Status Tags */}
        <div className="flex gap-2 mb-4 flex-wrap">
          <div className="bg-green-100 p-1 px-4 rounded-lg text-green-500 text-xs sm:text-sm">
            Successful
          </div>
          <div className="p-1 px-4 rounded-lg text-xs sm:text-sm">Failed</div>
        </div>

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <Table data={data} columns={columns} />
        </div>
      </div>
    </Shared>
  );
}

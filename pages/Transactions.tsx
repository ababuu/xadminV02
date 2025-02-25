import React from "react";
import Shared from "../components/Shared";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { Table } from "../components/Table";
import { SmallTable } from "../components/SmallTable";
import { ColumnDef } from "@tanstack/react-table";
import { Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

type Props = {};

const userColumns: ColumnDef<any, any>[] = [
  { accessorKey: "name", header: "NAME" },
  { accessorKey: "email", header: "EMAIL" },
];

const userData = Array(30).fill({
  name: "John Doe",
  email: "john.doe@gmal.com",
});

const columns: ColumnDef<any, any>[] = [
  { accessorKey: "date", header: "DATE" },
  { accessorKey: "filled", header: "FILLED" },
  { accessorKey: "market", header: "MARKET" },
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
        } h-fit text-[9px]`}
      />
    ),
  },
  { accessorKey: "price", header: "PRICE" },
  { accessorKey: "amount", header: "AMOUNT" },
  { accessorKey: "value", header: "VALUE" },
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
        } h-fit text-[9px]`}
      />
    ),
  },
  {
    header: "CANCEL ALL",
    cell: () => (
      <p className="text-red-500 w-fit cursor-pointer hover:bg-red-200 rounded-lg">
        Cancel <CloseIcon className="text-sm" />
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
  },
];

export default function Transactions({}: Props) {
  return (
    <Shared tab="transaction">
      {/* Tabs Section */}
      <div className="w-full flex flex-wrap gap-2 justify-center mb-4 mt-[-30px]">
        {["All", "Trades", "Deposits", "Withdraws"].map((tab, index) => (
          <div
            key={index}
            className={`p-1 pl-4 pr-4 rounded-lg text-sm cursor-pointer ${
              tab === "All"
                ? "bg-green-100 text-green-500"
                : "hover:text-green-500 hover:bg-green-100"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Main Content Section */}
      <div className="w-full lg:w-[95%] m-auto rounded-lg flex flex-col lg:flex-row gap-4 p-2">
        {/* Left Section (Search and User Table) */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4">
          <div className="border w-full flex items-center p-2 gap-2 bg-gray-100 rounded-lg">
            <FormControl variant="outlined" className="h-[30px] w-full">
              <OutlinedInput
                id="outlined-adornment-search"
                type="text"
                size="small"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="search" edge="end">
                      <SearchIcon className="text-gray-400" />
                    </IconButton>
                  </InputAdornment>
                }
                className="h-[30px] bg-white"
              />
            </FormControl>
            <Button className="h-[27px] min-w-[80px] rounded-lg text-black text-xs capitalize bg-white">
              Search
            </Button>
          </div>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <Table data={userData} columns={userColumns} />
          </div>
        </div>

        {/* Right Section (Trades, Deposits, Withdraws, Received) */}
        <div className="w-full lg:w-[65%] flex flex-col gap-4">
          {["TRADES", "DEPOSITS", "WITHDRAWS", "RECEIVED"].map(
            (title, index) => (
              <div key={index} className="border border-gray-300 rounded-lg">
                <p className="text-[10px] m-1">{title}</p>
                <SmallTable data={data} columns={columns} />
              </div>
            )
          )}
        </div>
      </div>
    </Shared>
  );
}

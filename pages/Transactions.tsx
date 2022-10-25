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
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
];
const userData = [
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
  {
    name: "John Doe",
    email: "john.doe@gmal.com",
  },
];
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
          } h-fit text-[9px]`}
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
          } h-fit text-[9px]`}
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
];
export default function Transactions({}: Props) {
  return (
    <>
      <Shared tab="transaction">
        <div className="w-[99%]  flex gap-4 justify-center mb-1 mt-[-30px]">
          <div className="bg-green-100 p-1 pl-4 pr-4 rounded-lg text-green-500 text-sm">
            All
          </div>
          <div className="p-1 pl-4 pr-4 rounded-lg text-sm hover:text-green-500 hover:bg-green-100 cursor-pointer">
            Trades
          </div>
          <div className="p-1 pl-4 pr-4 rounded-lg text-sm hover:text-green-500 hover:bg-green-100 cursor-pointer">
            Deposites
          </div>
          <div className="p-1 pl-4 pr-4 rounded-lg text-sm hover:text-green-500 hover:bg-green-100 cursor-pointer">
            Withdraws
          </div>
        </div>
        <div className="w-[95%] m-auto rounded-lg flex gap-6">
          <div className="w-[30%] flex flex-col gap-2">
            <div className="border w-full flex items-center p-2 gap-2 bg-gray-100 rounded-lg">
              <FormControl variant="outlined" className="h-[30px] w-[75%]">
                <OutlinedInput
                  id="outlined-adornment-search"
                  type="text"
                  value=""
                  size="small"
                  // onChange={}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton aria-label="search" edge="end">
                        <SearchIcon className="text-gray-400" />
                      </IconButton>
                    </InputAdornment>
                  }
                  className="h-[30px] w-[100%] bg-white"
                />
              </FormControl>
              <Button className="h-[27px] w-[20%] rounded-lg text-black text-xs capitalize bg-white">
                Search
              </Button>
            </div>
            <div>
              <Table data={userData} columns={userColumns} />
            </div>
          </div>
          <div className="w-[65%] p-2 border-2 border-gray-400 rounded-lg border-dashed flex flex-col gap-1">
            <div className="border border-gray-300 rounded-lg">
              <p className="text-[10px] m-1">TRADES</p>
              <SmallTable data={data} columns={columns} />
            </div>
            <div className="border border-gray-300 rounded-lg">
              <p className="text-[10px] m-1">DEPOSITES</p>
              <SmallTable data={data} columns={columns} />
            </div>
            <div className="border border-gray-300 rounded-lg">
              <p className="text-[10px] m-1">WITHDRAWS</p>
              <SmallTable data={data} columns={columns} />
            </div>
            <div className="border border-gray-300 rounded-lg">
              <p className="text-[10px] m-1">RECEIVED</p>
              <SmallTable data={data} columns={columns} />
            </div>
          </div>
        </div>
      </Shared>
    </>
  );
}

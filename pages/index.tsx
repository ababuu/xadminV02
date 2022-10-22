import type { NextPage } from "next";
import Head from "next/head";
import Shared from "../components/Shared";
import { styled } from "@mui/material/styles";
import BarChartIcon from "@mui/icons-material/BarChart";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import MuiTableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Image from "next/image";

const TableCell = styled(MuiTableCell)({
  borderBottom: "none",
});

const Home: NextPage = () => {
  const Home = () => {
    return (
      <div className="bg-gray-100 p-8 pt-8">
        <div className="flex justify-center md:justify-end lg:justify-end lg:mr-[5%]">
          <div className="flex gap-2">
            <div className="border rounded-xl w-fit p-1 pl-4 pr-4 bg-[#14EA83] text-white hover:bg-[#14EA83] hover:text-white cursor-pointer">
              All
            </div>
            <div className="border rounded-xl w-fit p-1 pl-4 pr-4 hover:bg-[#14EA83] hover:text-white cursor-pointer">
              1M
            </div>
            <div className="border rounded-xl w-fit p-1 pl-4 pr-4 hover:bg-[#14EA83] hover:text-white cursor-pointer">
              6M
            </div>
            <div className="border rounded-xl w-fit p-1 pl-4 pr-4 hover:bg-[#14EA83] hover:text-white cursor-pointer">
              1Y
            </div>
            <div className="border rounded-xl w-fit p-1 pl-4 pr-4 hover:bg-[#14EA83] hover:text-white cursor-pointer">
              YTD
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col w-[95%] m-auto p-0 lg:flex-row md:flex-row flex-wrap gap-10 gap-y-4 justify-center">
          <div className="flex gap-4 w-[21%] p-4 m-0 bg-white rounded-xl">
            <div className="text-[#14EA83]">
              <BarChartIcon />
            </div>
            <div>
              <div className="text-xs text-gray-500">Deposited</div>
              <div className="text-lg">9898</div>
            </div>
          </div>
          <div className="flex gap-4 m-0  w-[21%] p-4 bg-white rounded-xl">
            <div className="text-[#14EA83]">
              <BarChartIcon />
            </div>
            <div>
              <div className="text-xs text-gray-500">Withdraws</div>
              <div className="text-lg">9898</div>
            </div>
          </div>
          <div className="flex gap-4 m-0 w-[21%] p-4 bg-white rounded-xl">
            <div className="text-[#14EA83]">
              <BarChartIcon />
            </div>
            <div>
              <div className="text-xs text-gray-500">Sent</div>
              <div className="text-lg">9898</div>
            </div>
          </div>
          <div className="flex gap-4 m-0 w-[21%] p-4 bg-white rounded-xl">
            <div className="text-[#14EA83]">
              <BarChartIcon />
            </div>
            <div>
              <div className="text-xs text-gray-500">Received</div>
              <div className="text-lg">9898</div>
            </div>
          </div>
          <div className="flex gap-4 m-0  w-[21%] p-4 bg-white rounded-xl">
            <div className="text-[#14EA83]">
              <BarChartIcon />
            </div>
            <div>
              <div className="text-xs text-gray-500">Number of users</div>
              <div className="text-lg">9898</div>
            </div>
          </div>
          <div className="flex gap-4 m-0  w-[21%] p-4 bg-white rounded-xl">
            <div className="text-[#14EA83]">
              <BarChartIcon />
            </div>
            <div>
              <div className="text-xs text-gray-500">Successful</div>
              <div className="text-lg">9898</div>
            </div>
          </div>
          <div className="flex gap-4 m-0  w-[21%] p-4 bg-white rounded-xl">
            <div className="text-[#14EA83]">
              <BarChartIcon />
            </div>
            <div>
              <div className="text-xs text-gray-500">Pending transactions</div>
              <div className="text-lg">9898</div>
            </div>
          </div>
          <div className="flex gap-4 m-0 w-[21%] p-4 bg-white rounded-xl">
            <div className="text-[#14EA83]">
              <BarChartIcon />
            </div>
            <div>
              <div className="text-xs text-gray-500">Failed transactions</div>
              <div className="text-lg">9898</div>
            </div>
          </div>
        </div>
        <div className="bg-white w-[91%] m-auto mt-16 p-6 rounded-xl">
          <p className="pl-4 text-lg">Recent Transactions</p>
          <TableContainer>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="simple table"
            >
              <TableBody>
                <TableRow className="text-xs">
                  <TableCell>
                    <Image
                      src="/images/bitcoin.png"
                      alt="Bitcoin"
                      width={40}
                      height={40}
                    />
                  </TableCell>
                  <TableCell className="text-xs text-gray-600">
                    Bitcoin
                  </TableCell>
                  <TableCell className="text-xs text-gray-600">
                    10:45:00 AM
                  </TableCell>
                  <TableCell className="text-xs text-gray-600">
                    +154.00$
                  </TableCell>
                  <TableCell className="text-xs text-green-400">
                    Completed
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Image
                      src="/images/ethereum.png"
                      alt="Bitcoin"
                      width={40}
                      height={40}
                    />
                  </TableCell>
                  <TableCell className="text-xs text-gray-600">
                    Ethereum
                  </TableCell>
                  <TableCell className="text-xs text-gray-600">
                    10:45:00 AM
                  </TableCell>
                  <TableCell className="text-xs text-gray-600">
                    +154.00$
                  </TableCell>
                  <TableCell className="text-xs text-gray-400">
                    pending
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Image
                      src="/images/litecoin.png"
                      alt="Bitcoin"
                      width={40}
                      height={40}
                    />
                  </TableCell>
                  <TableCell className="text-xs text-gray-600">LTC</TableCell>
                  <TableCell className="text-xs text-gray-600">
                    10:45:00 AM
                  </TableCell>
                  <TableCell className="text-xs text-gray-600">
                    +154.00$
                  </TableCell>
                  <TableCell className="text-xs text-green-400">
                    Completed
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Head>
        <title>X-Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Shared tab="home">
          <Home />
        </Shared>
      </div>
    </div>
  );
};

export default Home;

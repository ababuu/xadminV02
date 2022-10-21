import React from "react";
import Shared from "../components/Shared";

type Props = {};

export default function Orders({}: Props) {
  const Orders = () => {
    return <h1>Orders</h1>;
  };
  return (
    <>
      <Shared>
        <Orders />
      </Shared>
    </>
  );
}

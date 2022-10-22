import React from "react";
import Shared from "../components/Shared";

type Props = {};

export default function Trade({}: Props) {
  const Trade = () => {
    return <h1>Trade</h1>;
  };
  return (
    <>
      <Shared tab="trade">
        <Trade />
      </Shared>
    </>
  );
}

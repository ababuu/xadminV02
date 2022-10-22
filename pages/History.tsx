import React from "react";
import Shared from "../components/Shared";

type Props = {};

export default function History({}: Props) {
  const History = () => {
    return <h1>History</h1>;
  };
  return (
    <>
      <Shared tab="history">
        <History />
      </Shared>
    </>
  );
}

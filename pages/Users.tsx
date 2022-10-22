import React from "react";
import Shared from "../components/Shared";

type Props = {};

export default function Users({}: Props) {
  const Users = () => {
    return <h1>Users</h1>;
  };
  return (
    <>
      <Shared tab="users">
        <Users />
      </Shared>
    </>
  );
}

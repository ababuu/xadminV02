import React from "react";

import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import StyledTextInput from "../components/StyledTextInput";

type Props = {};

export default function Signin({}: Props) {
  return (
    <div className="w-full h-screen flex justify-center relative overflow-y-hidden">
      <div className="h-[50px] w-[50px] bg-[#27AE60] absolute left-20 top-20 rounded-full"></div>
      <div className="h-[500px] w-[500px] bg-[#27AE60] absolute left-[-320px] bottom-[-200px] rounded-full"></div>
      <div className="w-[400px] mt-[150px]">
        <div>
          <p className="text-5xl font-[800] mb-[50px]">Login</p>
        </div>
        <div className="w-full">
          <FormControl className="w-full">
            <StyledTextInput
              name="username"
              label="Username"
              type="text"
              required
            />
            <StyledTextInput
              name="password"
              label="Password"
              type="password"
              required
            />
            <Button
              className="w-full h-[30px] mt-10 bg-[#27AE60] hover:bg-green-700 rounded-none"
              variant="contained"
              type="submit"
            >
              Login
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

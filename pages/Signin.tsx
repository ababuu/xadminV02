import React from "react";

import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import StyledTextInput from "../components/StyledTextInput";

type Props = {};

export default function Signin({}: Props) {
  return (
    <div className="w-full h-screen flex justify-center items-center relative overflow-hidden px-4">
      {/* Background Circles */}
      <div className="h-12 w-12 md:h-16 md:w-16 bg-[#27AE60] absolute left-10 top-10 rounded-full"></div>
      <div className="h-80 w-80 md:h-96 md:w-96 bg-[#27AE60] absolute left-[-40%] bottom-[-20%] rounded-full"></div>

      {/* Login Form */}
      <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
        <p className="text-3xl md:text-5xl font-extrabold mb-6 text-center">
          Login
        </p>

        <FormControl className="w-full space-y-4">
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
            className="w-full h-10 mt-6 bg-[#27AE60] hover:bg-green-700 rounded-md"
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </FormControl>
      </div>
    </div>
  );
}

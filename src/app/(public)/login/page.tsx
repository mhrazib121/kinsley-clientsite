"use client";
import { Button } from "@/components/Common";
import InputField from "@/components/Common/InputField";
import Link from "next/link";
import { useState } from "react";

// import Logo from "../components/ui/Logo";

const Login = () => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // await login({
    //   data: {
    //     email,
    //     password,
    //   },
    // });
  };
  // useEffect(() => {
  //   if (isSuccess) {
  //     localStorage.setItem("accessToken", loginResponse.data.accessToken);
  //     navigate("/");
  //   }
  // }, [loginResponse, isSuccess, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md">
        {/* {isError ? <Error message={errorResponse?.data?.message} /> : null} */}
        <div className="mb-6 flex flex-col items-center">
          {/* <Logo /> */}
          Kinsley
          <h2 className="mt-4 text-3xl text-center font-bold">Login</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email Address"
            placeholder="Enter your email address"
            type="email"
            key={1}
            value={email}
            handleOnChange={setEmail}
          />
          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            key={2}
            value={password}
            handleOnChange={setPassword}
          />

          <Button
            variant="primary"
            className="w-full bg-blue-700 hover:bg-blue-500 rounded-md flex flex-col items-center my-6"
          >
            Sign In{" "}
          </Button>
        </form>
        <Link
          href="/register"
          className="text-sm flex gap-2 justify-center mb-6"
        >
          Don&apost have an account?{" "}
          <span className="text-blue-500 hover:text-blue-800"> Register</span>
        </Link>
        <div className="flex justify-between">
          <a href="/" className="text-sm text-blue-500 hover:text-blue-800">
            Back to home
          </a>
          <a href="#" className="text-sm text-blue-500 hover:text-blue-800">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;

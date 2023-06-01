"use client";

import Head from "next/head";
import Link from "next/link";
import Brand from "../../components/ui/Brand";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function Login() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
        <title>Login - Split</title>
      </Head>

      <div className="w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600">
          <div className="text-center">
            <Link href={"/"}>
              {" "}
              <Brand className="" />
            </Link>
            <div className="mt-5 space-y-2">
              <h1 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Log in to your account
              </h1>
            </div>
          </div>
          <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="font-medium">Email</label>
              <Input
                type="email"
                required
                className="w-full mt-3 focus:border-purple-600 outline-purple-200 "
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <Input
                type="password"
                required
                minLength={4}
                className="w-full mt-3 outline-purple-200 focus:border-purple-600"
              />
            </div>
            <Button
              type="submit"
              className="w-full p-10 text-white bg-purple-600 hover:bg-purple-500 ring-offset-2 ring-purple-600 focus:ring shadow rounded-lg"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}

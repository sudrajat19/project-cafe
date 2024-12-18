import Link from "next/link";
import { useState } from "react";
import Layout from "../layout";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Layout>
      <div className="min-h-screen pt-[200px] font-nunito">
        <form className=" w-full max-w-[296px] md:max-w-[418px] lg:max-w-[398px] bg-white shadow-lg rounded-lg p-8 mx-auto mt-8">
          <h1 className="text-center font-bold text-2xl">Masuk</h1>
          <div className="grid grid-cols-1 gap-2">
            <label htmlFor="username" className="normal-sm font-semibold">
              Username
            </label>
            <input
              type="username"
              id="username"
              name="username"
              className=" border-2 rounded p-1 border-yellow-700"
              placeholder="Masukkan username"
              required
            />
          </div>
          <div className="grid grid-cols-1 gap-2 mt-2">
            <label htmlFor="password" className="normal-sm font-semibold">
              Password
            </label>
            <div className="border-2 rounded p-1 border-yellow-700 flex">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="outline-none border-none w-full "
                placeholder="*********"
                required
              />
              <img
                src="/images/mata.png"
                onClick={toggleShowPassword}
                className="w-4 h-4 self-center m-2 cursor-pointer"
                alt="toggle visibility"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-yellow-700 text-white text-center w-full rounded p-1 my-8"
          >
            Masuk
          </button>
        </form>
      </div>
    </Layout>
  );
}

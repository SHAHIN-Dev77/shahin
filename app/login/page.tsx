"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function login() {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) router.push("/dashboard");
    else alert("email or password is incorrect");

  }

  return (
    <div className=" flex  items-center justify-center">
      <div className="max-w-md p-2 justify-center bg-gray-600 rounded-2xl ">
      <div className="w-full max-w-sm  bg-cyan-400 p-10 rounded-lg shadow-lg flex flex-col items-center">
        <h1 className="text-center text-xl font-bold mb-4">Login</h1>

        <input
          className="border p-4 w-full mb-3"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border p-4 w-full mb-4"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-gray-400 text-black p-4 py-2 rounded font-bold hover:bg-gray-300"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
    </div>
    
  );
}

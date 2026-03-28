import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md bg-white border border-slate-200 shadow-sm rounded-3xl p-8">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Login</h1>
          <p className="text-sm text-slate-500">
            Enter your email and password to access your account.
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <div className="space-y-4">
            <label
              className="block text-sm font-medium text-slate-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-200"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          <p>
            Don&apos;t have an account?{" "}
            <span className="font-semibold text-slate-900">Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

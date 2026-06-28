import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="bg-slate-800 p-10 rounded-2xl shadow-xl w-[420px]">

        <h1 className="text-4xl text-cyan-400 font-bold text-center mb-8">
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
        />

        <input
          type="text"
          placeholder="College Name"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-slate-700 text-white"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-6 rounded bg-slate-700 text-white"
        />

        <button
          className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded font-bold"
          onClick={() => alert("Registration Successful!")}
        >
          Register
        </button>

        <p className="text-center mt-6 text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-cyan-400">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
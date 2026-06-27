import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    alert("Login Successful!");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center">
      <div className="bg-slate-900 p-8 rounded-xl shadow-xl w-96">

        <h1 className="text-3xl text-cyan-400 font-bold text-center mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded mb-4 bg-slate-800 text-white"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded mb-6 bg-slate-800 text-white"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-cyan-500 py-3 rounded hover:bg-cyan-600"
        >
          Login
        </button>

        <p className="text-center text-gray-400 mt-5">
          Don't have an account?
          <span className="text-cyan-400 cursor-pointer">
            Register
          </span>
        </p>

        <div className="text-center mt-5">
          <Link to="/" className="text-cyan-400">
            ← Back to Home
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Login;
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Analyze() {
    const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">

        <div className="bg-slate-800 p-10 rounded-2xl shadow-xl w-full max-w-2xl">

          <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
            Analyze Internship
          </h1>

          <input
            type="text"
            placeholder="Paste Internship URL"
            className="w-full p-4 rounded-lg bg-slate-700 mb-5 outline-none"
          />

          <textarea
            rows="8"
            placeholder="Or paste internship description here..."
            className="w-full p-4 rounded-lg bg-slate-700 outline-none"
          ></textarea>

          <button
  onClick={() => navigate("/result")}
  className="w-full mt-8 bg-cyan-500 py-4 rounded-lg text-xl font-bold hover:bg-cyan-600"
>
  Analyze
</button>

        </div>

      </div>
    </>
  );
}

export default Analyze;
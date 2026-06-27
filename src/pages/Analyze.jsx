import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";


function Analyze() {
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/analyze",
        {
          description: description,
        }
      );

      navigate("/result", {
        state: response.data,
      });

    } catch (error) {
  console.error(error);
  console.log(error.response?.data);
  alert(error.response?.data?.detail || error.message);
}
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="bg-slate-800 p-10 rounded-2xl shadow-xl w-full max-w-2xl">

          <h1 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
            Analyze Internship
          </h1>

          <textarea
            rows="10"
            placeholder="Paste Internship Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-4 rounded-lg bg-slate-700 outline-none"
          />

          <button
            onClick={handleAnalyze}
            className="w-full mt-8 bg-cyan-500 py-4 rounded-lg text-xl font-bold hover:bg-cyan-600"
          >
            Analyze with AI
          </button>

        </div>
      </div>
    </>
  );
}

export default Analyze;


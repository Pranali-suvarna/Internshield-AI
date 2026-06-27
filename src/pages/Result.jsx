import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function Result() {

  const { state } = useLocation();

  if (!state) {
    return <h1>No Result Found</h1>;
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-8">

        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          AI Analysis Result
        </h1>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              Risk Score
            </h2>

            <p className="text-6xl font-bold text-red-400">
              {state.risk_score}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              Trust Score
            </h2>

            <p className="text-6xl font-bold text-cyan-400">
              {state.trust_score}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              Status
            </h2>

            <p className="text-xl">
              {state.status}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
              Recommendation
            </h2>

            <p>
              {state.recommendation}
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              Red Flags
            </h2>

            <ul className="list-disc ml-5">
              {state.red_flags.map((flag, index) => (
                <li key={index}>{flag}</li>
              ))}
            </ul>

          </div>

        </div>

      </div>
    </>
  );
}

export default Result;


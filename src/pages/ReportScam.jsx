import { useState } from "react";
import Navbar from "../components/Navbar";

function ReportScam() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white">
        <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-xl shadow-lg">

          <h1 className="text-3xl font-bold text-cyan-400 mb-6 text-center">
            🚨 Report a Scam Internship
          </h1>

          {submitted ? (
            <div className="text-center">
              <h2 className="text-2xl text-green-400 mb-4">
                Thank You!
              </h2>

              <p>
                Your report has been submitted successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 mb-4 rounded bg-slate-700"
                required
              />

              <input
                type="url"
                placeholder="Internship Link"
                className="w-full p-3 mb-4 rounded bg-slate-700"
              />

              <textarea
                rows="5"
                placeholder="Describe why you think this internship is a scam..."
                className="w-full p-3 mb-4 rounded bg-slate-700"
                required
              />

              <button
                className="w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-bold"
              >
                Submit Report
              </button>

            </form>
          )}

        </div>
      </div>
    </>
  );
}

export default ReportScam;
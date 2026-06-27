import Navbar from "../components/Navbar";

function Result() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-950 text-white p-8">

        <h1 className="text-4xl font-bold text-cyan-400 text-center mb-10">
          Analysis Result
        </h1>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Risk Score</h2>
            <p className="text-6xl font-bold text-green-400">18/100</p>
            <p className="mt-3 text-gray-300">
              Low Risk - Appears Safe
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Company Trust Score</h2>
            <p className="text-6xl font-bold text-cyan-400">92%</p>
            <p className="mt-3 text-gray-300">
              Verified Company
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">Red Flags</h2>

            <ul className="list-disc ml-5 space-y-2">
              <li>No registration fee detected</li>
              <li>Official company website found</li>
              <li>LinkedIn profile available</li>
              <li>No suspicious keywords detected</li>
            </ul>

          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">AI Recommendation</h2>

            <p className="text-gray-300 leading-8">
              This internship appears genuine based on the available
              information. The company has an online presence, verified
              website and no scam indicators were detected.
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Result;
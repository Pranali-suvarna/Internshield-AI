import { Link } from "react-router-dom";

function LearnMore() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">

      <h1 className="text-5xl font-bold text-cyan-400 text-center mb-10">
        About InternShield AI
      </h1>

      <div className="max-w-5xl mx-auto space-y-8 text-lg leading-8">

        <p>
          Internship scams are increasing rapidly. Many students lose money by
          paying registration fees or trusting fake job offers.
        </p>

        <p>
          InternShield AI helps students verify internship opportunities using
          Artificial Intelligence.
        </p>

        <h2 className="text-3xl text-cyan-400 font-bold">
          Features
        </h2>

        <ul className="list-disc ml-8 space-y-3">
          <li>🛡 AI Scam Detection</li>
          <li>⭐ Company Trust Score</li>
          <li>🚩 Red Flag Detection</li>
          <li>📊 Internship Risk Score</li>
          <li>💡 AI Recommendations</li>
        </ul>

        <div className="text-center pt-8">

          <Link
            to="/analyze"
            className="bg-cyan-500 px-8 py-4 rounded-lg hover:bg-cyan-600"
          >
            Get Started
          </Link>

        </div>

      </div>

    </div>
  );
}

export default LearnMore;
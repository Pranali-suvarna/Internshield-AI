
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      id="home"
      className="bg-slate-950 text-white min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>
          <span className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-full text-sm font-semibold">
            🛡️ AI Powered Internship Verification
          </span>

          <h1 className="text-5xl lg:text-6xl font-bold mt-6 leading-tight">
            Helping Students
            <br />
            Choose Opportunities,
            <br />
            <span className="text-cyan-400">Not Scams.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-xl">
            InternShield AI analyzes internship descriptions using Artificial
            Intelligence, detects scam indicators, generates trust scores, and
            helps students apply with confidence.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link to="/analyze">
              <button className="bg-cyan-500 hover:bg-cyan-600 px-7 py-3 rounded-lg text-lg font-semibold transition">
                🚀 Analyze Internship
              </button>
            </Link>

            <Link
              to="/learnmore"
              className="border border-cyan-400 px-7 py-3 rounded-lg hover:bg-cyan-400 hover:text-black transition"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">

            <div className="text-center">
              <h2 className="text-3xl font-bold text-cyan-400">1000+</h2>
              <p className="text-gray-400 text-sm">Students Protected</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-red-400">500+</h2>
              <p className="text-gray-400 text-sm">Scams Detected</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-400">95%</h2>
              <p className="text-gray-400 text-sm">Detection Accuracy</p>
            </div>

          </div>

          {/* Trusted Companies */}
          <div className="mt-10">
            <p className="text-gray-400 mb-3">
              Trusted by students verifying internships from
            </p>

            <div className="flex flex-wrap gap-3">
              {["Google", "Microsoft", "Amazon", "Infosys", "TCS"].map(
                (company) => (
                  <span
                    key={company}
                    className="bg-slate-800 px-4 py-2 rounded-full border border-slate-700"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl p-8 w-full max-w-md shadow-2xl">

            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-cyan-400">
                🤖 AI Analysis
              </h2>

              <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                LIVE
              </span>
            </div>

            <div className="space-y-5">

              <div className="flex justify-between">
                <span>Risk Score</span>
                <span className="text-red-400 font-bold">95%</span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full w-[95%]"></div>
              </div>

              <div className="flex justify-between">
                <span>Trust Score</span>
                <span className="text-green-400 font-bold">5%</span>
              </div>

              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full w-[5%]"></div>
              </div>

              <div className="bg-red-500/20 border border-red-500 rounded-lg p-4 mt-6">
                <h3 className="font-bold text-red-400">
                  🚨 Scam Indicators
                </h3>

                <ul className="list-disc ml-5 mt-3 text-gray-300 space-y-2">
                  <li>Registration fee requested</li>
                  <li>Guaranteed placement promise</li>
                  <li>Unrealistic stipend</li>
                  <li>No official company email</li>
                </ul>
              </div>

              <div className="bg-green-500/20 border border-green-500 rounded-lg p-4">
                <h3 className="font-bold text-green-400">
                  Recommendation
                </h3>

                <p className="mt-2">
                  Avoid this internship and verify opportunities through
                  official company websites.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
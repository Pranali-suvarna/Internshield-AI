import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
function Result() {

  const { state } = useLocation();
  const downloadPDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text("InternShield AI Report", 20, 20);

  doc.setFontSize(14);
  doc.text(`Risk Score: ${state.risk_score}`, 20, 40);
  doc.text(`Trust Score: ${state.trust_score}`, 20, 50);
  doc.text(`Status: ${state.status}`, 20, 60);

  doc.text("Recommendation:", 20, 80);
  doc.text(state.recommendation, 20, 90);

  doc.text("Red Flags:", 20, 120);

  let y = 130;
  state.red_flags.forEach((flag) => {
    doc.text(`• ${flag}`, 25, y);
    y += 10;
  });

  doc.save("InternShield_AI_Report.pdf");
};

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
           <div className="flex gap-4 mt-6">

  <Link to="/report">
    <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg">
      🚨 Report Scam
    </button>
  </Link>

  <button
    onClick={downloadPDF}
    className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg"
  >
    📄 Download Report
  </button>

</div>
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


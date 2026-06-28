function RecentAnalysis() {
  const analyses = [
    {
      company: "Google Internship",
      status: "Safe",
      color: "text-green-400",
    },
    {
      company: "XYZ Technologies",
      status: "Scam",
      color: "text-red-400",
    },
    {
      company: "Infosys Internship",
      status: "Safe",
      color: "text-green-400",
    },
    {
      company: "ABC Startup",
      status: "Medium Risk",
      color: "text-yellow-400",
    },
  ];

  return (
    <section className="bg-slate-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          📜 Recent Analyses
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {analyses.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <h3 className="text-xl font-semibold">
                {item.company}
              </h3>

              <p className={`mt-3 font-bold ${item.color}`}>
                {item.status}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default RecentAnalysis;
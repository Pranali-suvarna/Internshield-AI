function TrustedCompanies() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys",
    "TCS",
    "Wipro",
    "IBM",
    "Accenture",
  ];

  return (
    <section className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-10">
          🏢 Trusted Companies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {companies.map((company) => (
            <div
              key={company}
              className="bg-slate-800 p-6 rounded-xl text-center shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold">
                ✅ {company}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TrustedCompanies;
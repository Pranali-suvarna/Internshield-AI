function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Scam Detection",
      desc: "Detects fake internships using AI-powered analysis."
    },
    {
      icon: "📊",
      title: "Risk Score",
      desc: "Generates a scam risk score from 0–100."
    },
    {
      icon: "🏢",
      title: "Company Trust Score",
      desc: "Checks company credibility and online presence."
    },
    {
      icon: "💬",
      title: "Explainable AI",
      desc: "Explains why an internship is marked safe or risky."
    },
    {
      icon: "🚨",
      title: "Report Scam",
      desc: "Students can report suspicious internship postings."
    },
    {
      icon: "✅",
      title: "Verified Alternatives",
      desc: "Suggests trusted internships when a scam is detected."
    }
  ];

  return (
    <section id="features" className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>

              <h3 className="text-2xl font-semibold mb-3 text-cyan-400">
                {feature.title}
              </h3>

              <p className="text-gray-300">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
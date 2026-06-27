function About() {
  return (
    <section id="about" className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-8 text-center">

        <h2 className="text-4xl font-bold text-cyan-400 mb-6">
          About InternShield AI
        </h2>

        <p className="text-lg text-gray-300 leading-8">
          InternShield AI is an AI-powered platform that helps students identify
          fake internships before applying. By analyzing internship descriptions,
          company information, and suspicious patterns, the platform generates
          a risk score and trust score to help students make safer career decisions.
        </p>

      </div>
    </section>
  );
}

export default About;
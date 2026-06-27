function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Internships Analyzed",
    },
    {
      number: "96%",
      title: "Detection Accuracy",
    },
    {
      number: "150+",
      title: "Verified Companies",
    },
    {
      number: "1000+",
      title: "Students Protected",
    },
  ];

  return (
    <section  className="bg-slate-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center mb-12">
          Our Impact
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 text-center shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h3>

              <p className="mt-4 text-gray-300 text-lg">
                {item.title}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;
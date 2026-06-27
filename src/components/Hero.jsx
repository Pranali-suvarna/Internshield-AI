import { Link } from "react-router-dom";

function Hero() {
  return (
    <section  id="home" className="bg-slate-950 text-white min-h-[80vh] flex items-center">

      <div className="max-w-7xl mx-auto px-8">

        <h1 className="text-6xl font-bold leading-tight">
          Helping Students
          <br />
          Choose Opportunities,
          <br />
          <span className="text-cyan-400">
            Not Scams.
          </span>
        </h1>

        <p className="text-xl text-gray-300 mt-8 max-w-2xl">
          InternShield AI uses Artificial Intelligence to detect fake internships,
          analyze company credibility, generate trust scores, and help students
          apply with confidence.
        </p>

        <div className="mt-10 flex gap-5">

          <Link to="/analyze">
  <button className="bg-cyan-500 px-8 py-4 rounded-xl text-lg font-bold hover:bg-cyan-600">
    Analyze Internship
  </button>
</Link>

          <Link
  to="/learnmore"
  className="border border-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-black"
>
  Learn More
</Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;
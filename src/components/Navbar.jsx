import { Link, useLocation } from "react-router-dom";
function Navbar() {
const location = useLocation();
const isAnalyzePage = location.pathname === "/analyze";
const isHomePage = location.pathname === "/";
  return (
    // <nav className="bg-slate-950 text-white shadow-lg">
      //  <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 text-white shadow-lg">
      <nav className="sticky top-0 z-50 bg-slate-900 text-white p-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-cyan-400">
          🛡️ InternShield AI
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
  {/* <li>
    <Link to="/" className="hover:text-cyan-400">
      Home
    </Link>
  </li> */}
  <li>
  {isHomePage ? (
    <a href="#home" className="hover:text-cyan-400">
      Home
    </a>
  ) : (
    <Link to="/" className="hover:text-cyan-400">
      Home
    </Link>
  )}
</li>

  {!isAnalyzePage && (
    <>
      <li>
        <a href="#features" className="hover:text-cyan-400">
          Features
        </a>
      </li>

      <li>
        <a href="#about" className="hover:text-cyan-400">
          About
        </a>
      </li>

      <li>
        <a href="#contact" className="hover:text-cyan-400">
          Contact
        </a>
      </li>
    </>
  )}
</ul>

        
  <Link to="/login">
  <button className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold">
    Login
  </button>
</Link>


      </div>
    </nav>
  );
}

export default Navbar;
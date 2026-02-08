import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        SPEC.M3DIA
      </Link>

      <div className="flex gap-8 text-sm uppercase tracking-widest">
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

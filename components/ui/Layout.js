import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cyan-400  ">
      <header className="p-6 mb-12 shadow-lg md:text-5xl  bg-slate-50 ">
        <h1 className="text-center text-gray-700  font-bold leading-tight text-4xl  ">
          <Link href={"/"}>Contact book</Link>
        </h1>
      </header>
      {children}
    </div>
  );
};

export default Layout;

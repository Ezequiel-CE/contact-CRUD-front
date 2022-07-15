const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-cyan-400  ">
      <h1 className="text-center mb-12 font-bold leading-tight text-4xl bg-slate-50 p-6  shadow-lg md:text-5xl text-gray-700  ">
        Contact book
      </h1>
      {children}
    </div>
  );
};

export default Layout;

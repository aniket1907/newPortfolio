const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-lg bg-dark/70 border-b border-white/10">
      <div className="flex items-center justify-between px-6 md:px-16 h-16">
        
        <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Manoj
        </h1>

        <nav className="hidden md:flex gap-8">
          <a href="#">Home</a>
          <a href="/about">About</a>
          <a href="/experience">Experience</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
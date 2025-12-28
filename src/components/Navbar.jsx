import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 href="#hero" className="text-xl font-bold text-sky-400">Rajnish</h1>
        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#hero" className='hover:text-sky-400'>Home</a>
          <a href="#about" className="hover:text-sky-400">About</a>
          <a href="#skills" className="hover:text-sky-400">Skills</a>
          <a href="#projects" className="hover:text-sky-400">Projects</a>
          <a href="#contact" className="hover:text-sky-400">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

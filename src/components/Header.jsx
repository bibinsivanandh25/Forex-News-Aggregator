import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { HiOutlineBars3 } from 'react-icons/hi2';
import SearchBar from './SearchBar';

const Header = ({ query, setQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-5 px-4 mb-6 flex items-center justify-between lg:fixed absolute top-0 left-0 z-10 w-full bg-white shadow-md">
      <Link to="#" className="flex-shrink-0">
        <img src={logo} alt="logo" className="h-4 lg:h-5" />
      </Link>

      {/* Desktop SearchBar */}
      <div className="hidden lg:flex">
        <SearchBar query={query} setQuery={setQuery} />
      </div>

      {/* Admin Link (Hidden on small screens) */}
      <Link
        to="/admin"
        className="hidden lg:flex focus:outline-none bg-[#3498db] px-4 py-3 rounded-lg text-white items-center gap-2 transition duration-500 hover:bg-[#3988bd]"
      >
        <span>Admin </span>
        <MdArrowForwardIos />
      </Link>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="lg:hidden flex items-center">
        <button
          aria-label="Open Menu"
          className="focus:outline-none text-4xl text-[#03273c]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <HiOutlineBars3 />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-[#75a9cb] z-10 flex flex-col items-center py-8 gap-8">
          <button
            aria-label="Close Menu"
            className="self-end mr-5 focus:outline-none lg:text-3xl text-2xl text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            <GrClose />
          </button>

          {/* Mobile SearchBar */}
          <div className="flex items-center">
            <SearchBar query={query} setQuery={setQuery} />
          </div>

          <Link
            to="/admin"
            className="focus:outline-none mt-2 bg-[#3498db] px-4 py-3 rounded-lg text-white flex items-center gap-2"
          >
            <span>Admin </span>
            <MdArrowForwardIos />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;

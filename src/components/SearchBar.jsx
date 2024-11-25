import { FiSearch } from 'react-icons/fi';
import { useState } from 'react';

const SearchBar = ({ query, setQuery }) => {
  const [localQuery, setLocalQuery] = useState(query);

  const handleSearch = () => {
    if (!localQuery) return;
    setQuery(localQuery);

    setLocalQuery('');
  };

  return (
    <>
      <input
        type="text"
        value={localQuery}
        placeholder="Search news..."
        onChange={(e) => setLocalQuery(e.target.value)}
        className="border border-[#3498db] px-3 py-2 focus:outline-none rounded-l-lg"
      />
      <button
        onClick={handleSearch}
        className="px-3 py-2 bg-[#3498db] border border-[#3498db] min-h-[40px] rounded-r-lg"
      >
        <FiSearch className="text-xl text-white" />
      </button>
    </>
  );
};

export default SearchBar;

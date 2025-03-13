const SearchBar = () => {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
          />
          <button className="absolute right-3 top-2 text-gray-500 hover:text-blue-500">
            🔍
          </button>
        </div>
      </div>
    );
  };
  
  export default SearchBar;
  
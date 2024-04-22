const FindItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        role="searchbox"
        placeholder="search items"
        search={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default FindItem;

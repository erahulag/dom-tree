function SearchText({ onSearch }) {
  const [searchText, setSearchText] = React.useState("");
  
  const handleTextChange = (e) => {
    setSearchText(e.target.value);
    onSearch(e.target.value);
  };

  const handleClear = (e) => {
    setSearchText("");
    onSearch(null);
  };

  return (
    <div className="search-box">
      <input
        placeholder="Filter file nodes with matching text"
        value={searchText}
        onChange={handleTextChange}
      ></input>
      <Icon
        hidden={!searchText}
        iconClassName="close tertiary"
        onClick={handleClear}
      ></Icon>
    </div>
  );
}

import "../styles/searchbar.css";

function SearchBar() {
  return (
    <div>
      <input
        className="search-bar"
        type="text"
        placeholder="🔍 Buscar nome ou parte do ponto cantado..."
      />
    </div>
  );
}

export default SearchBar;
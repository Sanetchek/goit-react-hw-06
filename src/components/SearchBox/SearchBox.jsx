import css from './SearchBox.module.css'

export default function SearchBox({ onSearch }) {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  }

  return (
    <div className={css.container}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        name="search"
        className={css.search}
        onChange={handleSearch}
      />
    </div>
  );
};




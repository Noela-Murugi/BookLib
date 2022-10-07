import React from "react";

function Search({handleSearch}) {

  return (
    <div className="ui large icon input" style={{margin:"40px"}}>
      <input
        type="text"
        placeholder="Book Search Author..."
        onChange={handleSearch}

      />
      <i className="circular search link icon"></i>

    </div>
  );
}

export default Search;

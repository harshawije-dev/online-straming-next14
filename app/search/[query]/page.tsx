import React from "react";

function Search({ params: { query } }: Params) {
  // Guard
  if (!query) {
    console.log("query");
  }
  const prop = decodeURI(query);
  return (
    <div>
      <p>you searched for {prop}</p>
    </div>
  );
}

export default Search;

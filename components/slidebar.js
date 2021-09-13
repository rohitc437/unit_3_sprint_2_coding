function navbar() {
  return `
    <h2><a href="home.html">Home</a></h2>
    <input type="text" placeholder="search" id="query">
    <button>Search</button>
    <div id="options">
        <h2><a href="news.html">News</a></h2>
        <h2><a href="search.html">Search</a></h2>
    </div>`;
}

export { navbar };

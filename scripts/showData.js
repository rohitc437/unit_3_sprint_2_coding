async function appendData() {
  let newsName = document.getElementById("query").value;
  let appendDiv = document.getElementById("place");

  appendDiv.innerHTML = null;
  let res = await fetch(
    `https://newsapi.org/v2/everything?q=${newsName}&from=2021-09-13&sortBy=popularity&apiKey=b332789ba80742ba991afcdf6cfc2827`
  );

  let data = await res.json();

  data = data.articles;
  // console.log(data);

  data.forEach(({ author, title, urlToImage, description, url }) => {
    let div1 = document.createElement("div");

    let h2 = document.createElement("h2");
    // h2.innerHTML = title;

    let p1 = document.createElement("p");
    p1.innerHTML = description;

    let img = document.createElement("img");
    img.src = urlToImage;

    let a1 = document.createElement("a");
    a1.setAttribute("href", url);
    a1.innerHTML = title;

    let h4 = document.createElement("h4");
    h4.innerHTML = author;

    h2.append(a1);

    div1.append(h2, h4, p1);

    appendDiv.append(img, div1);

    newsName = null;
  });
}

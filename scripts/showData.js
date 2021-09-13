async function getData(u) {
  let res = await fetch(u);

  let data = await res.json();

  data = data.articles;

  return data;
}

function appendData(data, place) {
  place.innerHTML = null;

  data.forEach(({ author, title, urlToImage, description, url }) => {
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "innerBox");

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

    mainDiv.append(img, div1);

    place.append(mainDiv);
  
  });


}

export { getData, appendData };

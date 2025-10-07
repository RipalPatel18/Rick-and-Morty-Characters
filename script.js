let url = "https://rickandmortyapi.com/api/character";
console.log("URL:", url);

console.log("Fetching data...");
fetch(url)
  .then((response) => {
    console.log("Response received");
    return response.json(); 
  })
  .then((data) => {
    console.log("Data loaded:", data);
    displayCharacters(data.results); 
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


function displayCharacters(characters) {
  const container = document.getElementById("images");

  characters.forEach((character) => {
    const img = document.createElement("img");
    img.src = character.image;
    img.alt = character.name;
    img.style.width = "150px";
    img.style.margin = "10px";

    const name = document.createElement("p");
    name.textContent = character.name;

    const div = document.createElement("div");
    div.style.display = "inline-block";
    div.style.textAlign = "center";
    div.appendChild(img);
    div.appendChild(name);

    container.appendChild(div);
  });
}

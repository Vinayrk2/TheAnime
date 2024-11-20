// let type = , category = ;
console.log("connected");
let currentType = "sfw";

function loadNewImage(type, category) {
  fetch(`https://api.waifu.pics/sfw/${category}`, { method: "get" })
    .then((data) => {  return data.json(); })
    .then((processedData) => { document.getElementById("cardImage").setAttribute("src",processedData.url.toString()); document.getElementById("cardButton").setAttribute("href",processedData.url) })
}

const type = ['sfw']
const category = [['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'hug', 'awoo', 'kiss', 'lick', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'glomp', 'slap', 'kill', 'kick', 'happy', 'wick', 'poke', 'dance', 'cringe']
]

function changeCategory() {
  let categoryIndex = 0;
  currentType = 0;

  document.getElementById("category").innerHTML = category[categoryIndex].map((val) => {
    return `<option value='${val}'> ${val} </option>`
  })
}

changeCategory()
function loadCardImage(value) {
  document.getElementById("cardTitle").innerText = value.toString();
  document.getElementById("cardImage").setAttribute("src","loading.gif")
  loadNewImage(currentType, value);
}


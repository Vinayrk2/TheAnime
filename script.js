// let type = , category = ;
console.log("connected");
let currentType = "sfw";

function loadNewImage(type, category) {
  fetch(`https://api.waifu.pics/${type}/${category}`, { method: "get" })
    .then((data) => {  return data.json(); })
    .then((processedData) => { document.getElementById("cardImage").setAttribute("src",processedData.url.toString()); document.getElementById("cardButton").setAttribute("href",processedData.url) })
}

const type = ['sfw', 'nsfw']
const category = [['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'hug', 'awoo', 'kiss', 'lick', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'glomp', 'slap', 'kill', 'kick', 'happy', 'wick', 'poke', 'dance', 'cringe'],
['waifu', 'neko', 'trap', 'blowjob']
]

function changeCategory(value) {
  let categoryIndex = 0;

  value == 'sfw' ? categoryIndex = 0 : categoryIndex = 1;
  currentType = value;

  
  document.getElementById("category").innerHTML = category[categoryIndex].map((val) => {
    return `<option value='${val}'> ${val} </option>`
  })
}

function loadCardImage(value) {
  document.getElementById("cardTitle").innerText = value.toString();
  document.getElementById("cardImage").setAttribute("src","loading.gif")
  loadNewImage(currentType, value);
}


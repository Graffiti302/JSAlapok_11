const focimElem = document.getElementById("focim");

focimElem.textContent = "Mátrix rendszer";

const statuszElemek = document.getElementsByClassName("statusz-szoveg");
statuszElemek[0].textContent = "Rendszer ellenőrzése folyamatban...";
statuszElemek[1].textContent = "Kapcsolódás a hálózathoz...";

console.log(statuszElemek.length);

console.log(statuszElemek[0].textContent);
console.log(statuszElemek[1].textContent);
const listaElemek = document.querySelectorAll(".lista-elem");
console.log(listaElemek[0].textContent);
console.log((listaElemek[1].textContent = "Szerver állapot: ONLINE"));
const nevInput = document.querySelector("#jatekos-nev-input");
const inditoGomb = document.querySelector("#indito-gomb");
const eredmenyDiv = document.getElementById("eredmeny");
console.log(inditoGomb)
inditoGomb.addEventListener("click", eredmenyKezelo);
console.log(nevInput.value)

function eredmenyKezelo() {
  const gombSzovege = inditoGomb.textContent;
  const jatekosnev = nevInput.value;
  eredmenyDiv.textContent = `Üdvözlünk, ${jatekosnev}! Végrehajtott akció: ${gombSzovege}`;
}

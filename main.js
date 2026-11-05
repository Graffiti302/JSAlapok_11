const focimElem = document.getElementById("focim")

focimElem.textContent="Mátrix rendszer"

const statuszElemek = document.getElementsByClassName("statusz-szoveg")
statuszElemek[0].textContent="Rendszer ellenőrzése folyamatban..."
statuszElemek[1].textContent="Kapcsolódás a hálózathoz..."

console.log(statuszElemek.length)

console.log(statuszElemek[0].textContent)
console.log(statuszElemek[1].textContent)
const listaElemek = document.querySelectorAll(".lista-elem")

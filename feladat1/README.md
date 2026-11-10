# JavaScript DOM Kezelés Alapjai 

Ez a segédlet a JavaScript Document Object Model (DOM) alapvető fogalmait, az elemek kijelölését, az eseménykezelést és a tartalommódosítási metódusokat foglalja össze.

---

## 1. Mi az a DOM (Document Object Model)?

A **DOM** (Dokumentum Objektum Modell) a weboldal **fában tárolt reprezentációja**, amit a böngésző hoz létre a HTML kód alapján. A DOM teszi lehetővé, hogy a JavaScript "lássa", elérje és dinamiuksan módosítsa a weboldal szerkezetét, tartalmát és stílusát.

### A név jelentése:

* **Document:** Maga a HTML oldal, amit a böngésző betölt.
* **Object:** A böngésző minden egyes HTML elemet (pl. `<button>`, `<div>`, `<p>`) JavaScript **objektummá** alakít, amelyeknek saját tulajdonságaik (properties) és metódusaik (methods) vannak.
* **Model:** Egy hierarchikus fa-struktúra (**DOM Tree**), amely leírja az elemek közötti szülő-gyermek (parent-child) és testvér (sibling) kapcsolatokat.

---

## 2. DOM-elemek elérésének módjai - Elemek kijelölése

| Módszer / Metódus | Leírás | Visszatérési érték | Kódpélda |
| :--- | :--- | :--- | :--- |
| **`document.querySelector()`** | Az **első** olyan elemet adja vissza, amely illeszkedik a megadott CSS szelektorra. *(Leggyakrabban használt)* | Egyetlen DOM elem | `const gomb = document.querySelector('#start-btn');` |
| **`document.querySelectorAll()`** | Az **összes** olyan elemet visszaadja, amely illeszkedik a CSS szelektorra. | NodeList *(tömbszerűen bejárható elemlista)* | `const opciok = document.querySelectorAll('.opcio');` |
| **`document.getElementById()`** | A megadott `id` attribútumú elemet keresi meg. | Egyetlen DOM elem | `const pontozo = document.getElementById('szamlalo');` |
| **`document.getElementsByClassName()`** | A megadott osztálynévvel (`class`) rendelkező összes elemet kigyűjti. | HTMLCollection *(élő elemlista)* | `const kartyak = document.getElementsByClassName('kartya');` |
| **`document.getElementsByTagName()`** | A megadott HTML tag neve alapján keres (pl. `button`, `div`). | HTMLCollection | `const gombok = document.getElementsByTagName('button');` |

---

## 3. Eseménykezelés: `addEventListener` 

| Metódus és Paraméterei | Leírás | Kódpélda |
| :--- | :--- | :--- |
| **`elem.addEventListener('click', fuggveny)`** | Eseményfigyelőt kapcsol az elemhez. Amikor a felhasználó **rákattint** az elemre, lefut a megadott függvény. | `const gomb = document.querySelector('#döntes-btn');`<br><br>`gomb.addEventListener('click', () => {`<br>`  console.log('Rákattintottak a gombra!');`<br>`});` |

---

## 4. Elem tartalmának írása és olvasása

| Tulajdonság / Metódus | Művelet típus | Leírás és működés | Kódpélda |
| :--- | :--- | :--- | :--- |
| **`textContent`** | Olvasás & Írás | **Sima szöveg** kiolvasása vagy felülírása. A benne lévő HTML tageket nem értelmezi, szövegként jeleníti meg azokat. *(Biztonságos)* | **Olvasás:** `const szoveg = elem.textContent;`<br>**Írás:** `elem.textContent = 'Új öko-pontszám: 100';` |
| **`innerHTML`** | Olvasás & Írás | A elem **HTML tartalmát** olvassa ki vagy írja felül. A megadott karakterláncban lévő HTML tageket kirajzolja a böngésző. | **Olvasás:** `const html = elem.innerHTML;`<br>**Írás:** `elem.innerHTML = '<strong>Helyes döntés!</strong>';` |
| **`insertAdjacentHTML()`** | Írás *(Beszúrás)* | **Nem törli** a meglévő tartalmat, hanem a megadott pozícióba szúr be új HTML kódot. | `elem.insertAdjacentHTML('beforeend', '<p>Új elem a lista végére</p>');` |
| **`value`** | Olvasás & Írás | **Űrlapelemek** (pl. `<input>`, `<textarea>`, `<select>`) beírt vagy kiválasztott értékének kezelése. | **Olvasás:** `const nev = nevInput.value;`<br>**Írás:** `nevInput.value = 'Játékos 1';` |

### A `insertAdjacentHTML(pozició, html)` lehetséges pozíciói:
1. **`'beforebegin'`**: Az elem elé *(kívülre)*
2. **`'afterbegin'`**: Az elemen belülre, az **első** gyermekelem elé
3. **`'beforeend'`**: Az elemen belülre, az **utolsó** gyermekelem után *(leggyakrabban használt)*
4. **`'afterend'`**: Az elem mögé *(kívülre)*

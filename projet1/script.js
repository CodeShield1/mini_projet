

let codes = ["C1", "C3", "C2", "C1", "C8", "C2", "C1"];

let codeCherche =prompt("Entrez le code à chercher (C1, C2, C3, C8) :") ;

let compteur = 0;

for (let i = 0; i < codes.length; i++) {
  if (codes[i] === codeCherche) {
    compteur++;
  }
}

console.log("Le code", codeCherche, "apparait", compteur, "fois.");


const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

let primeiroArray = [52, 47, 66, 14, 87];
let segundoArray = ["sanduíche", "chocolate", "suco", "bolacha"];
let terceiroArray = [59, "texto", false];


// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(primeiroArray.length);
console.log(segundoArray.length);
console.log(terceiroArray.length);

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(primeiroArray[0]);
console.log(segundoArray[1]);
console.log(terceiroArray[2]);

// - Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(primeiroArray.includes(47) == true);
console.log(terceiroArray.includes("sapato") == true);

let arrayzinhoOriginal = [55, 21, 8, 85];
let arrayzinhoOriginalCopia = arrayzinhoOriginal.slice();
let arrayzinhoOriginalCopia2 = arrayzinhoOriginal.slice();

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayzinhoOriginal.push(100);
console.log("push");
console.log(arrayzinhoOriginal);
console.log(arrayzinhoOriginalCopia);

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
arrayzinhoOriginalCopia.pop();
console.log("pop");
console.log(arrayzinhoOriginal);
console.log(arrayzinhoOriginalCopia);

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
arrayzinhoOriginalCopia2.splice(1,1);
console.log("splice");
console.log(arrayzinhoOriginal);
console.log(arrayzinhoOriginalCopia2);
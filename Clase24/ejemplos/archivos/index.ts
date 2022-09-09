await Deno.writeTextFile("test.txt", "Hola deno");

const text = await Deno.readTextFile("test.txt");
console.log(text);
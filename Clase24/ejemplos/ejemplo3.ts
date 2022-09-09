import {
    red, green, bgWhite, bgYellow, bold
} from "https://deno.land/std@0.100.0/fmt/colors.ts";

console.log(bgYellow(bold(red('Hola mundo'))));
console.log(bgWhite(bold(green('Hola mundo'))));

const port = Number(Deno.env.get("PORT")) || 8080;
console.log(port);
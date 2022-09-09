import { parse } from "https://deno.land/std@0.152.0/datetime/mod.ts";

const myDate = parse("04-07-2022", "dd-mm-yyyy");

console.log(myDate);
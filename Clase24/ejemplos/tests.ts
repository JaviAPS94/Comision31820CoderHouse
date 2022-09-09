import {
    assertEquals,
    assertStrictEquals
} from "https://deno.land/std@0.100.0/testing/asserts.ts";

Deno.test("example", function(): void {
    assertEquals("mundo", "mundo");
})

Deno.test("isStrictEqual", function(): void {
    const a = {};
    const b = {};
    assertStrictEquals(a, b);
})
import { bgGreen, black } from 'https://deno.land/std/colors/mod.ts';

const message: string = 'Ran with deno!';

console.log(black(bgGreen(message)));
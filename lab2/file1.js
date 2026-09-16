import { writeFile } from "fs/promises";

await writeFile("stud.txt", "Name: Aniket Kumar");
console.log("File written");
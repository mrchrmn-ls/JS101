const characters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
const sections = [8, 4, 4, 4, 12];

function generateUUID() {
  UUIDarray = sections.map(num => {
    let section = "";

    for (let i = 0; i < num; i += 1) {
      section += characters[Math.floor(16 * Math.random())];
    }

    return section;
  });

  return UUIDarray.join("-");
}

console.log(generateUUID());
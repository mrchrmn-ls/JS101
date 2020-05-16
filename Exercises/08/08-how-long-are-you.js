function wordLengths(string) {
  if (!string) return [];
  return string.split(" ").map(word => `${word} ${word.length}`);
}

console.log(wordLengths("It ain't easy, is it?"));

console.log(wordLengths(""));

console.log(wordLengths());
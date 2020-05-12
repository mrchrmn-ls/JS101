function swapCase(string) {
  return string
         .split('')
         .map(letter => {
          return /[A-Z]/.test(letter) ?
          letter.toLowerCase() : letter.toUpperCase();
         })
         .join('');
}

swapCase('Tonight on XYZ-TV');
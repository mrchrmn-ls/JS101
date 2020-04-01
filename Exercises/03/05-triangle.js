const triangle = int => {
  for (let i = 1; i <= int; i += 1) {
    console.log("*".repeat(i).padStart(int));
  }
};

triangle(9);
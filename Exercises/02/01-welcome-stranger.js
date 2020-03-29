const greetings = (nameArr, statusObj) => {
  let fullName = nameArr.join(" ");
  let status = statusObj["title"] + " " + statusObj["occupation"];
  return `Hello, ${fullName}! Nice to have a ${status} around.`;
};

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
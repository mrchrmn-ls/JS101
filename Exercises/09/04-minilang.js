const commands = {
  PUSH: (register, stack) => stack.push(register),
  ADD: (register, stack) => register + stack.pop(),
  SUB: (register, stack) => register - stack.pop(),
  MULT: (register, stack) => register * stack.pop(),
  DIV: (register, stack) => Math.floor(register / stack.pop()),
  MOD: (register, stack) => Math.floor(register % stack.pop()),
  POP: (_, stack) => stack.pop(),
  PRINT: (register, _) => console.log(`${register}`)
}


function minilang(program) {
  let register = 0;
  let stack = [];

  program.split(" ").forEach(command => {

    if (!Object.keys(commands).includes(command)) {

      if (Number(command)) {
        register = Number(command);
      } else {
        console.error("Invalid operation");
      }

    } else if (["ADD", "SUB", "MULT", "DIV", "MOD", "POP"].includes(command)) {

      if (stack.length === 0) {
        console.error("Stack empty before end of program.");
      } else {
        register = commands[command](register, stack);
      }

    } else {
      commands[command](register, stack);
    }
  });
}

minilang("5 PUSH PULL");
minilang("5 PUSH POP ADD");

minilang('PRINT');
// 0
console.log();
minilang('5 PUSH 3 MULT PRINT');
// 15

console.log();
minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

console.log();
minilang('5 PUSH POP PRINT');
// 5

console.log();
minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

console.log();
minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

console.log();
minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

console.log();
minilang('-3 PUSH 5 SUB PRINT');
// 8

console.log();
minilang('6 PUSH');
const reverse = function(args) {
  let str = "";
  let reversedStr = "";
  for (let i = 0; i < args.length; i++) {
    str = args[i];
    for (let j = str.length - 1; j >= 0; j--){
      reversedStr += str.charAt(j);
    }
    console.log(reversedStr);
    reversedStr = "";
  }
};

console.log(reverse(process.argv.slice(2)));

/*
node reverse.js hello goodbyen
olleh
eybdoog
*/
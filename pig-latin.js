const pigLatin = function(args) {
  let str = "";
  let pigLatinStr = "";
  const suffix = "ay";

  for (let i = 0; i < args.length; i++) {
    str = args[i];

    pigLatinStr = str.substring(1) + str.charAt(0) + suffix;
    args[i] = pigLatinStr;
   }
   console.log(args.join(" "))
};

console.log(pigLatin(process.argv.slice(2)));

/*
node pig-latin.js this is all just gibberish
histay siay llaay ustjay ibberishgay
*/
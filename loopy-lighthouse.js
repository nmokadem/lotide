function loopyLighthouse(range, multiples, words){
  var str = "";

  for (let i = range[0]; i < range[1] ; i++){
    let str = "";
    for (let j = 0; j <= multiples.length; j++){
      if (i % multiples[j] === 0) str += words[j];
    }
    if (str === "") str = i;

    console.log(str)
  }
}

//loopyLighthouse([5,50],[2,3],['two','three']);
loopyLighthouse([5,50],[2,3,4],['two','three','four']);

/*
5
twothree
7
two
three
two
11
twothree
13
two
three
two
17
twothree
19
two
three
two
23
twothree
25
two
three
two
29
twothree
31
two
three
two
35
twothree
37
two
three
two
41
twothree
43
two
three
two
47
twothree
49
*/
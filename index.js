function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log( string.toUpperCase());
  }

  function logWhisper(string) {
    console.log( string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate(string) {
    console.log(string === string.toLowerCase());
    return "I can't hear you!";
    console.log(string === string.toUpperCase());
    return "YES INDEED!";
    console.log(string ===  "Let's have dinner together!");
    return "I would love to!";
  }

  /*const string = "Hello!";

console.log(string);
console.log(string.toUpperCase());

console.log(string === string.toUpperCase());*/
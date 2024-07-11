function palindorm(str) {
  var strSplit = str.split("");
  if (strSplit.reverse().join("") === str) {
    return "palindorm";
  }
  return "no palindrom";
}
palindorm("asa");

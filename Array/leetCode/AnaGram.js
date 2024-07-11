//https://leetcode.com/problems/valid-anagram/description/
//*Time complexity will be O(a+b)
//Given two strings s and t, return true if t is an anagram of s, and false otherwise.
/*
  anagram n Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
  Input: s = "anagram", t = "nagaram"

  !i know you didn't understand this so basically anagram is basically the a two string are anagram on two conditions
  
  !first: the length of the strings should be equal 

  eg image s=rat,c=ca here the length of the strings isn't equal so s isn't anagram of t right?

  !even if they have same length we've to make sure the occuuring of each character in both should equal
   eg 'rat' 'caf' they're not each other anagram
 
  hitsyou'd have to keep tract of how many times each item has been occurd

*/
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  const sKey = new Map();
  for (let i = 0; i < s.length; i++) {
    const check = sKey.get(s[i]);
    if (check !== undefined) {
      let value = sKey.get(s[i]);
      value++;
      sKey.set(s[i], value);
    } else {
      sKey.set(s[i], 1);
    }
  }
  const tKeys = new Map();
  for (let i = 0; i < t.length; i++) {
    const check = tKeys.get(t[i]);
    if (check !== undefined) {
      let value = tKeys.get(t[i]);
      value++;
      tKeys.set(t[i], value);
    } else {
      tKeys.set(t[i], 1);
    }
  }
  console.log(tKeys, sKey);
  for (let i = 0; i < t.length; i++) {
    const key = s[i];
    if (tKeys.get(key) !== sKey.get(key) || undefined) {
      return false;
    }
  }
  return true;
};

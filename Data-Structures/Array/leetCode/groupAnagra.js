var groupAnagrams = function (strs) {
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
    for (let i = 0; i < t.length; i++) {
      const key = s[i];
      if (tKeys.get(key) !== sKey.get(key) || undefined) {
        return false;
      }
    }
    return true;
  };
  const anagram = {};

  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (isAnagram(strs[i], strs[j])) {
        if (anagram[strs[i]]) {
          anagram[strs[i]].push(strs[j]);
        } else {
          anagram[strs[i]] = [strs[j]];
        }
      }
    }
  }
  return anagram;
};

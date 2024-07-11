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
    console.log(tKeys.get(key), sKey.get(key));
    if (tKeys.get(key) !== sKey.get(key) || undefined) {
      return false;
    }
  }
  return true;
};

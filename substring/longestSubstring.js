export const isAllSymbUniq = (string) => {
  const set = new Set(string.split(''));
  return set.size === string.length;
};

export const longestSubsting = (string) => {
  const result = [];
  for (let start = 0; start < string.length; start += 1) {
    for (let end = start + 1; end <= string.length; end += 1) {
      const currentSubstring = string.substring(start, end);
      if (isAllSymbUniq(currentSubstring)) result.push(currentSubstring);
    }
  }
  return result.reduce((acc, str) => (str.length > acc.length ? str : acc), '');
};

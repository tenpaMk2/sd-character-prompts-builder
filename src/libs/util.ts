// Workaround for the problem of vanilla `Object.keys()` returning not union but `string[]` type
// even though object has fixed keys.
// <https://zenn.dev/ossamoon/articles/694a601ee62526>
export const getKeys = <T extends { [key: string]: unknown }>(
  obj: T,
): (keyof T)[] => {
  return Object.keys(obj);
};

export const isDuplicated = (array: readonly any[]) => {
  const set = new Set(array);
  return set.size !== array.length;
};

export const isValidCSSName = (name: string) =>
  /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/.test(name);

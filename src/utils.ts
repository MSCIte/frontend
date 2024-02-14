/**
 * (typescript) returns the given object with keys sorted alphanumerically.
 * @param {T} obj the object to sort
 * @returns {T} the sorted object
 */
export const sortByKeys = <T extends object>(obj: T): T =>
  Object.keys(obj)
    .sort()
    .reduce((acc, c) => {
      //@ts-expect-error asdfasdf aasdf
      acc[c] = obj[c as unknown as keyof T];
      return acc;
    }, {}) as T;

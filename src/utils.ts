import uFuzzy from "@leeoniya/ufuzzy";

let opts = {};

let uf = new uFuzzy(opts);

export const searchForString = (corpus: string[], query: string) => {
  // pre-filter
  let idxs = uf.filter(corpus, query);
  console.log("searching", corpus, query)

  let arr: string[] = [];
  // idxs can be null when the query is non-searchable (has no alpha-numeric chars)
  if (idxs != null && idxs.length > 0) {
    // sort/rank only when <= 1,000 items
    let infoThresh = 1e4;

    if (idxs.length <= infoThresh) {
      let info = uf.info(idxs, corpus, query);

      // order is a double-indirection array (a re-order of the passed-in idxs)
      // this allows corresponding info to be grabbed directly by idx, if needed
      let order = uf.sort(info, corpus, query);

      // render post-filtered & ordered matches
      for (let i = 0; i < Math.min(order.length, 100); i++) {
        // using info.idx here instead of idxs because uf.info() may have
        // further reduced the initial idxs based on prefix/suffix rules
        arr.push(corpus[info.idx[order[i]]]);
      }
    } else {
      let arr = [];
      // render pre-filtered but unordered matches
      for (let i = 0; i < idxs.length; i++) {
        arr.push(corpus[idxs[i]]);
      }
    }
  }
  return arr;
};

/**
 * Compares the similarity between two strings using an n-gram comparison method.
 * The grams default to length 2.
 *
 * Source: https://stackoverflow.com/a/62216738
 *
 *
 * @param str1 The first string to compare.
 * @param str2 The second string to compare.
 * @param gramSize The size of the grams. Defaults to length 2.
 */
export function stringSimilarity(
  str1: string,
  str2: string,
  gramSize: number = 2
) {
  function getNGrams(s: string, len: number) {
    s = " ".repeat(len - 1) + s.toLowerCase() + " ".repeat(len - 1);
    const v = new Array(s.length - len + 1);
    for (let i = 0; i < v.length; i++) {
      v[i] = s.slice(i, i + len);
    }
    return v;
  }

  if (!str1?.length || !str2?.length) {
    return 0.0;
  }

  //Order the strings by length so the order they're passed in doesn't matter
  //and so the smaller string's ngrams are always the ones in the set
  const s1 = str1.length < str2.length ? str1 : str2;
  const s2 = str1.length < str2.length ? str2 : str1;

  const pairs1 = getNGrams(s1, gramSize);
  const pairs2 = getNGrams(s2, gramSize);
  const set = new Set<string>(pairs1);

  const total = pairs2.length;
  let hits = 0;
  for (const item of pairs2) {
    if (set.delete(item)) {
      hits++;
    }
  }
  return hits / total;
}

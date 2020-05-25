import jaro from 'talisman/metrics/jaro';
import itsSet from 'its-set';

import { ALL_WORDS } from './constants';

export default (word, haystack) => {
  return (haystack || ALL_WORDS)
    .map((numberWord) => ({
      word: numberWord,
      score: jaro.similarity(numberWord, word),
    }))
    .reduce(
      (acc, stat) =>
        !itsSet(acc.score) || stat.score > acc.score ? stat : acc,
      {}
    ).word;
};

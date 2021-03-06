export const ar = {
  move: (arr, from, to) => arr.splice(to, 0, arr.splice(from, 1)[0]),
  shuffle: (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  },
  shuff: (arr) =>
    arr.map((v, k) => ar.move(arr, Math.floor(Math.random() * k + 1), k)), //slightly less random
};

export const num = {
  tenth: (number) => parseFloat(number.toFixed(2)),
  clamp: (number, min, max) => Math.min(Math.max(min, number), max),
};

export const obj = {
  randomProperty: (obj) => {
    if (obj) {
      const keys = Object.keys(obj);
      //bitshift operator is like using Math.round(), but it will always round down so an invalid key cant be selected
      return obj[keys[(keys.length * Math.random()) << 0]];
    }
  },
};

export const jsonUtil = {
  fetch: async function (URL, callback) {
    const response = await fetch(`${URL}`);
    const json = await response.json();
    callback(json);
  },
};

export const app = {
  gtDmQuery(word, maxResults) {
    //https://api.datamuse.com/words?ml=flower&qe=sp&md=p&max=3
    return `https://api.datamuse.com/words?sp=flower&qe=sp&md=dpfr&max=1`
  }
}
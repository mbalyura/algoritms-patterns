export const getRandInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandArray = (length, maxNum) => [...Array(length)].map(() => getRandInt(0, maxNum));

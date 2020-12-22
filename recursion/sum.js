const sum = ([first, ...rest]) => (rest.length === 0 ? first : first + sum(rest));

export default sum;

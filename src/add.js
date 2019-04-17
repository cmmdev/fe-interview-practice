function add(x, y) {
  let c = x, a = y, temp;
  do {
    temp = c
    c = c & a;
    a = temp ^ a;

    c = c << 1
  } while(c)
  return a;
}

module.exports = {add}
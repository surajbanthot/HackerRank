function is_alphaDash(str) {
  regexp = /^[a-z0-9\-]+$/i;
  return regexp.test(str) ? true : false;
}

console.log(is_alphaDash('12-133'));

console.log(is_alphaDash('\/'));
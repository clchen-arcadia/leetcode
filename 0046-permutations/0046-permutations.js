
function permute(input) {

  const results = [];

  function _getPermute(part) {
    if (part.length === input.length) {
      results.push([...part]);
      return;
    }

    for (const x of input) {
      if (!part.includes(x)) {
        part.push(x);
        _getPermute(part);
        part.pop();
      }
    }
  }

  _getPermute([]);

  return results;
}

function ziplist(list1, list2) {
  let newlist = _.flatten(_.zip(list1, list2));
  newlist = _.without(newlist, undefined);
  return newlist;
}

// Test
console.clear();
console.log(_.identity(1));
console.log(ziplist([1, 3, 5, 7, 9], [2, 4, 6, 8]));

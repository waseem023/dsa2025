const maxareacontainer = function (arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  let maxarea = 0;
  while (p1 < p2) {
    let height = Math.min(arr[p1], arr[p2]);
    let length = p2 - p1;
    let area = height * length;
    maxarea = Math.max(maxarea, area);

    if (arr[p1] < arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxarea;
};
console.log(maxareacontainer([7, 1, 2, 3, 9]));
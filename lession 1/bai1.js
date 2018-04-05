//sort 1 mang cac so co san

//cach 1 dung ham sort() cua js
const arr = [1, 2, 4, 3];
arr.sort();

console.log("sort bang ham sort co san " + arr);

//cach 2 dung selection sort
const selectionSort = (array) => {
  for (i = 0; i < array.length; i++) {
    //set min to the current iteration of i
    var min = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    var temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  }
  console.log(array);
};

arr2 = [1, 8, 3, 2, 9, 6];

selectionSort(arr2);

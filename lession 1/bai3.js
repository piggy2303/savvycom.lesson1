/* tim kiem bang cay nhi phan 
tra ve vi tri cua 
*/
const arr = [1, 8, 3, 2, 9, 6];
console.log(arr);

const binarySearch = (array=[], value) => {
    array.sort();
    console.log(array);
    console.log("finding "+value);
    
  let start = 0;
  let stop = array.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (array[middle] !== value && start < stop) {
    if (value < array[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + stop) / 2);
  }
  if (array[middle] != value) {
      console.log("not found");
  }
  else{
    console.log("index is "+ (middle+1));
  }
};

binarySearch(arr, 4);
binarySearch(arr, 6);
binarySearch(arr, 9);

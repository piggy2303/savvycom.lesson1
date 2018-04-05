/* cho mot mang co san
nhap vao mot so n
dua ra so lon thu n trong mang do

ex : [1,2,3,9,4]
input 1 => 9
input 2 => 4
input 10 => err
*/

const findItem = (n, array = []) => {
  // sort lai array bang selection sort

  if (n > array.length || n < 0) {
    console.log("err");
  } else {
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
    console.log(array[array.length - n]);
  }
};

const arr2 = [1, 8, 3, 2, 9, 6];

findItem(1, arr2);  // 9
findItem(3, arr2);  // 6
findItem(7, arr2);  // err
findItem(-5, arr2); // err